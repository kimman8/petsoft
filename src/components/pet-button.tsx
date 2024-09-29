import { PlusIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';

type PetButtonProps = {
  actionType: 'add' | 'edit' | 'checkout';
  children?: React.ReactNode;
};
export default function PetButton({ actionType, children }: PetButtonProps) {
  if (actionType === 'add') {
    return (
      <Button size="icon">
        <PlusIcon className="h-6 w-6" />
      </Button>
    );
  } else if (actionType === 'edit') {
    return (
      <Button size="default" variant="secondary">
        {children}
      </Button>
    );
  } else if (actionType === 'checkout') {
    return (
      <Button size="default" variant="secondary">
        {children}
      </Button>
    );
  }
}
