import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const BookingModal = ({product, setProduct}) => {

    const { user } = useContext(AuthContext);
    const {name, img, resale_price} = product;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const img = form.img.value;
        const customerName = form.customerName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        console.log(img);

        const bookings = {
            productName: name,
            resale_price: price,
            img,
            customerName,
            email,
            phone,
            location
        }
        console.log(bookings);
        
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('successfully booking');
                }
                else{
                    alert('You already booked this item');
                }

            })

        
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
                        <input name='img' type="text" defaultValue={img} disabled placeholder="image" className="input input-bordered w-full " />
                        <input name='price' type="text" defaultValue={resale_price} disabled placeholder="Price" className="input input-bordered w-full " />
                        <input name='customerName' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full " />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required/>
                        <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full" required/>
                        <br />
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value="Submit" />
                    </form>
                    
                </div>
            </div>
        </>
    );
};

export default BookingModal;