import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CAtegoryProduct = () => {
    const categoryProduct = useLoaderData()
    return (
        <div>
                            <h2>{categoryProduct.categoryName}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categoryProduct.map(categoryProduct => <p key={categoryProduct._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={categoryProduct.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{categoryProduct.name}</h2>
                                <div className="card-actions">
                                    <Link to={`/product/${categoryProduct._id}`}>
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