import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container, Divider } from '@mui/material';
import logo1 from '../images/logo.png';  // "../images/logo.png" ile import ediyoruz
import logo2 from '../images/logo2.png';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffffff', elevation: 0 }}>
      <Container maxWidth="lg">
        <Toolbar>
          {/* Logo ve Başlık */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src={logo1} alt="Logo" style={{ height: 40, marginRight: 20 }} />
            <img src={logo2} alt="Logo 2" style={{ height: 40, marginRight: 20 }} />
            <Typography variant="h6" sx={{ color: '#000000' }}> {/* Siyah renk */}
              Arabam
            </Typography>
          </Box>

          {/* Menü Butonları */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginLeft: 'auto' }}>
            <Button color="inherit" sx={{ textTransform: 'capitalize', color: '#000000' }}> {/* Siyah renk */}
              Açık Artırma
            </Button>
            <Button color="inherit" sx={{ textTransform: 'capitalize', color: '#000000' }}>
              Araç Al
            </Button>
            <Button color="inherit" sx={{ textTransform: 'capitalize', color: '#000000' }}>
              Araç Sat
            </Button>
            <Button color="inherit" sx={{ textTransform: 'capitalize', color: '#000000' }}>
              Filonu Sat
            </Button>
            <Button color="inherit" sx={{ textTransform: 'capitalize', color: '#000000' }}>
              Ekspertiz Al
            </Button>
            <Button color="inherit" sx={{ textTransform: 'capitalize', color: '#000000' }}>
              Lojistik Al
            </Button>
            <Divider orientation="vertical" flexItem sx={{ height: '65px', alignSelf: 'stretch' }} />
            <Button 
              sx={{ 
                textTransform: 'capitalize', 
                color: 'white', 
                backgroundColor: '#0cb460', // Yeşil renk
                border: '1px solid #388e3c', // Hafif border
                borderRadius: 5, // Yuvarlak köşeler
                width: '100px', // Genişlik
                height: '35px', // Yükseklik
                '&:hover': {
                  backgroundColor: '#028845', // Hover rengi
                  border: '1px solid #2c6b2f' // Hover border rengi
                }
              }}
            >
              Giriş Yap
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
