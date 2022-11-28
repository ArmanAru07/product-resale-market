import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {
                            user?.photoURL === 'Seller' && <>
                                <li><Link to={'/dashboard/add-product'}>Add Product</Link></li>
                                <li><Link to={'/dashboard/my-product'}>My Product</Link></li>
                            </>
                        }
                        {
                            user?.photoURL === 'Buyer' && <>
                                <li><Link to={'/dashboard/my-orders'}>My Orders</Link></li>
                            </>
                        }
                        {
                            user?.photoURL === 'Admin' && <>
                                <li><Link to={'/dashboard/all-buyers'}>All Buyers</Link></li>
                                <li><Link to={'/dashboard/all-sellers'}>All Sellers</Link></li>
                            </>
                        }




                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;