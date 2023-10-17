import React from 'react';
import Navbar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import Products from '../Product/Product';
import { Route , Routes} from 'react-router-dom';

function Routess() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path='/product' element={<Products />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default Routess;
