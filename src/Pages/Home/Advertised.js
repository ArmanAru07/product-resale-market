import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Advertised = () => {
    const { adding } = useContext(AuthContext);
    console.log(adding);
    return (
        <div>
            <h1 className="text-center text-5xl font-bold text-yellow-400 p-4">Advertised items</h1>
            <div className="card lg:card-side bg-base-100 shadow-xl text-white mb-4">
                <figure><img src={adding?.img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl font-bold ">{adding?.name}</h2>
                    <br />
                    <p>Location: {adding?.location}</p>
                    <p>Used Year: {adding?.used_year}</p>
                    <p>Orginal Price: {adding?.orginal_price}</p>
                    <p>Resale Price: {adding?.resale_price}</p>
                    <p>Saller Name: {adding?.sallerName}</p>
                    <p>Posted Time: {adding?.post_date}</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">{adding?.categoryName}</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertised;