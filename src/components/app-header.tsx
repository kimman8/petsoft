'use client';
import Link from 'next/link';
import Logo from './logo';
import { usePathname } from 'next/navigation';
const routes = [
  { name: 'Dashboard', href: '/app/dashboard' },
  { name: 'Account', href: '/app/account' },
];
export default function AppHeader() {
  const activePathname = usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/10 py-2 ">
      <Logo />
      <nav>
        <ul className="flex gap-2 text-xs">
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={`text-white/70 ${
                  activePathname === route.href
                    ? 'bg-black/10 text-white rounded-sm'
                    : ''
                } px-2 py-1 hover:text-white focus:text-white transition`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
