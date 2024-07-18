import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container, Divider } from '@mui/material';
import logo1 from '../images/logo.png';  // Import your logos
import logo2 from '../images/logo2.png';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', elevation: 0 }}>
      <Container maxWidth="lg">
        <Toolbar>
          {/* Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Divider orientation="vertical" flexItem sx={{ height: '65px', alignSelf: 'stretch', marginRight: 1, marginLeft: -3 }} />

            <img src={logo1} alt="Logo" style={{ height: 40, marginRight: 20 }} />
            <Divider orientation="vertical" flexItem sx={{ height: '65px', alignSelf: 'stretch', marginRight: 1, marginLeft: -1 }} />

            <img src={logo2} alt="Logo 2" style={{ height: 40, marginRight: 20 }} />
            <Divider orientation="vertical" flexItem sx={{ height: '65px', alignSelf: 'stretch', marginRight: 1, marginLeft: -1 }} />

            {/*<Typography variant="h6" sx={{ color: '#000000' }}>
              Arabam
            </Typography>*/}
          </Box>

          {/* Menu Items */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginLeft: 'auto' }}>
            {['Açık Artırma', 'Araç Al', 'Araç Sat', 'Filonu Sat', 'Ekspertiz Al', 'Lojistik Al'].map((item) => (
              <Typography
                key={item}
                variant="body2" // Smaller text size
                sx={{
                  color: '#000000',
                  cursor: 'pointer',
                  position: 'relative',
                  px: 1,
                  fontSize: '0.875rem', // Adjust if needed
                  lineHeight: '1.5', // Ensure proper alignment
                  '&:hover': {
                    color: '#0cb460', // Green color on hover
                  },
                  '&:active:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -22, // Increase the bottom value to move the underline lower
                    left: 0,
                    width: '100%',
                    height: 2, // Thickness of the underline
                    backgroundColor: '#0cb460', // Green underline
                  },
                }}
              >
                {item}
              </Typography>
            ))}
            <Divider orientation="vertical" flexItem sx={{ height: '65px', alignSelf: 'stretch' }} />
            <Button 
              sx={{ 
                textTransform: 'capitalize', 
                color: 'white', 
                backgroundColor: '#0cb460', // Green color
                border: '1px solid #388e3c', // Light border
                borderRadius: 5, // Rounded corners
                width: '100px', // Width
                height: '35px', // Height
                '&:hover': {
                  backgroundColor: '#028845', // Hover color
                  border: '1px solid #2c6b2f' // Hover border color
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
