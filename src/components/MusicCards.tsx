// 'use client';

// import { useState } from 'react';
// import { Box } from '@mui/material';
// import Songcard, {Song} from './Songcard';
// import {songs} from '@/data/songs';

// const MusicCards = () => {
//     const [like, setLike] = useState<Set<string>>(new Set());

//     const likeHandler = (id: string) => {
//         setLike((prev) => {
//             const next = new Set(prev);
//             if (next.has(id)) {
//                 next.delete(id);
//             } else {
//                 next.add(id);
//             }
//             return next;
//         });
//     };

//     return (
//         <Box sx={{ 
//             width: '100%',  // Take full width of parent
//             maxWidth: '100%',  // Don't overflow parent
//             mx: 'auto',
//             p:0, m:0, 
//             // mt: 4,
//             // px: 2  // Add some padding on the sides
//         }}>
//             {songs.map((song: Song, idx: number) => (
//                 <Songcard
//                     key={song.id}
//                     song={song}
//                     index={idx}
//                     onLike={likeHandler}
//                     liked = {like.has(song.id)}
//                 />
//             ))}
//         </Box>
//     )
// }

// export default MusicCards

'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import Songcard from './Songcard';
import { songs } from '@/data/songs'; // Import the songs list

const MusicCards = () => {
  const [like, setLike] = useState<Set<string>>(new Set());

  const likeHandler = (id: string) => {
    setLike((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        mx: 'auto',
        p: 0,
        m: 0,
        backgroundColor: 'var(--bg-default)', // Use CSS variable for background
      }}
    >
      {songs.map((song, idx) => (
        <Songcard
          key={song.id}
          song={song}
          index={idx}
          onLike={likeHandler}
          liked={like.has(song.id)}
        />
      ))}
    </Box>
  );
};

export default MusicCards;