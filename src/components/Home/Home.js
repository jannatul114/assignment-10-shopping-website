import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReviews';
import HomeReview from '../HomeReview/HomeReview';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReview();
    const three = reviews.slice(0, 3);
    return (
        <div >

            <div className=" w-full my-9">

                <div className="flex bg-white" style={{ height: "600px;" }}>
                    <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                        <div>
                            <h2 className="text-5xl font-semibold text-gray-800 md:text-5xl sm:text-2xl">2022 New Collection!!</h2>
                            <h2 className="text-5xl font-semibold mt-6 text-gray-800 md:text-5xl sm:text-2xl">Get in <span className="text-blue-700">40% OFF!!</span></h2>

                            <div className="flex justify-center lg:justify-start mt-6">
                                <a className="px-4 py-3 bg-gray-900 text-gray-200 text-md font-semibold rounded hover:bg-gray-800" href="#">Explore</a>

                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2" >
                        <div style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }} className='flex justify-center'>

                            <img style={{ border: '7px solid #06325D' }} className='h-full object-cover' src="https://images.pexels.com/photos/6764701/pexels-photo-6764701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className="h-full bg-black opacity-25"></div>
                        </div>
                    </div>
                </div>
            </div>


            <h2 className="text-4xl font-semibold mt-20 text-blue-700 md:text-4xl">Customer Reviews</h2>

            <div className='mb-5 flex justify-center'>
                <div className="container grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-9">
                    {
                        three.map(review => <HomeReview getReview={review} key={review.id}></HomeReview>)
                    }

                </div>
            </div>
            <div className='my-5'>
                <Link className=' px-4 py-3 bg-gray-900 text-gray-200 text-md font-semibold rounded hover:bg-gray-800' to={"/reviews"}>Show More</Link>
            </div>


        </div>
    );
};

//  style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}

export default Home;