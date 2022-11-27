import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import CategoryDetails from './CategoryDetails';

const Category = () => {

    const [order, setOrder] = useState(null);
    const data = useLoaderData();
    return (
        <section>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    data.map(single => <CategoryDetails
                        key={single._id}
                        single={single}
                        setOrder={setOrder}
                    ></CategoryDetails>)
                }
            </div>
            {
                order && 
                <BookingModal
                order={order}

            ></BookingModal>
            }
        </section>
    );
};

export default Category;