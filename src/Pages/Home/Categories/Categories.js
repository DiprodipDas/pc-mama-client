import React from 'react';
import { Link } from 'react-router-dom';


const Categories = () => {

    return (
       <div className='mt-6'>
        <div>
            <h1 className='text-3xl text-center mb-6 text-success'>All Categories</h1>
        </div>
         <div className='grid gap-3  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    
        
                    <div className=' px-12 py-5 rounded-sm bg-lime-700'>
                        
                    <Link to='/categories/1'>Dell</Link>
        
                    </div>
                    <div className=' px-12 py-5 rounded-sm bg-lime-700'>
                    <Link to='/categories/2'>Walton</Link>
        
                    </div>
                    <div className=' px-12 py-5 rounded-sm bg-lime-700'>
                    <Link to='/categories/3'>Hp</Link>
        
                    </div>
                    
                </div>
       </div>
    );
};

export default Categories;