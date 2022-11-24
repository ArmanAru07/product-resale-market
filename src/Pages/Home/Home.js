import React from 'react';
import Advertised from './Advertised';
import Slider from './Slider';
import aboutImag from '../../Assets/image/about.jpg'
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const category = useLoaderData()
    return (
        <div>
            <Slider></Slider>
            <Advertised></Advertised>
            <h1 className='lg:text-6xl text-center p-4'>Product Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    category.map(category => <p key={category._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={category.picture} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{category.name}</h2>
                                <div className="card-actions">
                                    <Link to={`/category/${category._id}`}>
                                        <button className="btn btn-primary">Product</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>
            {/* About section */}
            <div className="card lg:card-side bg-base-100 shadow-xl text-white">
                <figure><img src={aboutImag} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl font-bold ">Welcome to <br />Bike Hunter</h2>
                    <br />
                    <p>We provide second-hand bike like new.. <br /> We want to try our best for our customer..</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;