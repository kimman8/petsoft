'use client';

import { PlusIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from './ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import PetForm from './pet-form';
import { useState } from 'react';

type PetButtonProps = {
  actionType: 'add' | 'edit' | 'checkout';
  children?: React.ReactNode;
  onClick?: () => void;
};
export default function PetButton({
  actionType,
  children,
  onClick,
}: PetButtonProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (actionType === 'checkout') {
    return (
      <Button size="default" variant="secondary" onClick={onClick}>
        {children}
      </Button>
    );
  }
  return (
    <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
      <DialogTrigger asChild>
        {actionType === 'add' ? (
          <Button size="icon">
            <PlusIcon className="h-6 w-6" />
          </Button>
        ) : (
          <Button size="default" variant="secondary">
            {children}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {actionType === 'add' ? 'Add a new pet' : 'Edit'}
          </DialogTitle>
        </DialogHeader>
        <PetForm
          actionType={actionType}
          onFormSubmission={() => setIsFormOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
