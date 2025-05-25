'use client';
import { useEffect } from 'react';

interface DynamicCSSLoaderProps {
  userId: string;
}

export default function DynamicCSSLoader({ userId }: DynamicCSSLoaderProps) {
  useEffect(() => {
    if (!userId) return;

    let styleTag: HTMLStyleElement | null = null;

    fetch(`/api/css/${userId}`)
      .then(res => res.text())
      .then(cssText => {
        styleTag = document.createElement('style');
        styleTag.setAttribute('data-user-theme', userId);
        styleTag.innerHTML = cssText;
        document.head.appendChild(styleTag);
      });

    return () => {
      if (styleTag && document.head.contains(styleTag)) {
        document.head.removeChild(styleTag);
      }
    };
  }, [userId]);

  return null;
}
