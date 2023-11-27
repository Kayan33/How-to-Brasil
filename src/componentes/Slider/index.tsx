import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../style/style.css";

register();
function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        navigation
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide>
          <div>
            <img src="/Slider/Slider1.png" />
          </div>

          <div className="slide-texto">
            <h3>Saúde</h3>
            <p>
              Familiarize-se com o sistema de saúde local e comprove-se de ter
              um plano de saúde adequado. Faça exames médicos regulares e
              mantenha-se informado sobre os serviços médicos disponíveis em sua
              área.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src="/Slider/Slider2.png" />
          </div>
          <div className="slide-texto">
            <h3>Buscar Emprego ou Educação</h3>
            <p>
              Se você ainda não tiver emprego, comece a procurar oportunidades
              que se alinhem com suas habilidades e interesses.
            </p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div>
            <img src="/Slider/Slider3.png" />
          </div>

          <div className="slide-texto">
          <h3>Busque Apoio Comunitário</h3>
          <p>
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais ou instituições de apoio a
            imigrantes.
          </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src="/Slider/Slider2.png" />
          </div>
          <div className="slide-texto">
            <h3>Buscar Emprego ou Educação</h3>
            <p>
              Se você ainda não tiver emprego, comece a procurar oportunidades
              que se alinhem com suas habilidades e interesses.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src="/Slider/Slider3.png" />
          </div>

          <div className="slide-texto">
          <h3>Busque Apoio Comunitário</h3>
          <p>
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais ou instituições de apoio a
            imigrantes.
          </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
