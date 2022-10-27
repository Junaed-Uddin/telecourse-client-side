import React from 'react';

const Faq = () => {
    return (
        <section className="dark:bg-gray-50 dark:text-gray-900">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-4xl">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400">Who is the course for?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-700">For all beginner level students who are interested in learning computer science or web development</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400">How long will it take to complete the course?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-700">Like 5-6 months, if you continue the course for 6-8 hours a day</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400">What is included in the course?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-700">In short, from Django, Html, CSS to bootstrap, JavaScript, Git, ES6, REST API, server, JSON are there. At the same time, there is a system for making complete websites with React, the framework that currently has the most jobs.</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;