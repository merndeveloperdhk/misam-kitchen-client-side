import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import sliderImage2 from '../../../../../mobile-site/assets/banner images/banner 02.jpg';
import sliderImage1 from '../../../../../mobile-site/assets/banner images/banner 01.jpg';
import sliderImage3 from '../../../../../mobile-site/assets/banner images/banner 03.png';
import sliderImage5 from '../../../../../mobile-site/assets/banner images/banner 05.png';
import sliderImage4 from '../../../../../mobile-site/assets/banner images/banner 04.jpg';
import sliderImage6 from '../../../../../mobile-site/assets/banner images/banner 06.png';



const Banner = () => {
    return (
        <Carousel >
            
            <div>
                <img  src={sliderImage1} />

            </div>
           
            <div>
                <img src={sliderImage2} />
            </div>
            <div>
                <img src={sliderImage3} />

            </div>
           
            <div>
                <img src={sliderImage4} />
            </div>
            <div>
                <img src={sliderImage5} />

            </div>
           
            <div>
                <img src={sliderImage6} />
            </div>
           
            
        </Carousel>
    );
};

export default Banner;