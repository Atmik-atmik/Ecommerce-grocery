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
    </div>
  );
};

export default Category;
