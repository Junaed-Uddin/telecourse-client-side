import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/slider/banner.jpg'

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <div className="relative flex flex-col-reverse lg:pt-5 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
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
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <h2 className="mb-5 font-sans text-3xl font-bold text-gray-900 sm:text-5xl leading-loose">
                            Take The First Step To Knowledge {''}
                            <span className='my-2 text-violet-600'>With Us</span>
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                        Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.
                        </p>
                        <div className="flex items-center">
                            <Link
                                to="/"
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
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-6xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-3 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-blue-400">
                                <h3 className="text-3xl font-semibold">Platform Features</h3>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
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
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
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
                    <div className="flex shadow-xl justify-center py-5 border rounded-xl">
                        <div>
                            <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-indigo-50">
                                <img src="https://masterstudy.stylemixthemes.com/tech/wp-content/uploads/sites/21/2021/12/angular.png" alt="" />
                            </div>
                            <h6 className="mb-2 font-semibold text-lg text-center">Angular</h6>
                        </div>
                    </div>
                    <div className="flex shadow-xl justify-center py-5 border rounded-xl">
                        <div>
                            <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-indigo-50">
                                <img src="https://masterstudy.stylemixthemes.com/tech/wp-content/uploads/sites/21/2021/12/python.png" alt="" />
                            </div>
                            <h6 className="mb-2 font-semibold text-lg text-center">Python</h6>
                        </div>
                    </div>
                    <div className="flex shadow-xl justify-center py-5 border rounded-xl">
                        <div>
                            <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-indigo-50">
                                <img src="https://masterstudy.stylemixthemes.com/tech/wp-content/uploads/sites/21/2021/12/nodejs.png" alt="" />
                            </div>
                            <h6 className="mb-2 font-semibold text-lg text-center">Node</h6>
                        </div>
                    </div>
                    <div className="flex shadow-xl justify-center py-5 border rounded-xl">
                        <div>
                            <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-indigo-50">
                                <img src="https://masterstudy.stylemixthemes.com/tech/wp-content/uploads/sites/21/2021/12/reactjs.png" alt="" />
                            </div>
                            <h6 className="mb-2 font-semibold text-lg text-center">React</h6>
                        </div>
                    </div>
                    <div className="flex shadow-xl justify-center py-5 border rounded-xl">
                        <div>
                            <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-indigo-50">
                                <img src="https://masterstudy.stylemixthemes.com/tech/wp-content/uploads/sites/21/2021/12/docker.png" alt="" />
                            </div>
                            <h6 className="mb-2 font-semibold text-lg text-center">Docker</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;