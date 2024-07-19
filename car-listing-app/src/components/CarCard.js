import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Divider, Grid } from '@mui/material';

const CarCard = ({ car }) => {
  const handleClick = () => {
    alert(`Araç: ${car.model}`);
  };

  return (
    <Card 
      sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        marginBottom: -3, 
        borderRadius: 0, // Köşeleri keskinleştir
        overflow: 'hidden',
        backgroundColor: '#f5f5f5', // Arka plan rengi
        boxShadow: 'none', // Kart gölgesini kaldır
        border: 'none', // Kenarlık kaldır
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 250, height: 180, objectFit: 'cover', borderRadius: '5px' }}
        image={car.image}
        alt={car.model}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography
                component="div"
                variant="h6"
                sx={{
                  cursor: 'pointer',
                  color: '#000000',
                  '&:hover': {
                    color: '#0cb460',
                  },
                  '&:active': {
                    color: '#0cb460',
                  },
                  mb: 1
                }}
              >
                {car.model}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                {car.transmission} {car.fuelType} - {car.km} KM
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {car.year}
                </Typography>
                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  {car.km} KM
                </Typography>
                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  {car.transmission}
                </Typography>
                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  {car.fuelType}
                </Typography>
                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  KDV %20
                </Typography>
              </Box>
            </CardContent>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', height: '100%' }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Satış Fiyat/TL
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {car.price} TL
                </Typography>
              </Box>
              <Box sx={{ mt: 'auto' }}>
                <Button 
                  onClick={handleClick}
                  sx={{ 
                    textTransform: 'capitalize', 
                    color: 'white', 
                    backgroundColor: '#0cb460', 
                    border: '1px solid #388e3c', 
                    borderRadius: 5, 
                    width: '110px', 
                    height: '35px', 
                    '&:hover': {
                      backgroundColor: '#028845', 
                      border: '1px solid #2c6b2f',
                    }
                  }}
                >
                  Hemen Al
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default CarCard;
