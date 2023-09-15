import React from 'react';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterLocations = ({ location, locations, setLocations }) => {
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
    >
      <FormControl variant='filled'  sx={{ m: 1, minWidth: 420 }}>
        <InputLabel id='demo-simple-select-standard-label'>Locations</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={location}
          onChange={(e) => setLocations(e.target.value)}
          label='Status'
        >
          {locations.map(item => {
            return (
              <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default FilterLocations;
