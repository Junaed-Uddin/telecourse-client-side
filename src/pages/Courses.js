import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='flex justify-center'>
            <h2>This is Courses</h2>
        </div>
    );
};

export default Courses;