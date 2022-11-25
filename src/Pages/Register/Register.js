import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle';


const Register = () => {

    const [error, setError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate();
    useTitle('Register');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.img.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, image, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/login');
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })

    }
    // //save user information in database
    // const saveUser = (name, email) => {
    //     const user = { name, email };
    //     fetch('http://localhost:5000/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('saveUser', data);
    //             navigate('/login');
    //         })
    // }

    return (
        <div>
            <h1 className="text-center text-5xl font-bold text-yellow-400 p-4">Register now..!</h1>
            <div className="hero ">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* register form */}
                        {/*  */}
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">image url</span>
                                </label>
                                <input name='img' type="text" placeholder="image url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="New password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                            <p className='text-danger'>{error}</p>
                        </form>
                        <p className='m-4 text-center'>If you have an account <Link to='/login' className='text-primary font-bold'>Login</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;