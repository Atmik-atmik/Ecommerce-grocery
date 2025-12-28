import React, { useContext } from "react";
import { AppContext } from "../contex/AppContex";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  const { navigate } = useContext(AppContext);
  return (
    <div className="w-[250px] h-[350px] rounded-xl bg-[#FAFAFA] p-[20px] hover:border hover:border-secondary hover:transform hover:scale-105 transition-all ease-in-out duration-300 ">
      <p>{product.weight} </p>
      <div className="cursor-pointer ">
        <img src={product.images[0]} alt="" />
      </div>
      <button className="flex items-center justify-center mb-3 w-full py-1 bg-[var(--color-secondary)] text-white cursor-pointer ">
        <ShoppingCart />
      </button>
    </div>
  );
};

export default ProductCard;
