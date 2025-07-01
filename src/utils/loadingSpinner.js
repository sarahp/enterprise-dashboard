import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, Typography } from '@material-ui/core';

const loadingSpinner = ({ message = "Loading..." }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" py={4}>
      <CircularProgress />
      <Typography variant="body2" color="textSecondary" style={{ marginTop: '0.5rem' }}>
        {message}
      </Typography>
    </Box>
  );
};

export default loadingSpinner;
