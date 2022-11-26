import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';

const CAtegoryProduct = () => {
    const categoryProduct = useLoaderData()
    return (
        <div>
            <h1 className='lg:text-5xl font-bold text-center text-yellow-500 p-4'>Our Second-Hand Bike</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categoryProduct.map(categoryProduct => <p key={categoryProduct._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={categoryProduct.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{categoryProduct.name}</h2>
                                <p>Location: {categoryProduct.location}</p>
                                <p>Used Year: {categoryProduct.used_year}</p>
                                <p>Orginal Price: {categoryProduct.orginal_price}</p>
                                <p>Resale Price: {categoryProduct.resale_price}</p>
                                <p>Saller Name: {categoryProduct.sallerName}</p>
                                <p>Posted Time: {categoryProduct.post_date}</p>
                                <div className="card-actions">
                                        <label htmlFor="booking-modal" className="btn btn-primary">Booking</label>     
                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>
            <BookingModal></BookingModal>
        </div>
    );
};

export default CAtegoryProduct;