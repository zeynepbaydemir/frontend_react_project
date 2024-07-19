import React from 'react';
import { Container, Grid, CssBaseline, Box, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import FilterSidebar from './components/FilterSidebar';
import CarList from './components/CarList';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f5f5f5' }}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ flex: 1, pt: '80px', pb: '80px' }}> {/* Padding bottom ekleyin */}
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Typography variant="body2" sx={{ mb: 2, mt: 2, color: '#6c757d' }}>
            69 Otomobil
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={3}>
              <FilterSidebar />
            </Grid>
            <Grid item xs={9}>
              <CarList />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
