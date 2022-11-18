import React from 'react';

import Navbar from './Navbar';
import '../App.css';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;