import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-3xl font-bold text-success'>All users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
             
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>User Id</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        users.map((user,i)=>
                            <tr>
                                <th>{i+1}</th>
                                <td>{user.email}</td>
                                <td>{user._id}</td>
                            </tr>)
                      }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;