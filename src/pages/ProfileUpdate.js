import React, { useRef } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle, FaMailBulk, FaUserTie } from 'react-icons/fa';
import { AuthContext } from '../contexts/UserContext';

const ProfileUpdate = () => {
    const { user, profileUpdate } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const photoUrlRef = useRef(user?.photoURL);

    const handleUpdateUserProfile = event => {
        event.preventDefault();

        profileUpdate({
            displayName: name, photoURL: photoUrlRef.current.value
        })
            .then(() => {
                toast.success('Profile Updated');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    const updateName = event => {
        setName(event.target.value);
    }

    return (
        <div>
            <div className='flex justify-center mt-5'>
                <h2 className='text-2xl text-amber-500 font-semibold'>User's Profile</h2>
            </div>
            <div className='flex flex-wrap lg:flex-nowrap justify-center w-full mb-4'>
                <div className="p-5 shadow-md border-t-2 border-amber-400 mt-8 lg:ml-10 mx-2">
                    <div className='divide-y-2'>
                        <div className='max-w-lg flex justify-center'>
                            <img className='rounded-md md:w-72 md:h-36 object-cover object-top' src={user?.photoURL} alt="" />
                        </div>
                        <p className='mt-8 py-2 sm:mt-5 flex flex-wrap items-center gap-2'><FaUserTie className='text-amber-600'></FaUserTie> Name: <span className='font-semibold'>{user?.displayName}</span></p>
                        <p className='mt-8 py-2 sm:mt-5 flex flex-wrap items-center gap-2'><FaMailBulk className='text-amber-600'></FaMailBulk> Email: <span className='font-semibold'>{user?.email}</span></p>
                    </div>
                </div>

                <form onSubmit={handleUpdateUserProfile} className='mt-8 rounded border shadow-lg sm:mx-10 border-t-4 border-amber-400 mx-2'>
                    <div className="grid grid-cols-8 gap-4 col-span-full lg:col-span-3 px-5 sm:px-10 py-5">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="fullName" className="block mb-2 text-sm">Full Name</label>
                            <input onChange={updateName} id="fullName" defaultValue={name} type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-5">
                            <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                            <input id="email" readOnly defaultValue={user.email} type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="block mb-2 text-sm">Photo URL</label>
                            <input id="address" ref={photoUrlRef} defaultValue={user?.photoURL} type="text" placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900" />
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-2 pb-5 mb:pb-0'>
                        <button className='px-4 py-3 flex justify-center items-center gap-2 bg-amber-400 rounded-md shadow-lg font-semibold'>
                            <FaCheckCircle></FaCheckCircle>
                            <span>Update</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdate;