import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signupImg from '../../assets/images/register.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const{createUser}=useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(err=>console.error(err));
        

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
                                <option value="buyer">Buyer</option>
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
                        </div>
                    </form>
                    <p className='text-center  mb-6'>Already have an account??Please <Link className='text-success font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;