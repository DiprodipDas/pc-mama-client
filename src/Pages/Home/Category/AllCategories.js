import React from 'react';
import SingleCategory from './SingleCategory';
import dell from '../../../assets/images/Dell-2.jpg'
import walton from '../../../assets/images/Walton.jpeg'
import hp from '../../../assets/images/hp.jpg'

const AllCategories = () => {

    const categoriesList=[
        {
            id:1,
            name:'Dell',
            description:'All kinds of dell laptop/pc.',
            img: dell,
        },
        {
            id:2,
            name:'Walton',
            description:'All kinds of walton laptop/pc.',
            img: walton,
        },
        {
            id:3,
            name:'HP',
            description:'All kinds of HP laptop/pc.',
            img: hp,
        }
    ]
    return (
       <div>
          <div>
            <h1 className='text-success text-3xl font-bold my-6 text-center'>All Categories</h1>
          </div>
         <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categoriesList.map(category=><SingleCategory
                key={category.id}
                category={category}
                ></SingleCategory>)
            }
        </div>
       </div>
    );
};

export default AllCategories;