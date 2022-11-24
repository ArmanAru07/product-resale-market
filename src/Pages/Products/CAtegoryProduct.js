import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CAtegoryProduct = () => {
    const product = useLoaderData()
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    product.map(product => <p key={product._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.name}</h2>
                                <div className="card-actions">
                                    <Link to={`/product/${product._id}`}>
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

export default CAtegoryProduct;