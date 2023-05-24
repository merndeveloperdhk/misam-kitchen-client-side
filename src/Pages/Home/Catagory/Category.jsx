import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import './Category.css'

import { Pagination } from "swiper";
import swapImage1 from '../../../../../mobile-site/assets/images/image 01.jpg'
import swapImage2 from '../../../../../mobile-site/assets/images/image 02.jpg'
import swapImage3 from '../../../../../mobile-site/assets/images/image 03.jpg'
import swapImage4 from '../../../../../mobile-site/assets/images/image 04.jpg'
import swapImage5 from '../../../../../mobile-site/assets/images/image 05.jpg'
import swapImage6 from '../../../../../mobile-site/assets/images/image 06.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <div>
           <section>
            <SectionTitle
            subHeading={"From 11.00 AM to 10.00 PM"}
            heading={"Order Online"}
            
            ></SectionTitle>
           <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img className="swape-img" src={swapImage1} alt="" />
                    <h3 className="text-2xl uppercase text-center -mt-16">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swape-img" src={swapImage2} alt="" />
                    <h3 className="text-2xl uppercase text-center -mt-12">Masala</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swape-img" src={swapImage3} alt="" />
                    <h3 className="text-2xl uppercase text-center -mt-12">Vegeterians</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swape-img" src={swapImage4} alt="" />
                    <h3 className="text-2xl uppercase text-center -mt-12">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swape-img" src={swapImage5} alt="" />
                    <h3 className="text-2xl uppercase text-center -mt-12">Juices</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swape-img" src={swapImage6} alt="" />
                    <h3 className="text-2xl uppercase text-center -mt-12">Curry</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swape-img" src={swapImage4} alt="" />
                    <h3 className="text-2xl uppercase text-center -mt-12">salad</h3>
                </SwiperSlide>
                


            </Swiper>
           </section>
        </div>
    );
};

export default Category;