import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import signupImg from '../../assets/images/register.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const{createUser,updateUser}=useContext(AuthContext);
    const{googleLogin}=useContext(AuthContext);
    const googleProvider= new GoogleAuthProvider()
    const [signUpError,setSignUpError]=useState('');
    
    const [createdUserEmail,setCreatedUserEmail]=useState('')
    const[token]=useToken(createdUserEmail)
    const navigate=useNavigate()

    if(token){
        navigate('/')
    }

    const handleGoogleSignIn=()=>{
     googleLogin(googleProvider)
     .then(result=>{
        const user=result.user;
        console.log(user);
        const userInfo={
            displayName:user.name
        }
        updateUser(userInfo)
        .then(()=>{
            saveUser(user.email);
        })
        .catch(err=>console.error(err))
     })
     .catch(err=>console.error(err));
    }
    const handleSignUp = event => {
        setSignUpError('');
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const selectList=form.selectList.value;
        const name=form.name.value;
        console.log(name);
        console.log(selectList);

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            saveUser(email);
            console.log(user);
            toast.success('Sign Up Successfull')
            form.reset()
        })
        .catch(err=>{
            console.error(err)
            setSignUpError(err.message) 
            form.reset()       
        });
        


    }

    const saveUser=(email)=>{
    const user={email};
    fetch('https://pc-mama-server.vercel.app/users',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

    .then(res=>res.json())
    .then(data=>{
     setCreatedUserEmail(email);
        
    })
    }
    


    return (
        <div className="hero w-full">
            <div className="hero-content grid gap-16 lg:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={signupImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center mt-6">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        {/* select list */}
                        <div className="form-control">
                        <label className="label">
                                <span className="label-text">Are you a?</span>
                            </label>
                            <select name="selectList" id="selectList" required>
                                <option value="user">User</option>
                                <option value="buyer">Seller</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success" type="submit" value="Sign Up" />
                            {signUpError && <p className='text-red-600'>{signUpError}</p> }
                        </div>
                    </form>
                    <p className='text-center  mb-6'>Already have an account??Please <Link className='text-success font-bold' to='/login'>Login</Link></p>
                    <button onClick={handleGoogleSignIn} className='btn btn-primary w-full'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;