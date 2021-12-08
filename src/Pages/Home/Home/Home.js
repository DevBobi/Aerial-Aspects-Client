import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Greetings from '../Greetings/Greetings';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Greetings />
        </div>
    );
};

export default Home;