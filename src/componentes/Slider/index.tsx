import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip,EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../style/style.css";

register();
function Slider() {
  return (
    <>
      <Swiper 
        
        navigation
        
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={
          {
             rotate: 50,
             stretch: 0,
             depth: 100,
             modifier: 1,
             slideShadows: false,
          }
        }
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        
        
      >
        
        <SwiperSlide className="flip">
          <div className="front-card">
          <img src="/Slider/Slider1.png" />
          </div>
            
          <div className="back-card">
            <h1>Saúde</h1>
            <p></p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flip">
          <div className="front-card">
          <img src="/Slider/Slider2.png" />
          </div>
            
          <div className="back-card">
            <h1>Trabalho</h1>
            <p></p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flip">
          <div className="front-card">
          <img src="/Slider/Slider3.png" />
          </div>
            
          <div className="back-card">
            <h1>Apoio</h1>
            <p></p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
