import React from 'react';
import { SocialMedia } from './footer1/SocialMedia';
import { Contacts } from './footer1/Contacts';
import { Routes } from './footer1/Routes';

export const Footer1 = () => {
  return (
    <div className='footer1'>
      <SocialMedia />  
      <Contacts /> 
      <Routes /> 
    </div>
  )
}
