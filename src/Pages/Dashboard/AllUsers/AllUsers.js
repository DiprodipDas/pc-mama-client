import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://pc-mama-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })


    const handleMakeAdmin=id=>{
        fetch(`https://pc-mama-server.vercel.app/users/admin/${id}`,{
            method:'PUT'

        })
        .then(res=>res.json())
        .then(data=>{
           if(data.modifiedCount > 0){
            toast.success('Make Admin Successfully')
            refetch()
           }
        })
    }

    return (
        <div>
            <h3 className='text-3xl font-bold text-success'>All users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
             
                    <thead>
                        <tr>
                            <th>SI NO</th>
                            <th>Email</th>
                            <th>User Id</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        users.map((user,i)=>
                            <tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.email}</td>
                                <td>{user._id}</td>
                                <td>{user?.role!=='admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                      }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;