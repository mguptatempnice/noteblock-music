'use client';

import React from 'react';
import MusicCards from '@/components/MusicCards';
import useApplyCSS from '@/hooks/useApplyCSS';
import { usePathname } from 'next/navigation';

const UserPage = () => {
  const pathname = usePathname();

  // Extract userId from the pathname (e.g., /alice -> alice)
  const userId = pathname.split('/').pop() ?? null;

  // Apply CSS variables dynamically for the user
  useApplyCSS(userId);

  return (
    <div>
      <h1 style={{ color: 'var(--primary-color)' }}>Welcome, {userId}!</h1>
      <MusicCards />
    </div>
  );
};

export default UserPage;