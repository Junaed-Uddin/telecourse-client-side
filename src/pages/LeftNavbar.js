import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://telecourse-server.vercel.app/categories`)
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className="flex flex-col h-full p-3 rounded-lg w-full mx-2 sm:w-72 border-t-4 border-amber-400 shadow-xl dark:text-gray-900">
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className='text-lg'>Categories</h2>
                    <button className="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-800">
                            <rect width="352" height="32" x="80" y="96"></rect>
                            <rect width="352" height="32" x="80" y="240"></rect>
                            <rect width="352" height="32" x="80" y="384"></rect>
                        </svg>
                    </button>
                </div>
                <div className="relative -z-0">
                    <span className="absolute inset-y-0 left-0 flex items-center py-4">
                        <button type="submit" className="p-2 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 dark:text-gray-200">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-600 dark:text-gray-500 focus:dark:bg-gray-700" />
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        {
                            categories.map(category => <li key={category.category_id} className="rounded-sm">
                                <Link to={`/category/${category.category_id}`} className="flex text-black items-center p-2 space-x-3 rounded-md">
                                    <span className='text-base'>{category.name}</span>
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftNavbar;