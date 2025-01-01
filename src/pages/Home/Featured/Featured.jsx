import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed max-w-screen-xl mx-auto text-white pt-8 my-20 bg-black bg-opacity-50">
            <SectionTitle
                subHeading="Check it out"
                heading="featured item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center pt-12 pb-20 px-36">
                <div>
                    <img className="w-[648px]" src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">where can i some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate quas magni sed eveniet, distinctio numquam pariatur officia debitis id?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;