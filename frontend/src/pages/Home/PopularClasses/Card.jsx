import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { _id, name, image, availableSeats, price, totalEnrolled, description } = props.item;

    return (
        <div className='shadow-lg rounded-lg p-3 flex flex-col justify-between border border-secondary overflow-hidden m-4'>
            <img src={image} alt="" />
            <div>
                <h2 className='text-xl font-semibold mb-2 dark:text-white'>{name}</h2>
                <p className='text-gray-600 mb-2'>Available Seats: {availableSeats}</p>
                <p className='text-gray-600 mb-2'>Price: {price}</p>
                <p className='text-gray-600 mb-2'>Total Students: {totalEnrolled}</p>
                <div className="flex justify-center"> {/* Center the button */}
                    <Link to={`class/${_id}`}>
                        <button className='px-12 w-full py-1 bg-secondary rounded-xl text-white font-bold mt-2'>
                            Select
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
