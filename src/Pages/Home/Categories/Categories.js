import React from 'react';
import { Link } from 'react-router-dom';


const Categories = () => {

    return (
       <div className='mt-6'>
        <div>
            <h1 className='text-3xl text-center mb-6 text-success'>All Categories</h1>
        </div>
         <div className='grid gap-3  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    
        
                    <div className=' px-12 text-center py-5 rounded-lg bg-success outline'>
                        
                    <Link to='/categories/1 ' className='text-black-600 font-bold '>Dell</Link>
        
                    </div>
                    <div className=' px-12 text-center py-5 rounded-lg bg-success outline'>
                    <Link to='/categories/2' className='text-black-600 font-bold '>Walton</Link>
        
                    </div>
                    <div className=' px-12 py-5 text-center rounded-lg bg-success outline'>
                    <Link to='/categories/3' className='text-black-600 font-bold '>Hp</Link>
        
                    </div>
                    
                </div>
       </div>
    );
};

export default Categories;