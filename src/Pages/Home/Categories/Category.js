import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from './CategoryDetails';

const Category = () => {
    const data=useLoaderData();
    return (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
            {
                data.map(single=><CategoryDetails
                 key={single._id}
                 single={single}
                ></CategoryDetails>)
            }
        </div>
    );
};

export default Category;