import React from 'react';
import Banner from '../Banner/Banner';
import AllCategories from '../Category/AllCategories';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
         <Banner></Banner>
         <Services></Services>
         <AllCategories></AllCategories>
        </div>
    );
};

export default Home;