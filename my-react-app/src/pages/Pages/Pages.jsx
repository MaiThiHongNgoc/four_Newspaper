import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../Component/Header/Header2/Header2';
import { Link } from 'react-router-dom';
import ContectUs from './ContectUs/ContectUs';

const Pages = () => {
  return (
    <div>
        <Header2/>
        <ContectUs/>
    </div>
  );
}

export default Pages;
