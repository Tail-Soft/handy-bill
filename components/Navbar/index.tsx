import Image from 'next/image';
import Link from 'next/link';

import { NavMenu } from './NavMenu';
import { NavbarBranding } from './NavbarBranding';
import links from './links.json';

export const Navbar = () => {
  return (
    <nav className="px-2 rounded w-full py-2">
      <div className="container flex justify-between items-center mx-auto">
        <NavbarBranding />
        <NavMenu />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {links.map((item) => (
              <li
                key={item.name}
                className="nav-item font-bold hover:scale-105"
              >
                <Link href={item.path} aria-current="page">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
