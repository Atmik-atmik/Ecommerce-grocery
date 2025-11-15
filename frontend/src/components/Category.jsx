import React, { useContext } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { AppContext } from "../contex/AppContex";

const Category = () => {
  const { categoriesData } = useContext(AppContext);
  const colors = [
    "bg-red-300",
    "bg-green-300",
    "bg-blue-300",
    "bg-cyan-300",
    "bg-puple-300",
    "bg-pink-300",
    "bg-orange-300",
    "bg-teal-300",
  ];
  return (
    <div className="py-12">
      <div className="flex items-center">
        <h2 className="max-w-lg text-lg font-medium">Category</h2>
        <div className="ml-1 w-20 flex border-b border-[var(--color-secondary)] border-2 "></div>
      </div>
      <h2 className="mt-4 text-[var(--color-secondary)] font-extrabold text-3xl ">
        Shop By Collection{" "}
      </h2>

      <Swiper
        modules={{ Autoplay }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        slidesPerview={6}
        breakpoints={{
          0: {
            slidesPerview: 2,
          },

          768: {
            slidesPerview: 3,
          },
          1024: {
            slidesPerview: 6,
          },
        }}
        className="w-full my-5"
      >
        {categoriesData.map((category, i) => (
          <SwiperSlide key={i}>
            <motion.div>
              <img src={category.image} alt="" className="w-32 h-32" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
