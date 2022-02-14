import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import Products from '../AllProducts/Products/Products';
import Banner from '../Banner/Banner';
import Greetings from '../Greetings/Greetings';
import Reviews from '../Reviews/Reviews';
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Greetings />
            <Products />
            <Slider {...settings}> <Reviews /></Slider>

            <Footer />
        </>
    );
};

export default Home;