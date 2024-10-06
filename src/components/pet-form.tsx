'use client';

import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { usePetContext } from '@/lib/hooks';
import { addPet } from '@/actions/actions';
import PetFormBtn from './pet-form-btn';
import { toast } from 'sonner';

type PetFormProps = {
  actionType: 'add' | 'edit';
  onFormSubmission: () => void;
};

export default function PetForm({
  actionType,
  onFormSubmission,
}: PetFormProps) {
  const { selectedPet } = usePetContext();
  return (
    <form
      action={async (formData) => {
        const error = await addPet(formData);
        if (error) {
          toast.warning(error.message);
        }
        onFormSubmission();
      }}
      className="flex flex-col"
    >
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            defaultValue={actionType === 'edit' ? selectedPet.name : ''}
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="ownerName">Owner Name</Label>
          <Input
            id="ownerName"
            name="ownerName"
            type="text"
            defaultValue={actionType === 'edit' ? selectedPet.ownerName : ''}
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="imageUrl ">Image URL</Label>
          <Input
            id="imageUrl"
            name="imageUrl"
            type="text"
            defaultValue={actionType === 'edit' ? selectedPet.imageUrl : ''}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            name="age"
            type="number"
            defaultValue={actionType === 'edit' ? selectedPet.age : ''}
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            name="notes"
            rows={3}
            defaultValue={actionType === 'edit' ? selectedPet.notes : ''}
            required
          />
        </div>
        <PetFormBtn actionType={actionType} />
      </div>
    </form>
  );
}
