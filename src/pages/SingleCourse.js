import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const course = useLoaderData();
    const { course_id, course_name, category, instructor, description, rating, duration, thumbnail, state, lectures, enrolled, level, photo } = course;

    return (
        <div className='flex justify-center'>
            <div>
                <div className="container flex flex-col w-full max-w-4xl p-6 mx-5 mt-5 divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4 divide-x divide-slate-400/25">
                            <div>
                                <img src={instructor.img} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div className='pl-2'>
                                <span className="text-xs dark:text-gray-400">Instructor</span>
                                <h4 className="font-bold">{instructor.name}</h4>
                            </div>
                            <div className='pl-2'>
                                <span className="text-xs dark:text-gray-400">Category</span>
                                <h4 className="font-bold">{category}</h4>
                            </div>
                            <div className='pl-2 '>
                                <span className="text-xs dark:text-gray-400">ratings</span>
                                <div className='flex items-center pb-0 space-x-2 dark:text-yellow-500'>
                                    <FaStar className='text-amber-400'></FaStar>
                                    <span className="text-xl font-bold">{rating.number}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-500">
                            <span className="text-xl font-bold">{state}</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <img src={photo} alt="" />
                    </div>
                </div>

                
            </div>
            <div>
                <h2>This is latest courses</h2>
            </div>
        </div>
    );
};

export default SingleCourse;