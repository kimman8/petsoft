import { Pet } from '@prisma/client';

export type PetEssentials = Omit<Pet, 'id' | 'updatedAt' | 'createdAt'>;
