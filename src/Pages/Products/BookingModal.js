import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const BookingModal = ({product, setProduct}) => {

    const { user } = useContext(AuthContext);

    const {name, resale_price} = product;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const customerName = form.customerName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            productName: name,
            resale_price: price,
            customerName,
            email,
            phone,
            location
        }
        console.log(booking);
    }
        

    return (
        <>
        {/*  */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='price' type="text" defaultValue={resale_price} disabled placeholder="Price" className="input input-bordered w-full " />
                        <input name='customerName' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full " />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                        <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full " />
                        <br />
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value="Submit" />
                    </form>
                    
                </div>
            </div>
        </>
    );
};

export default BookingModal;