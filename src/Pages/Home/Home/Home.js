import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import Products from '../AllProducts/Products/Products';
import Banner from '../Banner/Banner';
import Greetings from '../Greetings/Greetings';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Greetings />
            <Products />
            <Footer />
        </>
    );
};

export default Home;