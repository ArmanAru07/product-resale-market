import React from 'react';

const BookingModal = () => {
    return (
        <>
        {/* onSubmit={handleBooking} */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">...</h3>
                    <form  className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled  className="input input-bordered w-full " />
                        <select name="slot" className="select select-bordered w-full ">

                            
                        </select>
                        {/* <input name='patientName' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full " /> */}
                        {/* <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full " /> */}
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                        <br />
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value="Submit" />
                    </form>
                    
                </div>
            </div>
        </>
    );
};

export default BookingModal;