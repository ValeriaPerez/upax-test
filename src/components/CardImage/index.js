
import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Chip from '@mui/material/Chip';

export default function TitlebarImageList({
  handleOpen,
  data
}) {
  return (
    <ImageListItem>
      <Chip
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
        label={data.status}
        color={data.status === 'Alive' ? 'success' : data.status === 'unknown' ? 'info' : 'error'}
        variant='filled' />
      <img
        src={`${data.image}?w=250&h=300&fit=crop&auto=format`}
        srcSet={`${data.image}?w=250&h=300&fit=crop&auto=format&dpr=2 2x`}
        alt={data.name}
        loading="lazy"
      />
      <ImageListItemBar
        title={data.name}
        subtitle={data.gender}
        actionIcon={
          <IconButton
            onClick={handleOpen}
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about ${data.name}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
}