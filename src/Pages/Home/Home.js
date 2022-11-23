import React from 'react';
import Advertised from './Advertised';
import Categories from './Categories';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Advertised></Advertised>
            <Categories></Categories>
        </div>
    );
};

export default Home;