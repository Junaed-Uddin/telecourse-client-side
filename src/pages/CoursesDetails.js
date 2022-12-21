import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegClock, FaStar } from 'react-icons/fa'

const CoursesDetails = ({ allCourse }) => {
    const { course_id, course_name, category, description, rating, duration, thumbnail, state, lectures } = allCourse;

    return (
        <div className="w-full" data-aos="fade-up" data-aos-duration="1200">
            <div className="space-y-2 border w-full rounded-md shadow-xl mt-5 sm:mt-0 h-full" data-aos="fade-up" data-aos-duration="1200">
                <div className="space-y-2 relative">
                    <img src={thumbnail} alt="" className="block border object-top w-full rounded-md h-52" />
                    <div className="flex flex-wrap justify-between pr-4 items-center text-base dark:text-gray-400 pl-4 font-semibold">
                        <span className='mt-2'>{category}</span>
                        <p className='mt-2 bg-yellow-300 text-black text-xs font-bold rounded px-1 py-0.5'>Lectures: <span>{lectures}</span></p>
                    </div>
                </div>
                <div className="space-y-2 px-4 pb-2">
                    <Link to={`/course/${course_id}`} className="block">
                        <h3 className="text-xl font-semibold dark:text-indigo-400">{course_name}</h3>
                    </Link>
                    <p className="leading-snug dark:text-gray-600 pb-2">{description.length > 98 ? description.slice(0, 98) + '...' : description}</p>
                    <hr />
                    <div className='flex justify-between items-center py-2 px-2'>
                        <div className='flex items-center gap-1'>
                            <FaRegClock></FaRegClock>
                            <span>{duration}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-amber-400'></FaStar>
                            <span>{rating.number}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='font-bold'>{state}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;