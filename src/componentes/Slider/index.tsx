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
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
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
        
        <SwiperSlide>
          <div className="slide-img">
            <img src="Slider/saude.svg" alt="" />
          </div>
          <p>SAÚDE</p>
          <img src="/Slider/Slider1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-img">
            <img src="Slider/trabalho.svg" alt="" />
          </div>
          <p>TRABALHO</p>
          <img src="/Slider/Slider2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-img">
            <img src="Slider/apoio.svg" alt="" />
          </div>
          <p>COMUNIDADE DE APOIO</p>
          <img src="/Slider/Slider3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-img">
            <img src="Slider/saude.svg" alt="" />
          </div>
          <p>dsdsa</p>
          <img src="/Slider/Slider1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-img">
            <img src="Slider/saude.svg" alt="" />
          </div>
          <p>dsdsa</p>
          <img src="/Slider/Slider1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-img">
            <img src="Slider/saude.svg" alt="" />
          </div>
          <p>dsdsa</p>
          <img src="/Slider/Slider1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-img">
            <img src="Slider/saude.svg" alt="" />
          </div>
          <p>dsdsa</p>
          <img src="/Slider/Slider1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-img">
            <img src="Slider/saude.svg" alt="" />
          </div>
          <p>dsdsa</p>
          <img src="/Slider/Slider1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-img">
            <img src="Slider/saude.svg" alt="" />
          </div>
          <p>dsdsa</p>
          <img src="/Slider/Slider1.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
