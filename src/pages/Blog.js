import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-8 text-center">
                <p
                    className="inline-block font-sans text-3xl font-bold sm:text-4xl"
                >
                    Some Questions
                </p>
            </div>
            <div className="mb-10 border-t border-b divide-y">
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            Question-1
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <p className="text-3xl font-bold leading-none sm:text-2xl xl:text-2xl">
                                What is cors?
                            </p>
                        </div>
                        <p className="text-gray-700">
                            CORS (Cross-origin resource sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            Question-2
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <p className="text-3xl font-bold leading-none sm:text-2xl xl:text-2xl">
                                Why are you using firebase? What other options do you have to implement authentication?
                            </p>
                        </div>
                        <p className="text-gray-700">
                            Firebase is great for quick projects. it's easy to set up, fast, in many cases requires only front-end logic. Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Usually, it has authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            Question-3
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <p className="text-3xl font-bold leading-none sm:text-2xl xl:text-2xl">
                                How does the private route work?
                            </p>
                        </div>
                        <p className="text-gray-700">
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            Question-4
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <p className="text-3xl font-bold leading-none sm:text-2xl xl:text-2xl">
                                What is Node? How does Node work?
                            </p>

                        </div>
                        <p className="text-gray-700">
                        Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. It is a used as backend service where javascript works on the server-side of the application. it accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blog;