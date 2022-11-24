import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData()
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(products => <p key={products._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={products.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{products.name}</h2>
                                <div className="card-actions">
                                    <Link to={`/products/${products._id}`}>
                                        <button className="btn btn-primary">Booking</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Products;