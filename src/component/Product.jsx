import React from "react";
import { Link } from "react-router-dom";
import TabsProduct from "./product/TabsProduct";

const Product = () => {
  return (
    <div id="product" className="w-full py-[7rem] px-4">
      <div className="containers ">
        <div className="flex justify-center mb-10">
          <div className="w-[40rem] text-center">
            <h1 className="font-bold text-3xl text-black/90">
              We Help You To Make Better Deals
            </h1>
            <h1 className="text-black/60 mt-3 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              ratione magni inventore voluptatem quo nam, neque molestias
              facilis numquam eius!
            </h1>
          </div>
        </div>
      </div>
      <TabsProduct />
    </div>
  );
};

export default Product;
