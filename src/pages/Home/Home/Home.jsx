import BistroBoss from "../../../components/BistroBoss/BistroBoss";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <section className="max-w-screen-xl mx-auto">
                <div className="bg-black py-16">
                    <h1 className="text-4xl text-center font-bold text-white">Call Us: +88 0192345678910</h1>
                </div>
            </section>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;