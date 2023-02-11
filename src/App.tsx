import React from 'react';
import logo from './logo.svg';
import PageHome from './components/pages/PageHome';
import Item from './components/items/items';
import Checkout from './components/checkout/Checkout';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/NavbarF';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
     
     
      <BrowserRouter>
      <div>
        <Navbar/>
      </div>
        <Routes>
          <Route path="/" element={<PageHome/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
