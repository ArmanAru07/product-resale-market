import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import AllBuysTable from './AllBuysTable';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);
    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-buyers?userCategory=Buyer')
            .then(response => response.json()).then((data)=>{

                setBuyers(data);
            }).catch((error)=>{
                console.log(error.message);
            })  
    },[user]);
    console.log(buyers);

    const Delete = (buyers) => {
        console.log(buyers._id)
        const confirmation = window.confirm("Are you sure you want to DELETE this buyer");
        if (confirmation) {
            fetch(`http://localhost:5000/user/${buyers._id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.acknowledged) {
                        alert('You Deleteted the buyer successfully.')
                    }
                    const remaining = buyers.filter(rev => rev._id !== buyers._id);
                    setBuyers(remaining);
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
                buyers.map((v,index)=><AllBuysTable key={index} user={v} count={index} Delete={Delete}></AllBuysTable>)
               
            }
    </tbody>
          


        </table> 
      </div>

   
    );
};

export default AllBuyers;