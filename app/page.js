"use client";

import { Box, Stack, Typography } from "@mui/material";
import { firestore } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

const item = [
  'raspberry rose poppi',
  'coke',
  'spicy popcorn',
  'burrata',
  'olive sourdough',
  'thin pretzels',
  'buldak ramen',
  'turkey pepperoni',
  'yerba mate',
  'scandinavian swimmers',
  'arugula'
]

export default function Home() {
  useEffect(() => {
    const updatePantry = async () => {
      const snapshot = collection(firestore, 'items');
      const docs = await getDocs(snapshot);
      docs.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    }
    updatePantry();
  }, []);
  return (
    <Box
      width='100vw'
      height='100vh'
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
      bgcolor={'white'}
    >
      <Box
        border={'1px solid #333'}
      >
        <Box 
          width="800px"
          height="100px"
          bgcolor={'#ADD8E6'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography
          variant={'h2'}
          color={'#333'}
          textAlign={'center'}
          >
            Pantry Items
          </Typography>
        </Box>
        <Stack
          width="800px"
          height="300px"
          spacing={2}
          overflow={'auto'}
        >
          {item.map((i) => (
            <Box 
              key={i}
              width="100%"
              height="300px"
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              bgcolor={'#f0f0f0'}
            >
              <Typography
                variant={'h3'}
                color={'#333'}
                textAlign={'center'}
                sx={{fontWeight:'lighter'}}
              >
                {
                  // Capitalize first letter of the item
                  i.charAt(0).toUpperCase() + i.slice(1)
                }
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
