import React from "react";
import Link from "next/link";

const Product = ({ image, category, item, price, size, redirect }) => {
  return (
    <Link href={redirect}>
      <div
        className="xl:w-1/4 lg:w-1/3 md:w-1/2 p-4 w-full cursor-pointer"
        bis_skin_checked="1"
      >
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-contain object-center w-full h-full block"
            src={image}
          />
        </a>
        <div className="mt-4" bis_skin_checked="1">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 text-center">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium text-center">
            {item}
          </h2>
          <p className="mt-1 text-center">₹{price}</p>
          <p className="mt-1 text-center ">Size : {size.join(" ")}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
