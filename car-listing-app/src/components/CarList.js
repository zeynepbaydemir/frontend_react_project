import React from 'react';
import { Container, Grid, Alert, Typography } from '@mui/material';
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
];

const CarList = () => {
  return (
    <Container>
      <Alert variant= "outlined" severity="info" sx={{ mb: 2, borderColor:'#90caf9', backgroundColor:'#e3f2fd'}}>
        <Typography component="span">
          Hemen Al fiyatlarımıza KDV ve tüm hizmet bedelleri 
        </Typography>
        <Typography component="span" sx={{ fontWeight: 'bold' }}>
          {' dahildir.'}
        </Typography>
      </Alert>
      <Grid container spacing={2}>
        {carData.map((car, index) => (
          <Grid item key={index} xs={12}>
            <CarCard car={car} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CarList;
