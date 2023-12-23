import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const App = () => {
  const Item = styled(Paper)(({ theme, height }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 0,
    color: theme.palette.text.secondary,
    border: '1px solid #8a8781',
    height: height || 'auto', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
      fontSize: '15px', 
      fontWeight: '700', 
  }));

  const lastItemStyle = {
    justifyContent: 'flex-start',
  };

  const secondItemStyle = {
    justifyContent: 'flex-end',
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box>
        <Grid container sx={{ width: '55vw' }}>
          <Grid item xs={3}>
            <Item height="55px">Lorem Ispan </Item>
          </Grid>
          <Grid item xs={9}>
            <Item height="55px" sx={secondItemStyle}>
              Link
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item height="250px">
              This is some content aligned in the center vertically and horizontally
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item height="250px"></Item>
          </Grid>
          <Grid item xs={12}>
            <Item height="120px" sx={lastItemStyle}>
              This is the footer content which is aligned left
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
