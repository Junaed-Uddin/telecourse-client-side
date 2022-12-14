import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/UserContext';
import userImg from '../../assets/user/userImg.jpg';
import { Tooltip } from "@material-tailwind/react";
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, userSignOut } = useContext(AuthContext);
    const [isSelected, setIsSelected] = useState(false);

    const handleLogOut = () => {
        userSignOut()
            .then(() => {
                toast.success('Successfully logout');
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    return (
        <div className={`z-20 shadow-sm ${isSelected ? 'bg-gray-900' : 'bg-gray-200'}`}>
            <div className={`px-4 py-2 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 ${isSelected ? 'text-gray-100' : 'text-gray-800'}`}>
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center mr-8"
                        >
                            <img className='w-24' src={logo} alt="" />
                            <span className="text-xl font-bold tracking-wide uppercase">
                                TeleCourse
                            </span>
                        </Link>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <NavLink
                                to="/courses"
                                className={`font-medium tracking-wide ${({ isActive }) => isActive ? 'active' : undefined}`}
                            >
                                Courses
                            </NavLink>

                            <NavLink
                                to="/blog"
                                className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Blog
                            </NavLink>

                            <NavLink
                                to="/faq"
                                aria-label="Product pricing"
                                className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                FAQ
                            </NavLink>
                        </ul>
                    </div>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        {
                            user?.uid ?
                                <div className='flex gap-3'>
                                    <NavLink to='/ProfileUpdate'>
                                        <Tooltip className='text-amber-500 font-bold' content={user?.displayName ? user?.displayName : "Anonymous"} placement="bottom">
                                            <img className='rounded-full border' style={{ height: '4   8px', width: '50px' }} src={user?.photoURL ? user.photoURL : userImg} referrerPolicy='no-referrer' alt="" />
                                        </Tooltip>
                                    </NavLink>
                                    <Link
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black rounded shadow-md bg-amber-400"
                                    >
                                        <button onClick={handleLogOut}>Logout</button>
                                    </Link>
                                </div>

                                :
                                <Link
                                    to="/login"
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide rounded shadow-md bg-amber-400 text-black"
                                >
                                    Login
                                </Link>
                        }

                        <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                            <span className="relative">
                                <input onClick={() => setIsSelected(!isSelected)} id="Toggle1" type="checkbox" className="hidden peer" />
                                <div className={`w-10 h-6 rounded-full shadow-inner   ${isSelected ? 'peer-checked:dark:bg-amber-500' : 'dark:bg-gray-400'}`}></div>
                                <div className={`absolute inset-y-0  w-4 h-4 m-1 rounded-full shadow  dark:bg-gray-800 ${isSelected ? 'peer-checked:right-0 peer-checked:left-auto' : 'left-0'}`}></div>
                            </span>
                            <span className='w-10'>
                                {
                                    isSelected ? <span className='text-white'>Dark</span> : <span className='text-black'>Light</span>
                                }
                            </span>
                        </label>

                    </ul>
                    <div className="lg:hidden text-black text-start z-20">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className={`pt-4 pr-5 border rounded shadow-sm ${isSelected ? 'bg-gray-900' : 'bg-white'}`}>
                                    <div className="flex items-center sm:justify-between justify-center">
                                        <div>
                                            <NavLink
                                                to="/"
                                                className="inline-flex items-center"
                                            >
                                                <img className='w-20' src={logo} alt="" />
                                                <span className={`text-xl font-bold uppercase ${isSelected ? 'text-gray-100' : 'text-gray-800'}`}>
                                                    TeleCourse
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className={`w-5 ${isSelected ? 'text-gray-100' : 'text-gray-800'}`} viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className={`text-center sm:text-start space-y-4 pl-6 ${isSelected ? 'text-gray-100' : 'text-gray-800'}`}>
                                            <div>
                                                <NavLink
                                                    to="/courses"
                                                    className="font-medium tracking-wide"
                                                >
                                                    Courses
                                                </NavLink>
                                            </div>
                                            <div>
                                                <NavLink
                                                    to="/blog"
                                                    className="font-medium tracking-wide"
                                                >
                                                    Blog
                                                </NavLink>
                                            </div>
                                            <div>
                                                <NavLink
                                                    to="/faq"
                                                    className="font-medium tracking-wide"
                                                >
                                                    FAQ
                                                </NavLink>
                                            </div>
                                            <div className='flex justify-center sm:justify-start'>
                                                {
                                                    user?.uid ?
                                                        <div className='flex items-center gap-2'>
                                                            <NavLink to='/profile'>
                                                                <img className='rounded-full border' style={{ height: '4   8px', width: '50px' }} src={user?.photoURL ? user.photoURL : userImg} referrerPolicy='no-referrer' alt="" />
                                                            </NavLink>
                                                            <Link
                                                                className="font-medium px-3 py-2 rounded-md tracking-wide bg-amber-400"
                                                            >
                                                                <button onClick={handleLogOut}>Logout</button>
                                                            </Link>
                                                        </div>
                                                        :
                                                        <NavLink
                                                            to="/login"
                                                            className="font-medium tracking-wide shadow-md px-3 py-2 rounded bg-amber-400 text-black"
                                                        >
                                                            Login
                                                        </NavLink>
                                                }
                                            </div>
                                            <label htmlFor="Toggle2" className="pt-2 pb-4 inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                                <span className="relative">
                                                    <input onClick={() => setIsSelected(!isSelected)} id="Toggle2" type="checkbox" className="hidden peer" />
                                                    <div className={`w-10 h-6 rounded-full shadow-inner   ${isSelected ? 'peer-checked:dark:bg-amber-500' : 'dark:bg-gray-400'}`}></div>
                                                    <div className={`absolute inset-y-0  w-4 h-4 m-1 rounded-full shadow  dark:bg-gray-800 ${isSelected ? 'peer-checked:right-0 peer-checked:left-auto' : 'left-0'}`}></div>
                                                </span>
                                                <span className='w-10'>
                                                    {
                                                        isSelected ? <span className='text-white'>Dark</span> : <span className='text-black'>Light</span>
                                                    }
                                                </span>
                                            </label>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;