import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import { useRef } from "react";
import { classList } from "../../../utils/classList";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Slider from "react-slick";

const Carousel = () => {
   let sliderRef = useRef(null);
   let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               pauseOnHover: false,
               autoplay: false,
               autoplaySpeed: 0,
            }
         },
      ]
   };

   return (
      <div className={styles.carouselContainer}>
         <Slider ref={(slider) => sliderRef = slider} {...settings}>
            <div className={styles.carouselItem}>
               <img className={classList(["imgResponsive"])} src="/src/assets/carousel-1.jpg" alt="Carousel 1" />
            </div>
            <div className={styles.carouselItem}>
               <img className={classList(["imgResponsive"])} src="/src/assets/carousel-2.jpg" alt="Carousel 2" />
            </div>
            <div className={styles.carouselItem}>
               <img className={classList(["imgResponsive"])} src="/src/assets/carousel-3.jpeg" alt="Carousel 3" />
            </div>
         </Slider>
         <button type="button" onClick={()=>sliderRef?.slickPrev()} className={classList([styles.btnPrev])}><IconChevronLeft fontSize={30}/></button>
         <button type="button" onClick={()=>sliderRef?.slickNext()} className={classList([styles.btnNext])}><IconChevronRight fontSize={30}/></button>
      </div>
   );
};

export default Carousel;