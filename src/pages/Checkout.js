import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courseCheckout = useLoaderData();
    console.log(courseCheckout);
    return (
        <div>
            <h2>This is checkout </h2>
        </div>
    );
};

export default Checkout;