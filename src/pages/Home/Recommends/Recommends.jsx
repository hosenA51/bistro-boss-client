import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide5.jpg'

const Recommends = () => {
    return (
        <section className="max-w-screen-xl mx-auto my-20">
            <SectionTitle
                subHeading="Should try"
                heading="CHEF RECOMMENDS"
            ></SectionTitle>
            <div className='flex gap-6 justify-between'>
                <div className="card card-compact bg-[#F3F3F3] w-96 shadow-xl rounded-none">
                    <figure>
                        <img
                        className='w-full h-[250px]'
                            src={img1}
                            alt="food" />
                    </figure>
                    <div className="card-body text-center space-y-2">
                        <h2 className="text-center text-xl font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.</p>
                        <div className="card-actions mx-auto">
                            <button className="btn btn-outline border-0 border-b-4 text-[#BB8506] bg-[#E8E8E8] px-6 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-[#F3F3F3] w-96 shadow-xl rounded-none">
                    <figure>
                        <img
                        className='w-full h-[250px]'
                            src={img2}
                            alt="food" />
                    </figure>
                    <div className="card-body text-center space-y-2">
                        <h2 className="text-center text-xl font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.</p>
                        <div className="card-actions mx-auto">
                            <button className="btn btn-outline border-0 border-b-4 text-[#BB8506] bg-[#E8E8E8] px-6 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-[#F3F3F3] w-96 shadow-xl rounded-none">
                    <figure>
                        <img
                        className='w-full h-[250px]'
                            src={img3}
                            alt="food" />
                    </figure>
                    <div className="card-body text-center space-y-2">
                        <h2 className="text-center text-xl font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.</p>
                        <div className="card-actions mx-auto">
                            <button className="btn btn-outline border-0 border-b-4 text-[#BB8506] bg-[#E8E8E8] px-6 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommends;