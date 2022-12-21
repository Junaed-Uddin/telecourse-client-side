import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/slider/banner.jpg'
import { FaClock, FaMoneyBill, FaStar } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            {/* banner section */}
            <div className="relative flex py-16 flex-col-reverse lg:pt-5 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0" data-aos="fade-left">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h-56 rounded shadow-xl lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src={banner}
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl" data-aos="fade-right">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none text-center sm:text-start">
                            Take The First Step
                            <span className="inline-block text-deep-purple-accent-400">
                                To Knowledge
                            </span>
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.
                        </p>
                        <div className="flex items-center">
                            <Link
                                to="/courses"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-violet-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get started
                            </Link>
                            <Link
                                to="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* features section */}
            <section className="dark:bg-gray-800 dark:text-gray-100" data-aos="fade-up" data-aos-duration="1800">
                <div className="container max-w-6xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3" data-aos="fade-left" data-aos-duration="2400">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-3 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-blue-400">
                                <h3 className="text-3xl font-semibold">Platform Features</h3>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9" data-aos="fade-right" data-aos-duration="2400">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Quality Content</h3>
                                    <p className="mt-3">Implement the top-notch learning technology of LMS and create a perfect workflow within any educational institution.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Individual Instructor</h3>
                                    <p className="mt-3">Deliver skills and knowledge online to thousands of students and create a productive learning environment.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Online Platform</h3>
                                    <p className="mt-3">Build a universal online learning platform for everyone and provide an exceptional experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* what will you learn section */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24" data-aos="fade-up" data-aos-duration="2500">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">What</span>
                        </span>{' '}
                        will you learn
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        There are many resources related to web development, which with proper practice it is possible to become a good developer.
                    </p>
                </div>
                <div className="grid gap-4 row-gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <div className="flex shadow-xl justify-center py-5 border rounded-xl" data-aos="fade-right" data-aos-duration="1500">
                        <div>
                            <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-indigo-50">
                                <img src="https://masterstudy.stylemixthemes.com/tech/wp-content/uploads/sites/21/2021/12/angular.png" alt="" />
                            </div>
                            <h6 className="mb-2 font-semibold text-lg text-center">Angular</h6>
                        </div>
                    </div>
                    <div className="flex shadow-xl justify-center py-5 border rounded-xl" data-aos="fade-up" data-aos-duration="1500">
                        <div>
                            <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-indigo-50">
                                <img src="https://masterstudy.stylemixthemes.com/tech/wp-content/uploads/sites/21/2021/12/python.png" alt="" />
                            </div>
                            <h6 className="mb-2 font-semibold text-lg text-center">Python</h6>
                        </div>
                    </div>
                    <div className="flex shadow-xl justify-center py-5 border rounded-xl" data-aos="fade-up" data-aos-duration="1500">
                        <div>
                            <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-indigo-50">
                                <img src="https://masterstudy.stylemixthemes.com/tech/wp-content/uploads/sites/21/2021/12/nodejs.png" alt="" />
                            </div>
                            <h6 className="mb-2 font-semibold text-lg text-center">Node</h6>
                        </div>
                    </div>
                    <div className="flex shadow-xl justify-center py-5 border rounded-xl" data-aos="fade-up" data-aos-duration="1500">
                        <div>
                            <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-indigo-50">
                                <img src="https://masterstudy.stylemixthemes.com/tech/wp-content/uploads/sites/21/2021/12/reactjs.png" alt="" />
                            </div>
                            <h6 className="mb-2 font-semibold text-lg text-center">React</h6>
                        </div>
                    </div>
                    <div className="flex shadow-xl justify-center py-5 border rounded-xl" data-aos="fade-left" data-aos-duration="1500">
                        <div>
                            <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-indigo-50">
                                <img src="https://masterstudy.stylemixthemes.com/tech/wp-content/uploads/sites/21/2021/12/docker.png" alt="" />
                            </div>
                            <h6 className="mb-2 font-semibold text-lg text-center">Docker</h6>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top featured courses */}
            <div className="bg-gray-100" data-aos="fade-up" data-aos-duration="2500">
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className='text-2xl mb-6 font-bold text-gray-800 relative z-10'>
                        <h2>Top Featured Courses</h2>
                    </div>
                    <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                        <svg
                            viewBox="0 0 88 88"
                            className="w-full max-w-screen-xl text-indigo-100"
                        >
                            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="44"
                            />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="37.5"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="29.5"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="22.5"
                            />
                        </svg>
                    </div>
                    <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="px-5 py-4">
                                <div className="flex items-center justify-center h-40 mb-4">
                                    <img className='w-52 h-28' src="https://canvasjs.com/wp-content/uploads/images/gallery/other-technologies/angular-logo.png" alt="" />
                                </div>
                                <p className="mb-2 font-bold text-lg text-center">Angular Crash Course</p>
                                <div className='pt-2 flex justify-between'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-amber-500'></FaStar>
                                        <span className='font-semibold'>4.6</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaClock className='text-amber-500'></FaClock>
                                        <span className='font-semibold'>12hr</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaMoneyBill className='text-amber-500'></FaMoneyBill>
                                        <span className='font-semibold'>45$</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>

                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="px-5 py-4">
                                <div className="flex items-center justify-center h-40 mb-4">
                                    <img className='w-52 h-28' src="https://i1.wp.com/yeisonpx.com/wp-content/uploads/2020/10/csharp_api.jpg?fit=668%2C376&ssl=1" alt="" />
                                </div>
                                <p className="mb-2 font-bold text-lg text-center">.NET Core Course</p>
                                <div className='pt-2 flex justify-between'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-amber-500'></FaStar>
                                        <span className='font-semibold'>4.7</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaClock className='text-amber-500'></FaClock>
                                        <span className='font-semibold'>15hr</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaMoneyBill className='text-amber-500'></FaMoneyBill>
                                        <span className='font-semibold'>75$</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>

                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="px-5 py-4">
                                <div className="flex items-center justify-center h-40 mb-4">
                                    <img className='w-52 h-36' src="https://www.jdrf.org/wp-content/uploads/2020/12/AWS-logo-2.jpg" alt="" />
                                </div>
                                <p className="mb-2 font-bold text-lg text-center">AWS Cloud Course</p>
                                <div className='pt-2 flex justify-between'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-amber-500'></FaStar>
                                        <span className='font-semibold'>4.5</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaClock className='text-amber-500'></FaClock>
                                        <span className='font-semibold'>14hr</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaMoneyBill className='text-amber-500'></FaMoneyBill>
                                        <span className='font-semibold'>50$</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>

                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="px-5 py-4">
                                <div className="flex items-center justify-center h-40 mb-4">
                                    <img className='w-52 h-28' src="https://t4.ftcdn.net/jpg/04/63/81/91/360_F_463819155_TZMqYan7kzmKGcMEG3Qlj7JkSouDpjyk.jpg" alt="" />
                                </div>
                                <p className="mb-2 font-bold text-lg text-center">GoLang Crash Course</p>
                                <div className='pt-2 flex justify-between'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-amber-500'></FaStar>
                                        <span className='font-semibold'>4.8</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaClock className='text-amber-500'></FaClock>
                                        <span className='font-semibold'>20hr</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaMoneyBill className='text-amber-500'></FaMoneyBill>
                                        <span className='font-semibold'>80$</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>

                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="px-5 py-4">
                                <div className="flex items-center justify-center h-40 mb-4">
                                    <img className='w-52 h-28' src="https://usamagzine.com/wp-content/uploads/2022/09/Data-Structures-In-Java-.jpeg" alt="" />
                                </div>
                                <p className="mb-2 font-bold text-lg text-center"> Data Structure Course</p>
                                <div className='pt-2 flex justify-between'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-amber-500'></FaStar>
                                        <span className='font-semibold'>4.7</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaClock className='text-amber-500'></FaClock>
                                        <span className='font-semibold'>22hr</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaMoneyBill className='text-amber-500'></FaMoneyBill>
                                        <span className='font-semibold'>90$</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>

                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="px-5 py-4">
                                <div className="flex items-center justify-center h-40 mb-4">
                                    <img className='w-52 h-28' src="https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg" alt="" />
                                </div>
                                <p className="mb-2 font-bold text-lg text-center"> Vue Crash Course</p>
                                <div className='pt-2 flex justify-between'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-amber-500'></FaStar>
                                        <span className='font-semibold'>4.8</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaClock className='text-amber-500'></FaClock>
                                        <span className='font-semibold'>21hr</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaMoneyBill className='text-amber-500'></FaMoneyBill>
                                        <span className='font-semibold'>40$</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>

                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="px-5 py-4">
                                <div className="flex items-center justify-center h-40 mb-4">
                                    <img className='w-52 h-28' src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png" alt="" />
                                </div>
                                <p className="mb-2 font-bold text-lg text-center"> Node Crash Course</p>
                                <div className='pt-2 flex justify-between'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-amber-500'></FaStar>
                                        <span className='font-semibold'>4.3</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaClock className='text-amber-500'></FaClock>
                                        <span className='font-semibold'>25hr</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaMoneyBill className='text-amber-500'></FaMoneyBill>
                                        <span className='font-semibold'>90$</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>

                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="px-5 py-4">
                                <div className="flex items-center justify-center h-40 mb-4">
                                    <img className='w-52 h-28' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg" alt="" />
                                </div>
                                <p className="mb-2 font-bold text-lg text-center"> React Native Course</p>
                                <div className='pt-2 flex justify-between'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-amber-500'></FaStar>
                                        <span className='font-semibold'>4.1</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaClock className='text-amber-500'></FaClock>
                                        <span className='font-semibold'>13hr</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaMoneyBill className='text-amber-500'></FaMoneyBill>
                                        <span className='font-semibold'>80$</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>

                    </div>
                </div>
            </div>

            {/* form email */}
            <div className="w-full dark:bg-gray-100 " data-aos="zoom-in-up" data-aos-duration="1400">
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-14">
                    <h1 className="text-4xl sm:text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800">Get Our Updates</h1>
                    <p className="pt-4 pb-5 text-xl text-gray-900 antialiased text-center">Find out about events and other news</p>
                    <div className="flex flex-row">
                        <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-blue-400 dark:text-gray-900">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;