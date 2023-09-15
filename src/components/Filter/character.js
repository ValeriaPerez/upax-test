import React from 'react';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterCharacter = ({
  status,
  setStatus,
  species,
  setSpecies,
  gender,
  setGender,
}) => {
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
    >
      <FormControl variant='filled'  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='demo-simple-select-standard-label'>Estatus</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          label='Status'
        >
          <MenuItem value={''}>None</MenuItem>
          <MenuItem value={'Alive'}>Alive</MenuItem>
          <MenuItem value={'Dead'}>Dead</MenuItem>
          <MenuItem value={'unknown'}>Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant='filled'  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='demo-simple-select-standard-label'>Especies</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          label='Species'
        >
          <MenuItem value={''}>None</MenuItem>
          <MenuItem value={'Human'}>Human</MenuItem>
          <MenuItem value={'Alien'}>Alien</MenuItem>
          <MenuItem value={'Humanoid'}>Humanoid</MenuItem>
          <MenuItem value={'Cronenberg'}>Cronenberg</MenuItem>
          <MenuItem value={'Mythological'}>Mythological</MenuItem>
          <MenuItem value={'Animal'}>Animal</MenuItem>
          <MenuItem value={'Robot'}>Robot</MenuItem>
          <MenuItem value={'Planet'}>Planet</MenuItem>
          <MenuItem value={'Poopybutthole'}>Poopybutthole</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='demo-simple-select-filled-label'>Gender</InputLabel>
        <Select
          labelId='demo-simple-select-filled-label'
          id='demo-simple-select-filled'
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <MenuItem value={''}>None</MenuItem>
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Genderless'}>Genderless</MenuItem>
          <MenuItem value={'Unknown'}>Unknown</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default FilterCharacter;
