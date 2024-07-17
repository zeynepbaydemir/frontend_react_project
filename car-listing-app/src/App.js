import React from 'react';
import { Container, Grid, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import FilterSidebar from './components/FilterSidebar';
import CarList from './components/CarList';
import Footer from './components/Footer'; // Import Footer component

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f5f5f5' }}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ flex: 1, pt: '120px' }}> {/* Adjust pt to ensure sufficient space below Navbar */}
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <FilterSidebar />
            </Grid>
            <Grid item xs={9}>
              <CarList />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer /> {/* Footer component */}
    </Box>
  );
}

export default App;
