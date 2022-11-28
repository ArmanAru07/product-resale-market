import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyProduct = () => {

    const { user, setadding } = useContext(AuthContext);


    console.log(user?.email)
    const url = `http://localhost:5000/products/${user?.email}`
    const { data: products = [] } = useQuery({
        queryKey: ['product', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className="text-center text-5xl font-bold text-yellow-400 p-4">My Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <p key={product._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.name}</h2>
                                <p>Location: {product.location}</p>
                                <p>Used Year: {product.used_year}</p>
                                <p>Orginal Price: {product.orginal_price}</p>
                                <p>Resale Price: {product.resale_price}</p>
                                <p>Saller Name: {product.sallerName}</p>
                                <p>Posted Time: {product.post_date}</p>
                                <div className="card-actions">
                                    <button className='btn btn-primary' onClick={() =>setadding(product)} >Advertise</button>
                                    <button className='btn btn-error'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>


        </div>
    );
};

export default MyProduct;