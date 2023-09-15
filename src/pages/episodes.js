import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';

import FilterEpisodes from '../components/Filter/episodes';
import CardSkeleton from '../components/CardSkeleton';
import CardImage from '../components/CardImage';
import Modal from '../components/Modal';

import { useGetEpisodes } from '../api/episodes';
import { useGetGroupCharacter } from '../api/character';

const Episodes = () => {
  const [number, setNumber] = useState(1);
  const [newArrayEpisodes, setArrayEpisodes] = useState([]);
  const [count, setCount] = useState(true);
  const {episodes} = useGetEpisodes(number);
  const [open, setOpen] = useState(false);
  const [detailModal, setDetailModal] = useState();
  const [emptyImg] = useState('https://media.tenor.com/_BiwWBWhYucAAAAd/what-huh.gif');

  const {character, characterLoading, characterEmpty } = useGetGroupCharacter(
    newArrayEpisodes
  );

  const characterSelected = episodes.find( item => item.id === number);

  const setArrayCharacters = () => {
    let newArray = [];
    characterSelected?.characters?.map((item, index) => {
      if (count) {
        newArray.push(item.slice(42, ));
        if (index === 18) setCount(false);
      }
      setArrayEpisodes(newArray);
      return newArray;
    })
  };

  useEffect(() => {
    setCount(true);
    setArrayCharacters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number])

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
          <FilterEpisodes episode={number} episodes={episodes} setEpisodes={setNumber}/>
          <Typography variant="h2" gutterBottom>
            Episodes
          </Typography>
        </Stack>
        { characterLoading && <CardSkeleton /> }
        { !characterLoading && !characterEmpty &&
          <ImageList cols={3} rowHeight={280} gap={10}>
            { newArrayEpisodes.length > 0 ?
              character?.map((item, index) => {
                return (
                  <ImageListItem key={index}>
                    <CardImage handleOpen={() => handleOpen(item)} data={item} />
                  </ImageListItem>
                )
              })
            :
              character?.results?.map((item, index) => {
                return (
                  <ImageListItem key={index}>
                    <CardImage handleOpen={() => handleOpen(item)} data={item} />
                  </ImageListItem>
                )
              })
            }
          </ImageList>
        }
        { !characterLoading && characterEmpty &&
          <div>
            <p>No se encontraron resultados</p>
            <img src={emptyImg} className='App-empty' alt='empty' />
          </div>
        }
      </Container>
      <Modal detail={detailModal} open={open} handleClose={handleClose} />
    </div>
  );
};

export default Episodes;