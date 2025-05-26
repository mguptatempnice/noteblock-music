'use client';

import { useEffect } from 'react';

const defaultDarkTheme = {
  'primary-color': '#8e24aa',
  'accent-color': '#ab47bc',
  'bg-default': '#1a1a1a',
  'bg-paper': '#242424',
  'text-primary': '#ffffff',
};

const useApplyCSS = (userId: string | null) => {
  useEffect(() => {
    const fetchAndApplyCSS = async () => {
      try {
        let cssConfig = defaultDarkTheme; // Start with the default dark theme

        if (userId) {
          const response = await fetch(`/api/css/${userId}`);
          if (response.ok) {
            const fetchedConfig = await response.json();

            // Convert camelCase keys to kebab-case
            cssConfig = Object.fromEntries(
              Object.entries(fetchedConfig).map(([key, value]) => [
                key.replace(/([A-Z])/g, '-$1').toLowerCase(), // Convert camelCase to kebab-case
                value,
              ])
            ) as typeof defaultDarkTheme;
          } else {
            console.warn(`No theme found for user: ${userId}, applying default theme.`);
          }
        }

        // Apply CSS variables to the :root element
        Object.entries(cssConfig).forEach(([key, value]) => {
          document.documentElement.style.setProperty(`--${key}`, value);
        });

        console.log('Applied CSS variables:', cssConfig);
      } catch (error) {
        console.error('Error fetching CSS configuration:', error);
      }
    };

    fetchAndApplyCSS();
  }, [userId]);
};

export default useApplyCSS;