import React from 'react';
import Advertised from './Advertised';
import Categories from './Categories';
import Slider from './Slider';
import aboutImag from '../../Assets/image/about.jpg'

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Advertised></Advertised>
            <Categories></Categories>
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