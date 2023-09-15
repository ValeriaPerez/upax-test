import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const Search = ({ setSearch }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <TextField
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        fullWidth
        id='fullWidth'
        label='Escribe lo que estes buscando'
        variant='filled'
      />
    </Stack>
  );
};

export default Search;
