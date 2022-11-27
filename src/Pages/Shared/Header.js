import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100 text-yellow-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/blog'}>Blog</Link></li>
                        
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl">Bike Hunter</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/blog'}>Blog</Link></li>
                    
                    
                    <li><Link to={'/my-order'}>My Order</Link></li>
                    <li><Link to={'/add-product'}>Add Product</Link></li>
                    <li><Link to={'/my-product'}>My Product</Link></li>
                    <li><Link to={'/my-buyers'}>My Buyers</Link></li>
                    <li><Link to={'/all-sellers'}>All Sellers</Link></li>
                    <li><Link to={'/all-buyers'}>All Buyers</Link></li>

                </ul>
            </div>


            <div className="navbar-end">
                {
                    user?.email ?
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt='' src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    
                                    <li><a onClick={handleLogOut} href='/'>Logout</a></li>
                                </ul>
                            </div>
                        </>
                        :
                        <>
                            <li><Link to={'/login'}>Login</Link></li>
                            <li><Link to={'/register'}>Register</Link></li>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;