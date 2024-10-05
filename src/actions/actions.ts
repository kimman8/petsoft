'use server';
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function addPet(formData) {
  console.log('formData', formData);
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
  revalidatePath('/app', 'layout');
}
