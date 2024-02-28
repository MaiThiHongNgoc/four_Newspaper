import React, { useState } from 'react';
import Header from './Header/Header';
import Conten from './Content/Conten';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Conten />
            <Footer />
        </div>
    );
}

export default Home;