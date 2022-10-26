import React, { useEffect, useRef } from 'react';
import { FaBookReader, FaCertificate, FaClock, FaFileContract, FaIdBadge, FaLanguage, FaLevelUpAlt, FaLock, FaMoneyBill, FaQuestion, FaRegFilePdf, FaStar, } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const course = useLoaderData();
    const { course_id, course_name, category, instructor, description, rating, duration, state, lectures, enrolled, quizzes, assessments, certificate, languages, level, photo } = course;

    const topContainer = useRef();

    useEffect(() => {
        topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
    }, []);

    return (
        <div className='w-full'>
            <div ref={topContainer} />
            <section className="mt-10 dark:text-gray-900">
                <div className='flex flex-col-reverse w-3/4 mx-auto sm:flex-row justify-between items-center'>
                    <h2 className='text-4xl text-amber-400 text-start font-semibold mb-8'>{course_name}</h2>
                    <div className='flex items-center gap-2 mb-8'>
                        <FaRegFilePdf size={30}></FaRegFilePdf>
                        <span>Get the PDF</span>
                    </div>
                </div>
                <div className="container px-3 sm:px-0 gap-5 md:flex justify-center mx-auto">
                    <div className="container flex flex-col sm:max-w-4xl shadow-2xl rounded-md divide-gray-700 dark:bg-black dark:text-gray-200">
                        <div className="px-5 py-3 border border-gray-400">
                            <div className="flex justify-between flex-col sm:flex-row items-center w-full space-x-4 sm:divide-x divide-slate-400/25">
                                <div className='flex py-3'>
                                    <div>
                                        <img src={instructor.img} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    </div>
                                    <div className='sm:pl-2 text-center sm:text-start'>
                                        <span className="text-xs dark:text-gray-400">Instructor</span>
                                        <h4 className="font-bold dark:text-yellow-500">{instructor.name}</h4>
                                    </div>
                                </div>
                                <div className='pl-2 hidden md:block'>
                                    <span className="text-xs dark:text-gray-400">Category</span>
                                    <h4 className="font-bold dark:text-yellow-500">{category}</h4>
                                </div>
                                <div className='pl-2 hidden sm:block'>
                                    <span className="text-xs dark:text-gray-400">ratings</span>
                                    <div className='flex items-center space-x-2 dark:text-yellow-500'>
                                        <FaStar className='text-amber-400'></FaStar>
                                        <span className="text-xl font-bold">{rating.number}</span>
                                    </div>
                                </div>
                                <div className='pl-2 hidden sm:block'>
                                    <span className="text-xs dark:text-gray-400">Price</span>
                                    <div className='flex items-center space-x-2 dark:text-yellow-500'>
                                        <span className="text-2xl font-bold">{state}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 sm:p-4 space-y-2 rounded-xl dark:text-gray-400 h-full">
                            <img className='w-full h-full object-cover object-top-left' src={photo} alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col border border-t-4 md:w-80 border-amber-400 px-10 mt-5 md:mt-0 shadow-2xl py-8 rounded-lg dark:text-black dark:bg-gray-200 divide-y divide-slate-400">
                        <div className="flex items-center py-4 space-x-2 sm:space-x-4">
                            <FaBookReader></FaBookReader>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Enrolled: {enrolled} Students</p>
                            </div>
                        </div>
                        <div className="flex items-center py-4 space-x-2 sm:space-x-4">
                            <FaClock></FaClock>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Duration: {duration}</p>
                            </div>
                        </div>
                        <div className="flex items-center py-4 space-x-2 sm:space-x-4">
                            <FaLevelUpAlt></FaLevelUpAlt>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Level: {level}</p>
                            </div>
                        </div>
                        <div className="flex items-center py-4 space-x-2 sm:space-x-4">
                            <FaFileContract></FaFileContract>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Lectures: {lectures}</p>
                            </div>
                        </div>
                        <div className="flex items-center py-4 space-x-2 sm:space-x-4">
                            <FaMoneyBill></FaMoneyBill>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Amount: {state}</p>
                            </div>
                        </div>
                        <div className="flex items-center py-4 space-x-2 sm:space-x-4">
                            <FaLanguage></FaLanguage>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Language: {languages}</p>
                            </div>
                        </div>
                        <div className="flex items-center py-4 space-x-2 sm:space-x-4">
                            <FaCertificate></FaCertificate>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Certificate: {certificate}</p>
                            </div>
                        </div>
                        <div className="flex items-center py-4 space-x-2 sm:space-x-4">
                            <FaQuestion></FaQuestion>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Quizzes: {quizzes}</p>
                            </div>
                        </div>
                        <div className="flex items-center py-4 space-x-2 sm:space-x-4">
                            <FaIdBadge></FaIdBadge>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Assessments: {assessments}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='sm:flex justify-center gap-5 pl-4 my-10 px-2'>
                <section className="container dark:bg-gray-800 sm:max-w-4xl p-10 dark:text-gray-300 rounded-md">
                    <p className='my-4 text-3xl text-amber-400 font-semibold'>Course Description</p>
                    <div className='text-lg text-gray-200'>
                        <h2>{description}</h2>
                    </div>
                    <div>
                        <h2 className='text-3xl my-4 text-amber-400 font-semibold'>Learning Outcomes</h2>
                        <ul className='list-disc ml-8 text-lg text-gray-300'>
                            <li>LIVE PROJECT End to End Software Testing Training Included.</li>
                            <li>Learn Software Testing and Automation basics from a professional trainer from your own desk.</li>
                            <li>Information packed practical training starting from basics to advanced testing techniques</li>
                            <li>Best suitable for beginners to advanced level users and who learn faster when demonstrated.</li>
                            <li>Course content designed by considering current software testing technology and the job market.</li>
                            <li>Practical assignments at the end of every session.</li>
                            <li>Practical learning experience with live project work and examples.</li>
                        </ul>
                    </div>
                </section>
                <div>
                    <div className='font-semibold container'>
                        <h2 className='text-2xl mb-3 mt-4 md:mt-0 font-semibold text-amber-500'>Latest Courses</h2>
                        <div className="md:w-80 p-4 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                            <img src="https://w7.pngwing.com/pngs/566/160/png-transparent-golang-hd-logo-thumbnail.png" alt="" className="object-cover object-center w-full rounded-md h-40 dark:bg-gray-500" />
                            <div className="mt-4 mb-2">
                                <span className="block text-xs font-medium tracking-widest uppercase dark:text-indigo-400">Web Development</span>
                                <h2 className="text-xl mt-1 font-semibold tracking-wide">Golang Full Course</h2>
                            </div>
                        </div>
                    </div>
                    <div className='font-semibold mt-5 container'>
                        <div className="md:w-80 p-4 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                            <img src="https://www.smile.eu/sites/default/files/styles/picture_news_technology/public/2018-03/D2SI_Blog_Image_Logo_AWS%20%281%29_0.jpg?itok=_9tqgHdB" alt="" className="object-cover object-center w-full rounded-md h-40 dark:bg-gray-500" />
                            <div className="mt-4 mb-2">
                                <span className="block text-xs font-medium tracking-widest uppercase dark:text-indigo-400">Web Development</span>
                                <h2 className="text-xl mt-1 font-semibold tracking-wide">Golang Full Course</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mb-10'>
                <Link to={`/checkout/${course_id}`}>
                    <button className='px-5 py-2 rounded-md font-bold bg-amber-400 flex items-center gap-2'><FaLock></FaLock><span>Get Premium Access</span></button>
                </Link>
            </div>
        </div>
    );
};

export default SingleCourse;