import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css"

import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.tsx';
import Layout from './layout/Layout.tsx';
import Log from './components/Auth/log.tsx';
import Homemarcet from './components/Homemarcet/Homemarcet.tsx';
import Layoutuser from './layout/Layoutuser.tsx';
import Allprodect from './components/myprodect/Allprodect.tsx';
import Facture from './components/Facture/Facture.tsx';
import Commande from './components/Comands/Command.tsx';

function App() {
  return (
    <>
     
           
        
     <Router>
      <Routes>
       
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          
        </Route>
        <Route element={<Layoutuser />}>
        <Route path="/marcet" element={<Homemarcet />} />
        <Route path="/myprodect" element={<Allprodect />} />
        <Route path="/Facture" element={<Facture />} />
        <Route path="/Commande" element={<Commande />} />
        </Route>
        <Route path="/login" element={<Log />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;