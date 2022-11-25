import React from 'react';
import serviceImg from '../../../assets/images/service.png'
import quality from '../../../assets/images/quality.png'
import repairing from '../../../assets/images/repairing.png'
import Service from './Service';

const Services = () => {

    const servicesData=[
        {
            id:1,
            name:'24/7 customer Services',
            description:'We provide 24/7 customer care services.',
            img:  serviceImg
        },
        {
            id:2,
            name:'Ensure quality product',
            description:'We ensure product quality first.',
            img:  quality
        },
        {
            id:3,
            name:'Repairing services',
            description:'We provide repairing services also .',
            img:  repairing
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
            <h3 className='text-xl font-bold text-success uppercase'>Our Services</h3>
             <h2 className='text-3xl'>Services we provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
             {
                servicesData.map(service=><Service
                key={service.id}
                service={service}
                >

                </Service>)
             }
            </div>
        </div>
    );
};

export default Services;