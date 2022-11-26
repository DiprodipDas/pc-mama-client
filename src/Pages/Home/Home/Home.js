import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
         <Banner></Banner>
         <Services></Services>
         <Categories></Categories>
        </div>
    );
};

export default Home;