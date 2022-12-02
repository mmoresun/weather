import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: 6 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href="https://mmoresun.github.io/weather" style={{textDecoration: 'none', color: 'white'}}>Weather Anywhere</a>
          </Typography>
          <Button color="inherit" size='small' href='https://github.com'>GitHub Code (earlier)</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}