import React from 'react';
import { Container, Grid, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import FilterSidebar from './components/FilterSidebar';
import CarList from './components/CarList';
import Footer from './components/Footer'; // Footer bileşenini içe aktarın

function App() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}> {/* Kırık beyaz arka plan */}
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FilterSidebar />
          </Grid>
          <Grid item xs={9}>
            <CarList />
          </Grid>
        </Grid>
      </Container>
      <Footer /> {/* Footer bileşenini ekleyin */}
    </Box>
  );
}

export default App;

