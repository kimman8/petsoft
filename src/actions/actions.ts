'use server';
import prisma from '@/lib/db';

export async function addPet(pet) {
  await prisma.pet.create({
    data: pet,
  });
}
