import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const course = useLoaderData();
    const { course_id, course_name, category, description, rating, duration, thumbnail, state, lectures, enrolled, level } = course;

    return (
        <div>
            <div>
                <h2>{ }</h2>
            </div>
        </div>
    );
};

export default SingleCourse;