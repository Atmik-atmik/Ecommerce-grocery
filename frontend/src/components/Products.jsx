import React, { useContext } from "react";
import { AppContext } from "../contex/AppContex";

const Products = () => {
  const { productsData, navigate } = useContext(AppContext);
  return (
    <div className="py-12">
      <div className="flex items-center">
        <h2 className="max-w-lg text-lg font-medium">Recently Arrived Products</h2>
        <div className="ml-1 w-20 flex border-b border-[var(--color-secondary)] border-2 "></div>
      </div>
      <h2 className="mt-4 text-[var(--color-secondary)] font-extrabold text-3xl ">
        Pick Your Favorite One
      </h2>
    </div>
  );
};

export default Products;
