import React from 'react';
import { Box, Toolbar, Typography, AppBar } from '@mui/material';

export default function Layout({ children }) {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar>
        <Toolbar>
          <Typography variant='h1' noWrap>
            Open Seattle
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {children}
    </Box>
  );
}
