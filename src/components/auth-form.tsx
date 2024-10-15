import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

type AuthFormProps = {
  type: 'signup' | 'login';
};
export default function AuthForm({ type }: AuthFormProps) {
  return (
    <form>
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" />
      </div>
      <div className="space-y-1 mt-2">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" />
      </div>

      <Button className="mt-4">
        {type === 'signup' ? 'Sign Up' : 'Log In'}
      </Button>
    </form>
  );
}
