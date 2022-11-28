import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import CAtegoryProduct from './CAtegoryProduct';
import Products from './Products';

const AvailableProduct = () => {
    const categoryProduct = useLoaderData();
    const [product, setProduct] = useState(null);

    console.log(categoryProduct);
    
    return (
        <div>
            <CAtegoryProduct 
            categoryProduct={categoryProduct}
            setProduct={setProduct}
            ></CAtegoryProduct>
            

            {
                product &&
                <BookingModal
                product={product}
                ></BookingModal>
            }
            
        </div>
    );
};

export default AvailableProduct;