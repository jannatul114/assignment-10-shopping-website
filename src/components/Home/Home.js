import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReviews';
import HomeReview from '../HomeReview/HomeReview';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReview();
    const three = reviews.slice(0, 3);
    return (
        <div className='bg-gray-200'>

            <div className=" w-full py-9">

                <div className="flex bg-gray-200" style={{ height: "600px;" }}>
                    <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                        <div>
                            <h2 className="text-blue-700 text-6xl font-bold">2022 </h2>
                            <h2 className="text-5xl font-semibold text-gray-800 md:text-5xl mt-4">New Collection!!</h2>
                            <h2 className="text-5xl font-semibold mt-6 text-gray-800 md:text-5xl sm:text-2xl">Get in <span className="text-blue-700">40% OFF!!</span></h2>
                            <p className='text-xl text-gray-500 my-3'>get the best quality dress at a presentable price. order now!!</p>

                            <div className="flex justify-center lg:justify-start mt-6">
                                <button className="px-4 py-3 bg-blue-600 text-gray-200 text-md font-semibold rounded hover:bg-gray-800" >Explore</button>

                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2" >
                        <div style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }} className='flex justify-center'>

                            <img style={{ border: "5px solid #1D4ED8" }} className='h-full object-cover' src="https://images.pexels.com/photos/6764701/pexels-photo-6764701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                        </div>
                    </div>
                </div>
            </div>


            <h2 className="text-3xl font-semibold mt-20 text-blue-700 md:text-4xl ">Customer Reviews (3)</h2>

            <div className='mb-5 flex justify-center'>
                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-9">
                    {
                        three.map(review => <HomeReview getReview={review} key={review.id}></HomeReview>)
                    }

                </div>
            </div>
            <div className='py-5'>
                <Link className=' px-4 py-3 bg-gray-900 text-gray-200 text-md font-semibold rounded hover:bg-gray-800' to={"/reviews"}>Show More</Link>
            </div>


        </div>
    );
};


export default Home;