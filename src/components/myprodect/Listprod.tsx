import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

const products = [
  { id: 1, name: 'احذية', img: "https://wallpapercave.com/wp/wp3420666.jpg" },
  { id: 2, name: 'سروال', img: "https://t4.ftcdn.net/jpg/01/06/63/89/360_F_106638911_BJHIqkDcElRGb7vLSLmMI3c0ZGFpZGLb.jpg" },
  { id: 3, name: 'احذية', img: "https://wallpapercave.com/wp/wp3420666.jpg"  },
  { id: 4,name: 'سروال', img: "https://t4.ftcdn.net/jpg/01/06/63/89/360_F_106638911_BJHIqkDcElRGb7vLSLmMI3c0ZGFpZGLb.jpg"},
  // Add more products as needed
];

export default function Listprod() {
  return (
    <Container sx={{ my: '2rem' }}>
      <Typography fontFamily="Cairo, sans-serif" variant='h4' my="30px">My Products</Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={6} lg={3}>
            <Paper 
              elevation={24} 
              sx={{ 
                height: '250px', 
                width: '250px', 
                borderRadius: "30px",
                backgroundImage: `url(${product.img || 'https://via.placeholder.com/250'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                textAlign: 'center',
                padding: '1rem'
              }}
            >
              <Typography fontWeight='700' fontFamily="Cairo, sans-serif" variant='h5'>{product.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
