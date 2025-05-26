// src/app/[userId]/head.tsx
import React from 'react';
import { connectToDatabase } from '../../lib/db';

const defaultTheme = {
  'primary-color': '#8e24aa',
  'accent-color':  '#ab47bc',
  'bg-default':    '#1a1a1a',
  'bg-paper':      '#242424',
  'text-primary':  '#ffffff',
};

export default async function Head({ params }: { params: { userId: string }}) {
  const { userId } = params;
  let theme = defaultTheme;

  try {
    const db   = await connectToDatabase();
    const user = await db.collection('dynamic_css').findOne({ username: userId });
    if (user?.theme) {
      theme = Object.fromEntries(
        Object.entries(user.theme).map(([k, v]) => [
          k.replace(/([A-Z])/g, '-$1').toLowerCase(),
          v as string
        ])
      );
    }
  } catch (e) {
    console.error('Theme load error:', e);
  }

  const cssText = Object.entries(theme)
    .map(([key, val]) => `--${key}: ${val};`)
    .join(' ');

  return (
    <>
      <title>Music for {userId}</title>
      <style dangerouslySetInnerHTML={{ __html: `:root { ${cssText} }` }} />
    </>
  );
}
