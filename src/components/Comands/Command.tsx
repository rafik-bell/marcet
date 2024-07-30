import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Grid, Typography } from '@mui/material';

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Rafik Bellarbi',"Cite djedi aek berrouaghia medea", "12/3/2023", 24, 4.0),
  createData('Ice cream sandwich',"Cite djedi aek berrouaghia medea", "12/3/2023", 37, 4.3),
  createData('Eclair', "Cite djedi aek berrouaghia medea", "12/3/2023", 24, 6.0),
  createData('Cupcake', "Cite djedi aek berrouaghia medea", "12/3/2023", 67, 4.3),
  createData('Gingerbread',"Cite djedi aek berrouaghia medea", "12/3/2023", 49, 3.9),
];

export default function Commande() {
  return (
    <>
          <Typography fontFamily="Cairo, sans-serif" variant='h4' my="30px">Command </Typography>

    <TableContainer component={Paper}>
      <Box sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    display: { xs: 'none', sm: 'table-cell' },
                    fontWeight: 'bold',
                  }}
                >
                  Name 
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    display: { xs: 'none', sm: 'table-cell' },
                    fontWeight: 'bold',
                  }}
                >
                  Adress
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    display: { xs: 'none', sm: 'table-cell' },
                    fontWeight: 'bold',
                  }}
                >
                 date
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    display: { xs: 'none', sm: 'table-cell' },
                    fontWeight: 'bold',
                  }}
                >
                  info command
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    display: { xs: 'none', sm: 'table-cell' },
                    fontWeight: 'bold',
                  }}
                >
                  
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{  '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <Grid container sx={{display: { sm: 'none'},}} spacing={2}>
                    <Grid item xs={12}>
                    <Typography sx={{margin:"10px"}} >
                    {row.name} <br></br>
                    {row.calories}<br></br>
                    {row.fat}<br></br>
                    {row.carbs}<br></br>
                    
                    </Typography>
                    <Button  sx={{ml:"10px"}} variant="contained" >Info</Button>
                    <Button sx={{ml:"10px"}} variant="contained" color="error">Delate Comand</Button>
                    <hr></hr>
                    </Grid>
                    </Grid>
                  <TableCell sx={{display: { xs: 'none', sm: 'table-cell' },}} component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell  sx={{display: { xs: 'none', sm: 'table-cell' },}} align="right">{row.calories}</TableCell>
                  <TableCell sx={{display: { xs: 'none', sm: 'table-cell' },}} align="right">{row.fat}</TableCell>
                  <TableCell sx={{display: { xs: 'none', sm: 'table-cell' },}} align="right"><Button variant="contained" >Info</Button></TableCell>
                  <TableCell sx={{display: { xs: 'none', sm: 'table-cell' },}} align="right"><Button variant="contained" color="error">Delate Comand</Button></TableCell>
                </TableRow>
              ))}
              
            </TableBody>
          </Table>
        </Box>
      </Box>
    </TableContainer>
    </>
  );
}
