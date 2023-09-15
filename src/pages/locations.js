import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';

import CardImage from '../components/CardImage';
import CardSkeleton from '../components/CardSkeleton';
import FilterLocations from '../components/Filter/locations';

import { useGetLocations } from '../api/locations';

const Locations = () => {
  const [number, setNumber] = useState(1);
  const {location, locationEmpty, locationLoading } = useGetLocations(number);
  const [open, setOpen] = useState(false);
  const [detailModal, setDetailModal] = useState();
  const [emptyImg] = useState('https://media.tenor.com/_BiwWBWhYucAAAAd/what-huh.gif');

  const handleOpen = (data) => {
    setDetailModal(data);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Container maxWidth="md">
        <Stack spacing={3}>
          <Typography variant="h2" gutterBottom>
            Locations
          </Typography>
          <FilterLocations location={number} locations={location} setLocations={setNumber} />

          { locationLoading && <CardSkeleton /> }
          { !locationLoading && !locationEmpty &&
            <ImageList cols={3} rowHeight={280} gap={10}>
              { location?.map((item, index) => {
                return (
                  <ImageListItem key={index}>
                    <CardImage handleOpen={() => handleOpen(item)} data={item} />
                  </ImageListItem>
                )
              })}
            </ImageList>
          }
          { !locationLoading && locationEmpty &&
            <div>
              <p>No se encontraron resultados</p>
              <img src={emptyImg} className='App-empty' alt='empty' />
            </div>
          }
        </Stack>
      </Container>
    </div>
  );
};

export default Locations;