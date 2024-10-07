'use server';
import prisma from '@/lib/db';
import { sleep } from '@/lib/utils';
import { revalidatePath } from 'next/cache';

export async function addPet(formData) {
  await sleep(2000);
  try {
    await prisma.pet.create({
      data: {
        name: formData.get('name') as string,
        ownerName: formData.get('ownerName') as string,
        imageUrl:
          (formData.get('imageUrl') as string) ||
          'https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png',
        age: +(formData.get('age') as string),
        notes: formData.get('notes') as string,
      },
    });
  } catch (error) {
    return {
      message: 'Failed to add pet',
    };
  }
  revalidatePath('/app', 'layout');
}

export async function editPet(petId, formData) {
  await sleep(2000);
  try {
    await prisma.pet.update({
      where: {
        id: petId,
      },
      data: {
        name: formData.get('name') as string,
        ownerName: formData.get('ownerName') as string,
        imageUrl:
          (formData.get('imageUrl') as string) ||
          'https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png',
        age: +(formData.get('age') as string),
        notes: formData.get('notes') as string,
      },
    });
  } catch (error) {
    return {
      message: 'Failed to update pet',
    };
  }
  revalidatePath('/app', 'layout');
}

export async function deletePet(petId) {
  await sleep(2000);
  try {
    await prisma.pet.delete({
      where: {
        id: petId,
      },
    });
  } catch (error) {
    return {
      message: 'Failed to delete pet',
    };
  }
  revalidatePath('/app', 'layout');
}
