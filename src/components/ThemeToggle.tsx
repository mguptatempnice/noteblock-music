'use client';

import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { ColorModeContext } from '@/app/layout';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeToggle = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <IconButton
      onClick={toggleColorMode}
      sx={{
        color: mode === 'dark' ? '#ffffff' : '#000000',
      }}
    >
      {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;