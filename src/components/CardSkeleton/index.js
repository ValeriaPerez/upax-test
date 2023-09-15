import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Skeleton from '@mui/material/Skeleton';

export default function BasicCardSkeleton() {
  const [arraySkeleton] = useState([1,2,3,4,5,6,8,9,10]);

  return (
    <ImageList cols={3} rowHeight={280}>
      {arraySkeleton?.map((item) => {
        return (
          <ImageListItem key={item}>
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            <ImageListItemBar
              title={
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              }
              subtitle={
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              }
              actionIcon={
                <Skeleton sx={{margin: '0 1em'}} animation="wave" variant="circular" width={40} height={40} />
              }
            />
          </ImageListItem>
        )})
      }
    </ImageList>
  );
}