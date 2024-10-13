'use client';

import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { usePetContext } from '@/lib/hooks';
import PetFormBtn from './pet-form-btn';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type PetFormProps = {
  actionType: 'add' | 'edit';
  onFormSubmission: () => void;
};

const petFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }).max(100),
  ownerName: z
    .string()
    .trim()
    .min(1, { message: 'Owner Name is required' })
    .max(100),
  imageUrl: z.union([
    z.literal(''),
    z.string().trim().url({ message: 'Invalid URL' }),
  ]),
  age: z.coerce.number().int().positive().max(9999),
  notes: z.union([z.literal(''), z.string().trim().max(1000)]),
});

type TPetForm = z.infer<typeof petFormSchema>;

export default function PetForm({
  actionType,
  onFormSubmission,
}: PetFormProps) {
  const petContext = usePetContext();
  if (!petContext) {
    throw new Error('PetContext is null');
  }
  const { selectedPet, handleAddPet, handleEditPet } = petContext;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<TPetForm>({
    resolver: zodResolver(petFormSchema),
  });
  return (
    <form
      action={async (formData) => {
        const result = await trigger();
        if (!result) {
          return;
        }
        onFormSubmission();
        const petData = {
          name: formData.get('name') as string,
          ownerName: formData.get('ownerName') as string,
          imageUrl:
            (formData.get('imageUrl') as string) ||
            'https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png',
          age: +(formData.get('age') as string),
          notes: formData.get('notes') as string,
        };
        if (actionType === 'edit') {
          await handleEditPet(selectedPet!.id, petData);
        } else if (actionType === 'add') {
          await handleAddPet(petData);
        }
      }}
      className="flex flex-col"
    >
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register('name')} />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="ownerName">Owner Name</Label>
          <Input id="ownerName" {...register('ownerName')} />
          {errors.ownerName && (
            <p className="text-red-500">{errors.ownerName.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="imageUrl ">Image URL</Label>
          <Input id="imageUrl" {...register('imageUrl')} />
          {errors.imageUrl && (
            <p className="text-red-500">{errors.imageUrl.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="age">Age</Label>
          <Input id="age" {...register('age')} />
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="notes">Notes</Label>
          <Textarea id="notes" {...register('notes')} />
          {errors.notes && (
            <p className="text-red-500">{errors.notes.message}</p>
          )}
        </div>
        <PetFormBtn actionType={actionType} />
      </div>
    </form>
  );
}
