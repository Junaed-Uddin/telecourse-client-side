import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { RiShoppingBagFill } from 'react-icons/ri';
import { FaDiscourse } from 'react-icons/fa';
import { BiCategory, BiMoney } from 'react-icons/bi';
import Swal from 'sweetalert2'
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const courseCheckout = useLoaderData();
    const navigate = useNavigate();
    const { course_name, category, state, thumbnail } = courseCheckout;

    const proceedPayment = (event) => {
        event.preventDefault();
        Swal.fire(
            'Done!',
            `Welcome to ${course_name} course!`,
            'success'
        )
        navigate('/');
    }
    return (
        <div>
            <div className='flex justify-center mt-10'>
                <h2 className='text-2xl font-semibold'>Checkout Information</h2>
            </div>

            <div className='flex flex-wrap lg:flex-nowrap justify-center w-full mb-4'>
                <div className="p-5 shadow-md border-t-2 border-amber-400 mt-8 lg:ml-10 mx-2    ">
                    <div className='divide-y-2'>
                        <div className='max-w-lg'>
                            <img className='rounded-md w-full lg:w-80 object-cover' src={thumbnail} alt="" />
                        </div>
                        <p className='mt-8 py-2 sm:mt-5 flex flex-wrap items-center gap-2'><FaDiscourse className='text-amber-600'></FaDiscourse> Name: <span className='font-semibold'>{course_name}</span></p>

                        <p className='mt-2 py-2 flex flex-wrap items-center gap-2'><BiCategory className='text-amber-600'></BiCategory> Category: <span className='font-semibold'>{category}</span></p>

                        <p className='mt-2 py-2 flex flex-wrap gap-2 items-center'><BiMoney className='text-amber-600'></BiMoney> Amount: <span className='font-semibold'>{state}</span></p>
                    </div>
                </div>

                <form onSubmit={proceedPayment} className='mt-8 rounded border shadow-lg sm:mx-10 border-t-4 border-amber-400 mx-2'>
                    <div className="grid sm:max-w-3xl grid-cols-6 gap-4 col-span-full lg:col-span-3 px-5 sm:px-10 py-5">

                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="fullName" className="block mb-2 text-sm">Full Name</label>
                            <input id="fullName" defaultValue={user.displayName} type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                            <input id="email" readOnly defaultValue={user.email} type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="block mb-2 text-sm">Address</label>
                            <input id="address" type="text" placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm block mb-2">City</label>
                            <input id="city" type="text" placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm block mb-2">State</label>
                            <input id="state" type="text" placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="Amount" className="text-sm block mb-2">Amount ($)</label>
                            <input id="Amount" readOnly defaultValue={state.slice(0, state.length-1)} type="text" placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900" />
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-2 pb-5'>
                        <button className='px-4 py-3 flex justify-center items-center gap-2 bg-amber-400 rounded-md shadow-lg font-semibold'>
                            <RiShoppingBagFill></RiShoppingBagFill>
                            <span>Proceed to Payment</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;