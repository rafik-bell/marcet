import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SelectComponent from '../ui/Select2.tsx'

export default function Facture() {
  const [products, setProducts] = useState([{ id: 1, quantity: '', price: '' }]);

  const addProduct = () => {
    setProducts([...products, { id: products.length + 1, quantity: '', price: '' }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, [field]: value } : product
    ));
  };

  return (
    <Container>
      <Box sx={{ my: "3rem" }}>
        <Typography fontFamily="Cairo, sans-serif" variant='h4' my="30px">Add Facture</Typography>
        {products.map(product => (
          <Box key={product.id} sx={{ mb: 3 }}>
            <Typography fontFamily="Cairo, sans-serif" >Product {product.id}</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <SelectComponent />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <TextField 
                  sx={{ width: "100%" }} 
                  id="outlined-basic" 
                  label="كمية" 
                  variant="outlined" 
                  value={product.quantity}
                  onChange={(e) => handleInputChange(product.id, 'quantity', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <TextField 
                  id="outlined-basic" 
                  label="سعر" 
                  variant="outlined" 
                  value={product.price}
                  onChange={(e) => handleInputChange(product.id, 'price', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
            <Button 
              sx={{ m: '10px' }} 
              variant="contained" 
              color="error" 
              onClick={() => deleteProduct(product.id)}
            >
              Delete Product
            </Button>
            </Grid>
            </Grid>
            <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' }} />
          </Box>
          
        ))}
        <Button sx={{ m: '10px' }} variant="contained" color="success" onClick={addProduct}>
          Add Product
        </Button>
      </Box>
      <Button variant="contained" color='primary'>
        Add Facture
      </Button>
      <Box>
        <Typography fontFamily="Cairo, sans-serif" variant='h4' my="30px">Delete Facture</Typography>
        <Button variant="contained" color="error">
          Delete Facture
        </Button>
      </Box>
    </Container>
  );
}
