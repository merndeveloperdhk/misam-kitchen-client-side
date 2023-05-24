import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// import { Rating } from '@smastrom/react-rating'



import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";


const Testimonial = () => {
    const [reviews, setReviews]= useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section className="my-20">
            <SectionTitle
                heading={'Testimonials'}
                subHeading={'Whats our client say?'}
            ></SectionTitle>
            
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review =><SwiperSlide
                    key={review._id}
                    >
                        <div className="m-4">
                            
                            <p>{review.recipe}</p>
                            <h3 className="text-3xl">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
              
            </Swiper>
        </section>
    );
};

export default Testimonial;