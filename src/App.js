import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';

import { useGetCharacter } from './api/character';

import CardImage from './components/CardImage';
import CardSkeleton from './components/CardSkeleton';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import SimplePagination from './components/Pagination';
import Search from './components/Search';
import FilterCharacter from './components/Filter/character';

import Episodes from './pages/episodes';
import Location from './pages/locations';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exactly path="/" element={<Home />} />
        <Route exactly path="/episodes" element={<Episodes />} />
        <Route exactly path="/locations" element={<Location />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [detailModal, setDetailModal] = useState();
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [emptyImg] = useState('https://media.tenor.com/_BiwWBWhYucAAAAd/what-huh.gif');
  const {character, characterInfo, characterLoading, characterEmpty } = useGetCharacter(
    page, search, status, gender, species
  );

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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
          <Search setSearch={setSearch} updatePageNumber={setPage} />
          <FilterCharacter
            status={status}
            setStatus={setStatus}
            species={species}
            setSpecies={setSpecies}
            gender={gender}
            setGender={setGender}
          />
          <Typography variant="h2" gutterBottom>
            Characters
          </Typography>
          { characterLoading && <CardSkeleton /> }
          { !characterLoading && !characterEmpty &&
            <ImageList cols={3} rowHeight={280} gap={10}>
              { character?.map((item, index) => {
                return (
                  <ImageListItem key={index}>
                    <CardImage handleOpen={() => handleOpen(item)} data={item} />
                  </ImageListItem>
                )
              })}
            </ImageList>
          }
          { !characterLoading && characterEmpty &&
            <div>
              <p>No se encontraron resultados</p>
              <img src={emptyImg} className='App-empty' alt='empty' />
            </div>
          }
        </Stack>
        <SimplePagination
          characterEmpty={characterEmpty}
          pages={characterInfo.pages}
          characterInfo
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPage={rowsPerPage}
          info={characterInfo} />
      </Container>
      <Modal detail={detailModal} open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
