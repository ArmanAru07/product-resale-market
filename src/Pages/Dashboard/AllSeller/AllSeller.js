import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import AllSellersTable from './AllSellersTable';

const AllSeller = () => {

    const { user } = useContext(AuthContext);
    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-sellers?userCategory=Seller')
            .then(response => response.json()).then((data)=>{

                setSellers(data);
            }).catch((error)=>{
                console.log(error.message);
            })  
    },[user]);
    console.log(sellers);
    
    const Delete = (sellers) => {
        console.log(sellers._id)
        const confirmation = window.confirm("Are you sure you want to DELETE this seller");
        if (confirmation) {
            fetch(`http://localhost:5000/user/${sellers._id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.acknowledged) {
                        alert('You Deleteted the sellers successfully.')
                    }
                    const remaining = sellers.filter(rev => rev._id !== sellers._id);
                    setSellers(remaining);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {
                sellers.map((s,index)=> <AllSellersTable key={index} user={s} count={index} Delete={Delete}></AllSellersTable> )
               
            }
    </tbody>
          


        </table> 
      </div>
    );
};

export default AllSeller;