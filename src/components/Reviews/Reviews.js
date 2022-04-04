import React from 'react';
import useReview from '../../hooks/useReviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    console.log(reviews);
    return (
        <div>
            <h1 className='text-4xl font-semibold my-5 text-blue-700'>What Customers Says About Us</h1>
            <div className='flex justify-center my-8'>
                <div className='container grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 mt-9'>
                    {
                        reviews.map(review =>
                            <div className="flex flex-col items-center justify-center bg-blue-100 p-4 shadow rounded-lg my-3">
                                <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                                    <img src={review.img}
                                        alt=""
                                        className="h-full w-full" />
                                </div>

                                <h2 className="mt-4 font-bold text-xl">{review.name}</h2>
                                <p className="text-s text-gray-700 text-center mt-3">
                                    {review.review}
                                </p>
                                <p><small>Ratings: {review.rating}</small></p>
                                <p className='text-yellow-500'>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                </p>
                            </div>
                        )
                    }
                </div>

            </div>
            <p className='text-center my-5'>©Jannatul ferdaous mithila</p>

        </div>
    );
};

export default Reviews;