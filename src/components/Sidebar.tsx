// src/app/components/Sidebar.tsx
'use client';

import { Box, Drawer, Toolbar } from '@mui/material';
import musicFacts from '@/data/musicFacts';
import FactCard from './FactCard';

const drawerWidth = 400;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: 'background.paper',
          borderRight: 1,
          borderColor: 'divider',
        },
      }}
    >
      {/* Toolbar spacer to match AppBar height */}
      <Toolbar />

      <Box sx={{ p: 2, overflowY: 'auto' }}>
        {musicFacts.map((fact, idx) => (
          <FactCard key={idx} fact={fact} />
        ))}
      </Box>
    </Drawer>
  );
}
