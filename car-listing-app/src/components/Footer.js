import React from 'react';
import { Container, Grid, Typography, Link, Box, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import store from '../images/appstr.png';
import store1 from '../images/playstr.png';
import bankLogo1 from '../images/bankLogo1.png';
import bankLogo2 from '../images/bankLogo2.png';
import companyLogo from '../images/companyLogo.png';
import logo3 from '../images/logo3.svg'; 

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f0f0f0', p: 4, mt: 'auto' }} component="footer">
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Box>
          <img src={logo3} alt="logo" style={{ height: 40 }} />
          </Box>
          <Box display="flex" gap={2}>
            <Link href="#" color="inherit"><Facebook /></Link>
            <Link href="#" color="inherit"><Twitter /></Link>
            <Link href="#" color="inherit"><Instagram /></Link>
          </Box>
        </Box>
        <Divider sx={{ mb: 4 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={2}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Hakkımızda</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Bayilerimiz</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Carwizz Bayilik Başvuru Formu</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Ekspertiz Noktalarımız</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Blog</Link>
              <Link href="#" variant="subtitle1" color="text.secondary">İletişim</Link>
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mx: 2, my: 4 }} />
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>Sıkça Sorulan Sorular</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Sadakat Programı Nedir?</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Alıcı Hizmet Bedeli Nedir?</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Kolay Satın Alma Süreci Nedir?</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Açık Artırma ile Nasıl Araç Alabilirim?</Link>
              <Link href="#" variant="subtitle1" color="text.secondary">İkinciyeni.com Ekspertiz Süreci</Link>
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mx: 2, my: 4 }} />
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>En Çok Merak Edilenler</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>2024 MTV Ücretleri Ne Kadar?</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Togg'dan Yeni Bir Çözüm: Trugo Şarj İstasyonları</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Elektrikli Araba Motoru Nasıl Çalışır?</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Elektrikli Otomobil Almadan Önce Bilinmesi Gerekenler</Link>
              <Link href="#" variant="subtitle1" color="text.secondary">Yurt Dışından Araba Getirtmek Hakkında Merak Edilenler</Link>
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mx: 2, my: 4 }} />
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>Hızlı Linkler</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>İkinci El Araba Al</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Araba Sat</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Araba Açık Artırmaları</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Mobil Ekspertiz</Link>
              <Link href="#" variant="subtitle1" color="text.secondary">Lojistik</Link>
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mx: 2, my: 4 }} />
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>Şehirler</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>İstanbul Araç Al</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Ankara Araç Al</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>İzmir Araç Al</Link>
              <Link href="#" variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Antalya Araç Al</Link>
              <Link href="#" variant="subtitle1" color="text.secondary">Adana Araç Al</Link>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 4 }} />
        <Box mt={3}>
          <Box display="flex" justifyContent="center" gap={2} mb={3}>
            <Typography variant="body1" fontWeight="bold" gutterBottom>
              Mobil Uygulamamızı Denedin mi?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sana özel kampanyalardan yararlanmak için hemen indir.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" gap={2} mb={3}>
            <img src={store} alt="Store" style={{ height: 40, marginRight: 20 }} />
            <img src={store1} alt="Store2" style={{ height: 40, marginRight: 20 }} />
          </Box>
          <Divider sx={{ mt: 4 }} />
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={3} mb={3}>
            <img src={companyLogo} alt="Company Logo" style={{ height: 40 }} />
            <Typography variant="body2" color="text.secondary" align="center">
              © 2024 Şirket Adı. Tüm Hakları Saklıdır.
            </Typography>
            <Box display="flex" gap={2}>
              <img src={bankLogo1} alt="Bank Logo 1" style={{ height: 40 }} />
              <img src={bankLogo2} alt="Bank Logo 2" style={{ height: 40 }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
