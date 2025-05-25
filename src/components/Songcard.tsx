// 'use client';

// import React from 'react'
// import { Card , CardMedia, Typography, IconButton} from '@mui/material';
// import Link from 'next/link';
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";

// export interface Song{
//   id:string;
//   name:string;
//   album:string;
//   artist:string;
//   duration:string;
//   history:string;
//   image:string;
//   artistReason:string;
// }

// interface SongCardProps {
//   song: Song;
//   index: number;
//   onLike?: (id: string) => void;
//   liked?:boolean;
// }


// const Songcard = ({song, index, onLike,liked}: SongCardProps) => {
//   return (
//     <Link href={`/songs/${song.id}`}
//       style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
//       passHref
//     >
//       <Card sx={{ 
//         display: 'flex', 
//         alignItems: 'center', 
//         p: 2, 
//         mb: 2,
//         width: '100%',
//         minWidth: 'auto', // Increased minimum width
//         gap: 2, // Consistent spacing between elements
//         mx:0,
//       }}>
//         {/* Index */}
//         <Typography sx={{ 
//           width: 30, 
//           textAlign: 'center',
//           fontWeight: 'medium'
//         }}>
//           {index + 1}
//         </Typography>

//         {/* Album Art */}
//         <CardMedia
//           component="img"
//           image={song.image}
//           alt={song.name}
//           sx={{ 
//             width: 50, 
//             height: 50, 
//             borderRadius: 1,
//             boxShadow: 1
//           }}
//         />

//         {/* Song Name */}
//         <Typography 
//           variant="subtitle1" 
//           sx={{ 
//             flexBasis: '25%',
//             fontWeight: 'medium'
//           }}
//         >
//           {song.name}
//         </Typography>

//         {/* Album Name */}
//         <Typography 
//           variant="body2" 
//           color="text.secondary"
//           sx={{ flexBasis: '20%' }}
//         >
//           {song.album}
//         </Typography>

//         {/* Artist Name */}
//         <Typography 
//           variant="body2" 
//           color="text.secondary"
//           sx={{ flexBasis: '20%' }}
//         >
//           {song.artist}
//         </Typography>

//         {/* Duration */}
//         <Typography 
//           variant="body2"
//           color="text.secondary"
//           sx={{ 
//             flexBasis: '10%',
//             textAlign: 'right'
//           }}
//         >
//           {song.duration}
//         </Typography>

//         {/* Like Button */}
//         <IconButton
//           size="small"
//           onClick={(e)=>{
//             e.preventDefault();
//             e.stopPropagation();
//             onLike?.(song.id)
//           } }
//           aria-label="like song"
//           sx={{ 
//             '&:hover': { color: 'primary.main' }
//           }}
//         >
//           {
//             liked ? (
//               <FavoriteIcon fontSize="small" />
//             ) : (
//               <FavoriteBorderIcon fontSize="small" />

//             )
//           }
//         </IconButton>
//       </Card>
//     </Link>
//   )
// }

// export default Songcard


'use client';

import React from 'react';
import { Card, CardMedia, Typography, IconButton } from '@mui/material';
import Link from 'next/link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface Song {
  id: string;
  name: string;
  album: string;
  artist: string;
  duration: string;
  history: string;
  image: string;
  artistReason: string;
}

interface SongCardProps {
  song: Song;
  index: number;
  onLike?: (id: string) => void;
  liked?: boolean;
}

const Songcard = ({ song, index, onLike, liked }: SongCardProps) => {
  return (
    <Link
      href={`/songs/${song.id}`}
      style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
      passHref
    >
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          mb: 2,
          width: '100%',
          minWidth: 'auto',
          gap: 2,
          mx: 0,
          backgroundColor: 'var(--bg-paper)', // Use CSS variable for background
          color: 'var(--text-primary)', // Use CSS variable for text color
          '&:hover': {
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {/* Index */}
        <Typography
          sx={{
            width: 30,
            textAlign: 'center',
            fontWeight: 'medium',
            color: 'var(--primary-color)', // Use CSS variable for primary color
          }}
        >
          {index + 1}
        </Typography>

        {/* Album Art */}
        <CardMedia
          component="img"
          image={song.image}
          alt={song.name}
          sx={{
            width: 50,
            height: 50,
            borderRadius: 1,
            boxShadow: 1,
          }}
        />

        {/* Song Name */}
        <Typography
          variant="subtitle1"
          sx={{
            flexBasis: '25%',
            fontWeight: 'medium',
            color: 'var(--primary-color)', // Use CSS variable for primary color
          }}
        >
          {song.name}
        </Typography>

        {/* Album Name */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            flexBasis: '20%',
            color: 'var(--accent-color)', // Use CSS variable for accent color
          }}
        >
          {song.album}
        </Typography>

        {/* Artist Name */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            flexBasis: '20%',
            color: 'var(--accent-color)', // Use CSS variable for accent color
          }}
        >
          {song.artist}
        </Typography>

        {/* Duration */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            flexBasis: '10%',
            textAlign: 'right',
          }}
        >
          {song.duration}
        </Typography>

        {/* Like Button */}
        <IconButton
          size="small"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onLike?.(song.id);
          }}
          aria-label="like song"
          sx={{
            '&:hover': { color: 'var(--primary-color)' }, // Use CSS variable for hover color
          }}
        >
          {liked ? (
            <FavoriteIcon fontSize="small" />
          ) : (
            <FavoriteBorderIcon fontSize="small" />
          )}
        </IconButton>
      </Card>
    </Link>
  );
};

export default Songcard;