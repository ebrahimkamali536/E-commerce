import React from 'react';

//components
import { MostPopular, Products, Header } from '../../components';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Products />
            <MostPopular />
        </div>
    );
};

export default HomePage;