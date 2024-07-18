import React from 'react';
import { Container, Grid, Alert, Typography, Box, IconButton, Divider } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import CarCard from './CarCard';
import car from '../images/reno.jpg';
import car1 from '../images/ford.jpg';

const carData = [
  {
    model: 'Renault Megane',
    year: 2022,
    price: '848,400',
    image: car,
    transmission: 'Otomatik',
    fuelType: 'Benzin',
    km: '38.991'
  },
  {
    model: 'Ford Tourneo Courier',
    year: 2021,
    price: '712,400',
    image: car1,
    transmission: 'Manuel',
    fuelType: 'Dizel',
    km: '66.829'
  },
  {
    model: 'Renault Megane',
    year: 2022,
    price: '848,400',
    image: car,
    transmission: 'Otomatik',
    fuelType: 'Benzin',
    km: '38.991'
  },
  {
    model: 'Ford Tourneo Courier',
    year: 2021,
    price: '712,400',
    image: car1,
    transmission: 'Manuel',
    fuelType: 'Dizel',
    km: '66.829'
  },
  {
    model: 'Renault Megane',
    year: 2022,
    price: '848,400',
    image: car,
    transmission: 'Otomatik',
    fuelType: 'Benzin',
    km: '38.991'
  },
  {
    model: 'Ford Tourneo Courier',
    year: 2021,
    price: '712,400',
    image: car1,
    transmission: 'Manuel',
    fuelType: 'Dizel',
    km: '66.829'
  },
  {
    model: 'Renault Megane',
    year: 2022,
    price: '848,400',
    image: car,
    transmission: 'Otomatik',
    fuelType: 'Benzin',
    km: '38.991'
  },
  {
    model: 'Ford Tourneo Courier',
    year: 2021,
    price: '712,400',
    image: car1,
    transmission: 'Manuel',
    fuelType: 'Dizel',
    km: '66.829'
  },
  {
    model: 'Renault Megane',
    year: 2022,
    price: '848,400',
    image: car,
    transmission: 'Otomatik',
    fuelType: 'Benzin',
    km: '38.991'
  },
  {
    model: 'Ford Tourneo Courier',
    year: 2021,
    price: '712,400',
    image: car1,
    transmission: 'Manuel',
    fuelType: 'Dizel',
    km: '66.829'
  },
  {
    model: 'Renault Megane',
    year: 2022,
    price: '848,400',
    image: car,
    transmission: 'Otomatik',
    fuelType: 'Benzin',
    km: '38.991'
  },
  {
    model: 'Ford Tourneo Courier',
    year: 2021,
    price: '712,400',
    image: car1,
    transmission: 'Manuel',
    fuelType: 'Dizel',
    km: '66.829'
  },
  // Diğer araçlar
];

const CarList = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, mb: 2 }}>
        <Typography variant="body2" sx={{ color: '#6c757d', display: 'flex', alignItems: 'center' }}>
          ⭐ Favori Araçlarım
        </Typography>
        <Typography variant="body2" sx={{ color: '#6c757d', display: 'flex', alignItems: 'center' }}>
          Son Eklenenler
        </Typography>
        <IconButton color="inherit">
          <ViewListIcon sx={{ color: '#6c757d' }} />
        </IconButton>
        <IconButton color="inherit">
          <ViewModuleIcon sx={{ color: '#6c757d' }} />
        </IconButton>
      </Box>
      <Alert variant="outlined" severity="info" sx={{ mb: 2, borderColor: '#90caf9', backgroundColor: '#e3f2fd' }}>
        <Typography component="span">
          Hemen Al fiyatlarımıza KDV ve tüm hizmet bedelleri
        </Typography>
        <Typography component="span" sx={{ fontWeight: 'bold' }}>
          {' dahildir.'}
        </Typography>
      </Alert>
      <Grid container spacing={2}>
        {carData.map((car, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12}>
              <CarCard car={car} />
            </Grid>
            {index < carData.length - 1 && (
              <Grid item xs={12}>
                <Divider />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default CarList;
