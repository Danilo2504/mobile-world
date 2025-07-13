import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { getTypeFromEnum } from '../../../utils/enums';

const carouselTypes = {
   IMAGES: 'images',
   CONTENT: 'content',
}

const Carousel = ({type = 'content', slides = [], customConfig = {}}) => {
   const carouselType = getTypeFromEnum({value: type, enumObj: carouselTypes, defaultKey: carouselTypes.IMAGES, trueKey: carouselTypes.IMAGES})
   
   const PrevArrow = ({onClick}) => {
      return (
         <button type="button" onClick={onClick} className={styles.btnPrev}>
            <IconChevronLeft fontSize={30} />
         </button>
      );
   };
   
   const NextArrow = ({onClick}) => {
      return (
         <button type="button" onClick={onClick} className={styles.btnNext}>
            <IconChevronRight fontSize={30} />
         </button>
      );
   };

   const defaults = {
      dots: false,
      infinite: true,
      waitForAnimate: false,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 0,
               vertical: true,
               verticalSwiping: true,
            }
         },
      ]
   };

   const settings = Object.assign(defaults, customConfig);

   return (
      <div className={styles.carouselContainer}>
         <Slider {...settings}>
            {(carouselType === 'images') ?
               slides.map((item) => (
                  <div className={styles.carouselItem} key={item.id}>
                     <img className={styles.imgResponsive} src={item.imageUrl} alt={item.altText} />
                  </div>
               )) :
               slides.map((item) => (
                  <div className={styles.carouselItem} key={item.id}>
                     {item.content}
                  </div>
               ))
            }
         </Slider> 
      </div>
   );
};

export default Carousel;