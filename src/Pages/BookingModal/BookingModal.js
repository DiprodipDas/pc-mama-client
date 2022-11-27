import React from 'react';

const BookingModal = ({order,setOrder}) => {

    const handleBooking=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const phone=form.number.value;
        const location=form.location.value;

        console.log(name,email,phone, location);
        setOrder(null);

    }

    const {name}=order;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                    <input type="text" name='name' placeholder="Your Name" className="input w-full input-bordered" />
                    <input type="email" name='email' placeholder="Your Email" className="input w-full input-bordered" />
                    <input type="text" name='number' placeholder="Number" className="input w-full input-bordered" />
                    <input type="text" name='location' placeholder="Your Location" className="input w-full input-bordered" />
                    <br />
                    <input className='w-full btn btn-success' type="submit" value="Confirm order" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;