import React from 'react';

const AllBuysTable = ({user,count,Delete}) => {

    const {_id,displayName, email, userCategory}=user;
    return (
        <tr>
        <th>{count+1}</th>
        <td>{displayName}</td>
        <td>{email}</td>
        <td>{userCategory}</td>
        <td><button onClick={()=>Delete(_id)} className="btn btn-outline btn-secondary">Delete</button></td>
      </tr>
    );
};

export default AllBuysTable;