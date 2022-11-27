import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const {login,updateUser}=useContext(AuthContext);
    const[loginError,setLoginError]=useState('');
    const[loginUserEmail,setLoginUserEmail]=useState('');
    const[token]=useToken(loginUserEmail)
    const{googleLogin}=useContext(AuthContext);
    const googleProvider= new GoogleAuthProvider()
    const location=useLocation();
    const navigate=useNavigate();

    const from= location.state?.from?.pathname || '/';


     if(token){
        navigate(from,{replace:true});
     }

    // google login
    const handleGoogleSignIn=()=>{
        googleLogin(googleProvider)
        .then(result=>{
           const user=result.user;
           console.log(user);
           navigate(from,{replace:true});
           const userInfo={
               displayName:user.name
           }
           updateUser(userInfo)
           .then(()=>{})
           .catch(err=>console.error(err))
        })
        .catch(err=>console.error(err));
       }

    const handleLogin=event=>{
        event.preventDefault();
        setLoginError('')
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

        login(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            setLoginUserEmail(email)
          
            toast.success('Login Successfull')
            form.reset()
        })
        .catch(err=>{
            console.error(err.message)
            setLoginError(err.message)
            form.reset();
        })

    }
    return (
        <div className="hero w-full">
            <div className="hero-content grid gap-16 lg:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                 <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold text-center mt-6">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input  className="btn btn-success" type="submit" value="Login" />
                        </div>
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    </form>
                    <p className='text-center  mb-6'>New to pcMAMA?Please <Link className='text-success font-bold' to='/signup'>Sign Up</Link></p>
                    <button onClick={handleGoogleSignIn} className='btn btn-primary w-full'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;