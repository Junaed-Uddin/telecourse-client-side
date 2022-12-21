import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesDetails from './CoursesDetails';
import LeftNavbar from './LeftNavbar';

const Categories = () => {
    const coursesDetails = useLoaderData();
    return (
        <div className='mt-10 flex flex-wrap sm:flex-nowrap justify-evenly'>
            <LeftNavbar></LeftNavbar>
            <div className='grid lg:grid-cols-3 w-full md:grid-cols-2 sm:grid-cols-1 gap-5 mx-2 sm:w-3/4 sm:mx-3 lg:mx-0 lg:mr-2' data-aos="fade-up" data-aos-duration="1200">
                {
                    coursesDetails.map((cd, index) => <CoursesDetails
                        key={index}
                        allCourse={cd}
                    ></CoursesDetails>)
                }
            </div>
        </div>
    );
};

export default Categories;