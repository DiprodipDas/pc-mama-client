import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const url = `https://pc-mama-server.vercel.app/bookings?email=${user?.email}`;


    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-3xl font-bold text-success'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Number</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking,i)=>
                                <tr>
                                    <th>{i+1}</th>
                                    <td>{booking.customer}</td>
                                    <td>{booking.product}</td>
                                    <td>{booking.phone}</td>
                                    <td>{booking.location}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;