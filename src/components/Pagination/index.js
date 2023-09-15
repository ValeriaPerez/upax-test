import React from 'react';
import Pagination from '@mui/material/Pagination';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import '../../App.css';

const SimplePagination = ({ setPage,  page, info, pages, characterEmpty }) => {
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
        hidePrevButton={!info.prev}
        showFirstButton={info.prev}
        showLastButton={info.next}
        count={pages}
        defaultPage={1}
        boundaryCount={2}
        page={page}
        onChange={handleChange}
        disabled={characterEmpty}
        size='large'
      />
    </Stack>
  );
};

export default SimplePagination;