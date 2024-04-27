import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slid1 from "../assets/images/handcrafted-wooden-decorative-sculpture.jpg";
import slid2 from "../assets/images/2149064430.jpg";
import slid3 from "../assets/images/2149072895.jpg";
import slid4 from "../assets/images/2149135764.jpg";
import slid5 from "../assets/images/2149864772.jpg";

import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { FaChevronDown } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  return (
    <div>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-full md:h-[91vh] h-[35vh]" src={slid5} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full md:h-[91vh] h-[35vh]" src={slid2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full md:h-[91vh] h-[35vh]" src={slid3} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full md:h-[91vh] h-[35vh]" src={slid4} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full md:h-[91vh] h-[35vh]" src={slid1} />
          </SwiperSlide>
        </Swiper>
        <div className="absolute w-full bottom-0 z-10 flex justify-center flex-col items-center bg-forth/50 md:py-5 py-1 text-white">
          <h2 className="md:text-3xl text-2xl text-center uppercase">
            <Typewriter
              cursor
              cursorColor="#FFF2E1"
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              words={[
                "Decorate your home with us.",
                "Get your best deals.",
                "Explor the world of art.",
              ]}
            />
          </h2>
          <button className="md:block hidden  md:text-4xl text-2xl text-forth hover:text-primary">
            <FaChevronDown></FaChevronDown>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
