import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, price, recipe } = item;
    return (
        <div className="card card-compact bg-[#F3F3F3] w-96 shadow-xl rounded-none">
            <figure>
                <img
                    className='w-full h-[250px]'
                    src={image}
                    alt="food" />
            </figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
            <div className="card-body text-center space-y-2">
                <h2 className="text-center text-xl font-bold">{name}</h2>
                <p className='w-5/6 mx-auto'>{recipe}</p>
                <div className="card-actions mx-auto">
                    <button className="btn btn-outline border-0 border-b-4 text-[#BB8506] bg-[#E8E8E8] px-6 uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;