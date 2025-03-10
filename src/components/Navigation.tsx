'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="page-links flex gap-6 text-lg">
      <Link 
        href="/" 
        className={`hover:text-gray-600 transition-colors ${pathname === '/' ? 'text-black' : 'text-gray-500'}`}
      >
        work
      </Link>
      <Link 
        href="/about" 
        className={`hover:text-gray-600 transition-colors ${pathname === '/about' ? 'text-black' : 'text-gray-500'}`}
      >
        about
      </Link>
    </div>
  );
} 