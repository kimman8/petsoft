'use server';

import prisma from '@/lib/db';
import { sleep } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { petFormSchema, petIdSchema } from '@/lib/validations';
import { auth, signIn, signOut } from '@/lib/auth';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

// --- user actions ---

export async function logIn(formData: FormData) {
  await signIn('credentials', formData);
}

export async function signUp(formData: FormData) {
  const hashedPassword = await bcrypt.hash(
    formData.get('password') as string,
    10
  );
  await prisma?.user.create({
    data: {
      email: formData.get('email') as string,
      hashedPassword,
    },
  });
  await signIn('credentials', formData);
}

export async function logOut() {
  await signOut({ redirectTo: '/' });
}

// --- pet actions ---

export async function addPet(pet: unknown) {
  await sleep(1000);

  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }

  const validatedPet = petFormSchema.safeParse(pet);
  if (!validatedPet.success) {
    return {
      message: 'Invalid pet data',
    };
  }
  try {
    await prisma.pet.create({
      data: {
        ...validatedPet.data,
        user: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
    return {
      message: 'Failed to add pet',
    };
  }
  revalidatePath('/app', 'layout');
}

export async function editPet(petId: unknown, newPetData: unknown) {
  await sleep(1000);
  const validatedPet = petFormSchema.safeParse(newPetData);
  const validatedPetId = petIdSchema.safeParse(petId);
  if (!validatedPet.success || !validatedPetId.success) {
    return {
      message: 'Invalid pet data',
    };
  }
  try {
    await prisma.pet.update({
      where: {
        id: validatedPetId.data,
      },
      data: validatedPet.data,
    });
  } catch (error) {
    return {
      message: 'Failed to update pet',
    };
  }
  revalidatePath('/app', 'layout');
}

export async function deletePet(petId: unknown) {
  await sleep(1000);
  const validatedPetId = petIdSchema.safeParse(petId);
  if (!validatedPetId.success) {
    return {
      message: 'Invalid pet id',
    };
  }
  try {
    await prisma.pet.delete({
      where: {
        id: validatedPetId.data,
      },
    });
  } catch (error) {
    return {
      message: 'Failed to delete pet',
    };
  }
  revalidatePath('/app', 'layout');
}
