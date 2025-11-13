import React, { useContext } from "react";
import { AppContext } from "../contex/AppContex";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "motion/react";
import { assets } from "../assets/assets";

const Hero = () => {
  const { navigate } = useContext(AppContext);

  const slides = [
    {
      title: "Premium Online store for fruits and Veggies.",
      img: assets.hero_img1,
      btn1: "SHOP NOW",
      btn2: "LEARN MORE",
    },

    {
      title: "Fresh and Organic Groceries Delivered",
      img: assets.hero_img2,
      btn1: "ORDER NOW",
      btn2: "FREE DELIVERY",
    },

    {
      title: "Your daily needs at Best Price.",
      img: assets.hero_img3,
      btn1: "START SHOPPING",
      btn2: "SPECIAL DEALS",
    },
  ];
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-[#D8E7C7] h-[800px] bg-cover flex flex-col md:flex-row items-center justify-center gap-4 "
              style={{ backgroundImage: `url(${assets.leef_layer_bg})` }}
            >
              <div className="flex flex-col items-center">
                <img src={assets.banner} alt="" />
                <h1 className="max-w-2xl text-3xl md:text-5xl font-extrabold            text-center capitalize">
                  {slide.title}
                </h1>

                <div className="flex gap-5 mt-10">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 md:px-10 py-2 md:py-3 cursor-pointer bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition-all ease-in-out duration-300 "
                  >
                    {slide.btn1}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 md:px-10 py-2 md:py-3 cursor-pointer bg-[var(--color-secondary)] text-white hover:bg-[var(--color-primary)] transition-all ease-in-out duration-300 "
                  >
                    {slide.btn2}
                  </motion.button>
                </div>
              </div>
              <motion.div
                intitial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 3,
                  type: "spring",
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="mt-10 md:mt-0"
              >
                <img
                  src={slide.img}
                  alt=""
                  className="h-[300px] md:h-[600px] "
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
