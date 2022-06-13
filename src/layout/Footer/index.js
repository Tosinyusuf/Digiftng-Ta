import React from 'react';
import { Footer1 } from './component/Footer1';
import { Footer2 } from './component/Footer2';
import '../../assets/styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Footer;
