import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography, TextField, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const checkboxStyles={
  color:'#536259',
  '&.Mui-checked':{color:'green'},
  '&.MuiSvgİcon-root':{fontSize:28}
}
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
          <Typography variant="h6" sx={{ color: '#536259' }}>Marka</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5', p: 1 }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox sx={checkboxStyles} defaultChecked />} label="Tümü" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="Renault" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles}/>} label="Ford" />
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
          <Typography variant="h6" sx={{ color: '#536259' }}>Vites Tipi</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5', p: 1 }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox sx={checkboxStyles} defaultChecked />} label="Tümü" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="Manuel" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="Otomatik" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ my: 2, backgroundColor: '#e0e0e0' }} />

      <Accordion sx={{ boxShadow: 'none', border: 'none' }} defaultExpanded>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          sx={{ backgroundColor: '#f5f5f5', borderRadius: 1, p: 1 }}
        >
          <Typography variant="h6" sx={{ color: '#536259' }}>Yakıt Tipi</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5', p: 1 }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox sx={checkboxStyles} defaultChecked />} label="Tümü" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="Benzin" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="Dizel" />
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
          <Typography variant="h6" sx={{ color: '#536259' }}>Fiyat</Typography>
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
          <Typography variant="h6" sx={{ color: '#536259' }}>Model Yılı</Typography>
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
          <Typography variant="h6" sx={{ color: '#536259' }}>KM</Typography>
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
          <Typography variant="h6" sx={{ color: '#536259' }}>Renk</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5', p: 1, maxHeight: 200, overflowY: 'auto' }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox sx={checkboxStyles} defaultChecked />} label="Tümü" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="BEYAZ" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="BEYAZ (İNCİ)" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="BEYAZ SİYAH" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="BEYAZ-SİYAH" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="BEYAZ(İNCİ)" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="BEYAZ(OPAK)" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="BEYAZ(SEDEF) SİYAH" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="SİYAH" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="KIRMIZI" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="MAVİ" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="YEŞİL" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="GRİ" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="SARI" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="TURUNCU" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="PEMBE" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="MOR" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="KAHVERENGİ" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="GÜMÜŞ" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="ALTIN" />
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
          <Typography variant="h6" sx={{ color: '#536259' }}>Lokasyon</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5', p: 1 }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox sx={checkboxStyles} defaultChecked />} label="Tümü" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="Adana" />
            <FormControlLabel control={<Checkbox sx={checkboxStyles} />} label="İstanbul" />
            {/* Add more locations as needed */}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterSidebar;
