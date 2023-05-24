import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from '../../../../assets/images/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle
            heading={'Featured Item'}
            subHeading={'Check it Out'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>May 23, 2023</p>
                    <p className="uppercase">Where can i get some:</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quae dolor dignissimos debitis illum omnis veniam magnam facilis dolore minima veritatis ex odio, quam placeat et illo architecto quia quaerat?</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;