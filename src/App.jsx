import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import InterestCalculator from './components/InterestCalculation';
import './assets/css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroImage from './components/HeroImage';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
      </Routes>
     <Footer/>
    </>
  );
};

export default App;