import React from 'react';

const Blogs = () => {
    return (
        <div className='flex justify-center mt-5'>
            <div className='mb-5 flex justify-center'>
                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-7 mt-10">
                    <div className='bg-blue-200 rounded-3xl p-6 hover:bg-blue-300 ease-linear duration-300 border-gray-700 border-4'>
                        <h1 className='text-4xl text-bold'>What is context api?</h1>
                        <p className='mt-3 font-semibold text-gray-700'>Context api is very important for transferring data from one component to another in React application.A context api normally used to make some data accessible to multiple component  without passing props at every level of component a tree. it maks our work easy to share data or state from one component to another component in a react application. It also avoid from problems of props drilling. afterward it makes send data/state easey to multiple component. </p>
                    </div>
                    <div className='bg-blue-200 rounded-3xl p-6 hover:bg-blue-300 ease-linear duration-300 border-gray-600 border-4'>
                        <h1 className='mt-3 text-4xl  '>What is Semantic tag?</h1>
                        <p className='mt-3 font-semibold text-gray-700'>semantic tags - all tags whose uses match their names. It is machine and human readable at the same time. it givs a better accessiblty. It makes a webpage much easier to read. simantic give better user experiance. it keeps code clear. and also Improve SEO positioning. </p>
                        <p className='text-2xl text-gray-600 text-semibold'>Examples: <code>header, aside, footer, nav, etc.</code></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;