import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const HomeReview = ({ getReview }) => {
    const { name, img, review } = getReview;
    return (
        <div className="flex flex-col items-center justify-center bg-blue-100 p-4 shadow rounded-lg my-3 hover:scale-105 duration-300 ease-in-out bg-blue-200 border-gray-700 border-4">
            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40 border-gray-700 border-4">
                <img src={img}
                    alt=""
                    className="h-full w-full " />
            </div>

            <h2 className="mt-4 font-bold text-xl">{name}</h2>
            <p className="text-s text-gray-600 text-center mt-3">
                {review}
            </p>


            <p>⭐️⭐️⭐️⭐️</p>
        </div>
    );
};

export default HomeReview;