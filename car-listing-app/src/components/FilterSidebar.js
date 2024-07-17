import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography, TextField, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterSidebar = () => {
  return (
    <Box 
      sx={{ 
        padding: 2, 
        backgroundColor: '#f5f5f5', // Arka plan rengi
        borderRadius: 2, // Köşe yuvarlama
        boxShadow: 1 // Hafif gölge efekti
      }}
    >
      <Accordion sx={{ boxShadow: 'none', border: 'none' }} defaultExpanded>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          sx={{ backgroundColor: '#f5f5f5', borderRadius: 1, p: 1 }}
        >
          <Typography variant="h6">Marka</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5', p: 1 }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Tümü" />
            <FormControlLabel control={<Checkbox />} label="Audi" />
            <FormControlLabel control={<Checkbox />} label="BMW" />
            {/* Add more brands as needed */}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ my: 2, backgroundColor: '#e0e0e0' }} />

      <Accordion sx={{ boxShadow: 'none', border: 'none' }} defaultExpanded>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          sx={{ backgroundColor: '#f5f5f5', borderRadius: 1, p: 1 }}
        >
          <Typography variant="h6">Vites Tipi</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5', p: 1 }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Tümü" />
            <FormControlLabel control={<Checkbox />} label="Manuel" />
            <FormControlLabel control={<Checkbox />} label="Otomatik" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ my: 2, backgroundColor: '#e0e0e0' }} />

      <Accordion sx={{ boxShadow: 'none', border: 'none' }} defaultExpanded>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          sx={{ backgroundColor: '#f5f5f5', borderRadius: 1, p: 1 }}
        >
          <Typography variant="h6">Yakıt Tipi</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5', p: 1 }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Tümü" />
            <FormControlLabel control={<Checkbox />} label="Benzin" />
            <FormControlLabel control={<Checkbox />} label="Dizel" />
            {/* Add more fuel types as needed */}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ my: 2, backgroundColor: '#e0e0e0' }} />

      <Accordion sx={{ boxShadow: 'none', border: 'none' }} defaultExpanded>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          sx={{ backgroundColor: '#f5f5f5', borderRadius: 1, p: 1 }}
        >
          <Typography variant="h6">Fiyat</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5', p: 1 }}>
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <TextField
              label="Min"
              type="number"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              label="Max"
              type="number"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ my: 2, backgroundColor: '#e0e0e0' }} />

      <Accordion sx={{ boxShadow: 'none', border: 'none' }} defaultExpanded>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          sx={{ backgroundColor: '#f5f5f5', borderRadius: 1, p: 1 }}
        >
          <Typography variant="h6">Model Yılı</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5', p: 1 }}>
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <TextField
              label="2008"
              type="number"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              label="2021"
              type="number"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ my: 2, backgroundColor: '#e0e0e0' }} />

      <Accordion sx={{ boxShadow: 'none', border: 'none' }} defaultExpanded>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          sx={{ backgroundColor: '#f5f5f5', borderRadius: 1, p: 1 }}
        >
          <Typography variant="h6">KM</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5', p: 1 }}>
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <TextField
              label="400"
              type="number"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              label="248.800"
              type="number"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ my: 2, backgroundColor: '#e0e0e0' }} />

      <Accordion sx={{ boxShadow: 'none', border: 'none' }} defaultExpanded>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          sx={{ backgroundColor: '#f5f5f5', borderRadius: 1, p: 1 }}
        >
          <Typography variant="h6">Renk</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5', p: 1 }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Tümü" />
            <FormControlLabel control={<Checkbox />} label="BEYAZ" />
            <FormControlLabel control={<Checkbox />} label="BEYAZ (İNCİ)" />
            <FormControlLabel control={<Checkbox />} label="BEYAZ SİYAH" />
            <FormControlLabel control={<Checkbox />} label="BEYAZ-SİYAH" />
            <FormControlLabel control={<Checkbox />} label="BEYAZ(İNCİ)" />
            <FormControlLabel control={<Checkbox />} label="BEYAZ(OPAK)" />
            <FormControlLabel control={<Checkbox />} label="BEYAZ(SEDEF) SİYAH" />
            {/* Add more colors as needed */}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ my: 2, backgroundColor: '#e0e0e0' }} />

      <Accordion sx={{ boxShadow: 'none', border: 'none' }} defaultExpanded>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          sx={{ backgroundColor: '#f5f5f5', borderRadius: 1, p: 1 }}
        >
          <Typography variant="h6">Lokasyon</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5', p: 1 }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Tümü" />
            <FormControlLabel control={<Checkbox />} label="Adana" />
            <FormControlLabel control={<Checkbox />} label="İstanbul" />
            {/* Add more locations as needed */}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterSidebar;
