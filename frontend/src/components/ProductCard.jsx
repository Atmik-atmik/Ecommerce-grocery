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
      <hr className="w-full" />
      <div>
        <p className="text-[var(--color-secondary)] text-sm font-normal ">
          {product.category}{" "}
        </p>
        <h2 className="text-lg font-semibold text-gray-800 ">
          {product.name}{" "}
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-base font-normal line-through text-gray-400">
          {product.price}
        </p>
        <p className="text-base font-normal">{product.offerPrice} </p>
      </div>
    </div>
  );
};

export default ProductCard;
