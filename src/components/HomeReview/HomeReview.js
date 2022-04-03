import React from 'react';


const HomeReview = ({ getReview }) => {

    // const threeReview = getReview.slice(0, 3);
    console.log(getReview);
    const { name, img, rating, review } = getReview;
    console.log(name);

    return (

        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg my-3">
            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                <img src={img}
                    alt=""
                    className="h-full w-full" />
            </div>

            <h2 className="mt-4 font-bold text-xl">{name}</h2>
            <p className="text-s text-gray-500 text-center mt-3">
                {review}
            </p>
            <p><small>Ratings: {rating}</small></p>
        </div>

    );
};

export default HomeReview;