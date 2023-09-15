import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import '../../App.css';

const SimplePagination = ({ info, pages, characterEmpty }) => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack
      mt={4}
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
    >
      <Divider variant='fullWidth' />
      <Pagination
        count={pages}
        defaultPage={1}
        boundaryCount={2}
        page={page}
        onChange={handleChange}
        disabled={characterEmpty}
      />
    </Stack>
  );
};

export default SimplePagination;