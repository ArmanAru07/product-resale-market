import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/booking?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className="overflow-x-auto w-full">
            <h1 className="text-center text-5xl font-bold text-yellow-400 p-4">My Orders</h1>

            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>
                            <label>
                            </label>
                        </th>
                        <th>Product</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row --> */}
                    {
                        bookings.map((booking, i) => <tr key={booking._id}>
                            <th>
                                <label>
                                    {i + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={booking.img} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">{booking.productName}</div>
                                </div>
                            </td>
                            <td>{booking.resale_price}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Pay</button>
                            </th>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyOrders;