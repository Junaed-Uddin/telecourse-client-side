import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesDetails from './CoursesDetails';
import LeftNavbar from './LeftNavbar';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);

    return (
        <div className='mt-10 flex flex-wrap sm:flex-nowrap justify-evenly'>
            <LeftNavbar></LeftNavbar>
            <div className='grid lg:grid-cols-3 w-full md:grid-cols-2 sm:grid-cols-1 gap-5 sm:w-3/4 sm:mx-3 lg:mx-0 lg:mr-2' data-aos="fade-up" data-aos-duration="1200">
                {
                    courses.map(cs =><CoursesDetails
                        key={cs.course_id}
                        allCourse={cs}
                    ></CoursesDetails>)
                }
            </div>
        </div>
    );
};

export default Courses;