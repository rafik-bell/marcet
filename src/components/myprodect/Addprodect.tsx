import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import MultiSelect from '../ui/MultiSelect.tsx'
import SelectComponent from '../ui/Select2.tsx'
import { colourOptions } from '../../data/data.ts';
import { SizeOptions } from '../../data/data.ts';

export default function Addprodect() {
  return (
    <Container >
      <Typography fontFamily="Cairo, sans-serif" variant='h4' my="30px">Add Products</Typography>

      <Grid container spacing={2}>
  <Grid item xs={4}>
  <TextField  sx={{m:"10px"}} id="outlined-basic" label="name" variant="outlined" />
  </Grid>
  <Grid item xs={4}>
  <TextField  sx={{m:"10px"}} id="outlined-basic" label="prise" variant="outlined" />
  </Grid>
  <Grid item xs={4}>
  <TextField  sx={{m:"10px"}} id="standard-basic" label="quentity" variant="outlined" />

  </Grid>
  <Grid item xs={12}>
  <Typography fontFamily="Cairo, sans-serif"  >Add Color</Typography>
  <MultiSelect options={colourOptions}></MultiSelect>
  
  </Grid>
  
  <Grid item xs={12}>
 
  <Typography fontFamily="Cairo, sans-serif"  >Add Size</Typography>

  <MultiSelect options={SizeOptions}></MultiSelect>
  </Grid>
  <Grid item xs={12}>
  <Button variant="contained" color="success">
  Add Prodect
</Button>
</Grid>
  <Grid item xs={12}>
 
 <Typography fontFamily="Cairo, sans-serif"  variant='h4' my="30px"  >Delate Prodect</Typography>
 <Typography fontFamily="Cairo, sans-serif"  >Select name Prodect</Typography>
 <SelectComponent></SelectComponent>
 </Grid>
 <Grid item xs={12}>
  <Button variant="contained" color="error">
  Delate Prodect
</Button>
</Grid>
</Grid>


    </Container>
  )
}
