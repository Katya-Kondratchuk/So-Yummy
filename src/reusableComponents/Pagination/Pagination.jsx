import * as React from 'react';
import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';
import css from './Pagination.module.css';

export default function BasicPagination({ count }) {
  return (
    <div className={css.paginationWrapper}>
      <Stack spacing={2}>
        <Pagination count={count} className={css.mui} />
      </Stack>
    </div>
  );
}
