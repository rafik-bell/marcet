import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"
import SelectComponent from '../ui/Select2.tsx';
import { Container, Paper, Typography } from '@mui/material';
import Listprod from '../myprodect/Listprod.tsx';
const items = [
  {
    id: 1,
    image: 'https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/6665/1.jpg?6952',
    text: 'Sample Text 1',
    price: '3000 DA'
  },
  
  {
    id: 3,
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/chaussures-air-force-1-07-next-nature-pour-7dl9fM.png',
    text: 'Sample Text 3',
    price: '5000 DA'
  }
  ,
  {
    id: 3,
    image: 'https://image.made-in-china.com/318f0j00DQSUwypEOLuH/20230508-6541a9cf323712b0-408486668638-mp4-264-hd-taobao-mp4.webp',
    text: 'Sample Text 3',
    price: '3339 DA'
  },
  {
    id: 2,
    image: 'data:image/jpeg;base64,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',
    text: 'Sample Text 2',
    price: '2229 DA'
  },
  {
    id: 3,
    image: 'data:image/jpeg;base64,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',
    text: 'Sample Text 3',
    price: '3338 DA'
  }
];


export default function Home() {
  return (
    <>
   
      <Carousel className='contaner'fade>
      <Carousel.Item>
        <img className="image" src="https://png.pngtree.com/background/20230519/original/pngtree-an-interior-of-an-clothing-store-filled-with-blue-shirts-picture-image_2654851.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="image" src="https://png.pngtree.com/background/20230519/original/pngtree-store-with-hanging-clothing-in-a-high-end-environment-picture-image_2654941.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="image" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFnYXNpbnxlbnwwfHwwfHx8MA%3D%3D" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    
   <Container className='container'>
<Typography variant='h4' my='10px' fontFamily="Cairo, sans-serif">Nouveau</Typography>
<section>
  <div className="container-fluid">
    <div className="row">
      <div className="scrollcards">
        
         
        
         
      {items.map(item => (
        
        <div className="card" key={item.id}>
          <Paper>
          <div className="image-container">
            <img className="card-img-top" src={item.image} alt={`Card ${item.id}`} />
            <p className="image-text">
              {item.text}<br />
              <strong>Prix: {item.price}</strong>
            </p>
          </div>
          </Paper>
        </div>
        
      ))}
       
        
      </div>
    </div>
   </div>
</section>
       
</Container> 
<Container className='container'>
<Typography variant='h4' my='10px' fontFamily="Cairo, sans-serif">Promontion</Typography>
<section>
  <div className="container-fluid">
    <div className="row">
      <div className="scrollcards">
        
         
        
         
      {items.map(item => (
        <div className="card" key={item.id}>
          <div className="image-container">
            <img className="card-img-top" src={item.image} alt={`Card ${item.id}`} />
            <p className="image-text">
              {item.text}<br />
              <strong>Prix: {item.price}</strong>
            </p>
          </div>
        </div>
      ))}
       
        
      </div>
    </div>
   </div>
</section>
<Listprod></Listprod>
       
</Container> 
    </>
   
  )
}
