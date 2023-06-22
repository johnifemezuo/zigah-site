import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
  children: React.ReactNode
  link: string
  activeClass: string
}

function NavLink({ children, link, activeClass }: NavLinkProps) {
    
  return (
    <Link href={link}>
      <a
        className={`text-gray-dark transitions hover:text-primary-magenta ${activeClass}`}
      >
        {children}
      </a>
    </Link>
  );
}

export default NavLink; 


