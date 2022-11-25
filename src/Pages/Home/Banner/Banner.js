import React from 'react';
import image from '../../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} alt='' className=" w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mr-6">Welcome to pcMAMA</h1>
                    <p className="py-6 mr-6 ">pcMAMA is one of the leading website in Bangladesh where you buy <br /> your usable pc/laptop and sell your useable pc/laptop too.So why are <br /> you waiting for?</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;