// 'use client';

// import { Card, CardContent, Typography } from '@mui/material';
// import React from 'react'

// interface FactCardProps{
//     fact:string;
// }

// const FactCard = ({fact}:FactCardProps) => {
//   return (
//     <Card variant='outlined' 
//     sx={{ mb: 2, borderRadius: 2, bgcolor: 'background.paper' }}>
//         <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           {fact}
//         </Typography>
//       </CardContent>
//     </Card>
//   )
// }

// export default FactCard
'use client';

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface FactCardProps {
  fact: string;
}

const FactCard = ({ fact }: FactCardProps) => {
  return (
    <Card
      sx={{
        backgroundColor: 'var(--bg-paper)', // Use CSS variable for background
        color: 'var(--text-primary)', // Use CSS variable for text color
        p: 2,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: 2,
        transition: 'all 0.3s ease-in-out', // Smooth transition for theme changes
        '&:hover': {
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)', // Add hover effect
        },
      }}
    >
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            color: 'var(--primary-color)', // Dynamically apply the same color as the song color
          }}
        >
          {fact}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FactCard;