import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = ({setProduct}) => {
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
                                <p>Location: {products.location}</p>
                                <p>Used Year: {products.used_year}</p>
                                <p>Orginal Price: {products.orginal_price}</p>
                                <p>Resale Price: {products.resale_price}</p>
                                <p>Saller Name: {products.sallerName}</p>
                                <p>Posted Time: {products.post_date}</p>
                                <div className="card-actions">
                                        <label 
                                        htmlFor="booking-modal" 
                                        className="btn btn-primary"
                                        onClick={()=>setProduct(products)}
                                        >Book Now</label>     
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