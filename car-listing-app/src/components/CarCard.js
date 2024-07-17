import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const CarCard = ({ car }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', marginBottom: 2, borderRadius: 2, overflow: 'hidden' }}>
      <CardMedia
        component="img"
        sx={{ width: 250, height: 180, objectFit: 'cover' }} // Daha geniş ve yüksek resim
        image={car.image}
        alt={car.model}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {car.model}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {car.year} - {car.transmission} - {car.fuelType}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {car.km} KM
          </Typography>
          <Typography variant="subtitle1" color="text.primary" component="div">
            {car.price} TL
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', p: 1 }}>
          <Button 
            sx={{ 
              textTransform: 'capitalize', 
              color: 'white', 
              backgroundColor: '#0cb460', // Yeşil renk
              border: '1px solid #388e3c', // Hafif border
              borderRadius: 5, // Yuvarlak köşeler
              width: '110px', // Genişlik
              height: '35px', // Yükseklik
              '&:hover': {
                backgroundColor: '#028845', // Hover rengi
                border: '1px solid #2c6b2f' // Hover border rengi
              }
            }}
          >
            Hemen Al
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default CarCard;
