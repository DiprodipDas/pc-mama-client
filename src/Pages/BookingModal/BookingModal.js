import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ order, setOrder }) => {

    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const cusName = form.name.value;
        const email = form.email.value;
        const phone = form.number.value;
        const location = form.location.value;

        const booking = {
            product: name,
            customer: cusName,
            email,
            phone,
            location,
            

            

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setOrder(null);
                    toast.success('Booking added.Please pay the amount.')
                }
                // else{
                 
                //     toast.error(data.message);
                //     setOrder(null);
                // }
            })

    }

    const { name } = order;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" name='name' required placeholder="Your Name" className="input w-full input-bordered" />
                        <input type="email" name='email' defaultValue={user?.email} disabled className="input w-full input-bordered" />
                        <input type="text" name='number' required placeholder="Number" className="input w-full input-bordered" />
                        <input type="text" name='location' required placeholder="Your Location" className="input w-full input-bordered" />
                        <br />
                        <input className='w-full btn btn-success' type="submit" value="Confirm order" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;