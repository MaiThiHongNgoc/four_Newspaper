import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header'
import Conten from './Content/Conten'
// import Footer from './Footer/Footer'
const Home = () => {
    return (
        <div>
            <Header />
            <Conten/>
            {/* <Footer/> */}
        </div>
    )
}

export default Home