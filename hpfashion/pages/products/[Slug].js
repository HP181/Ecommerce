import React, { useContext } from "react";
import UserContext from "../../Context/UserContext/UserContext";
import { useRouter } from "next/router";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const product = {



  sizes: [
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ]
};

// const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}




const Slug = ({ SingleProduct }) => {
  const router = useRouter();
  const { Slug } = router.query;

  
  const items = useContext(UserContext)

  const [selectedColor, setSelectedColor] = useState(SingleProduct.attributes.color[0]);
  const [selectedSize, setSelectedSize] = useState(SingleProduct.attributes.size[2]);


  {
    console.log("sp is ", SingleProduct);
    console.log("selectedColor is ", selectedColor);
    console.log("selectedSize is ", selectedSize);
  }


  const addToCart = (e) => {
    e.preventDefault()
  //   items.setCard([...items.Card, {title:SingleProduct.attributes.slug, image:SingleProduct.attributes.image.data.attributes.name, color: "red", price:SingleProduct.attributes.price , size:"xl" }])
  // }

 }

  return (
    <div className="bg-white">
      <p className="text-center mt-2 text-xl font-semibold md:mt-6 lg:mt-6 lg:text-left lg:ml-10 xl:text-left xl:ml-10 ">
        {" "}
        {SingleProduct.attributes.category} / {SingleProduct.attributes.slug}
      </p>

      {/* Product info */}
      <div className=" md:grid grid-cols-2 gap-2 mt-8  md:p-4 lg:p-4 lg:grid xl:grid ">
        <div className=" flex justify-center items-center md:p-4 ">
          <img
            src={
              SingleProduct.attributes.image.data &&
              SingleProduct.attributes.image.data.attributes.name
            }
            className="object-contain object-center w-[70%] h-full block md:w-[180%] lg:w-[25em] xl:w-[23em] "
          />
        </div>

        {/* Options */}
        <div className=" sm:mt-4 sm:p-8 flex flex-col md:flex md:flex-1  lg:flex lg:flex-grow xl:flex xl:flex-grow xl:pr-8">
          <h2 className="text-2xl font-semibold ">Product Info</h2>

          <div className="flex justify-between items-center mt-8 md:flex md:justify-between md:flex-row">
            <h1 className=" text-2xl font-normal text-gray-900 tracking-tight ">
              {SingleProduct.attributes.slug}
            </h1>
            <p className="tracking-tight text-2xl  text-gray-900">
            $ {SingleProduct.attributes.price}
            </p>
          </div>



            {/* <button onClick={handleColors}>sdd</button> */}
          <form className="mt-6 ">
            <div className="clss flex">

            
            </div>
            <div>
              <h3 className="text-sm text-gray-900 font-medium">Color</h3>

              <RadioGroup
                value={selectedColor}
                onChange={setSelectedColor}
                className="mt-4"
              >
                <RadioGroup.Label className="sr-only">
                  Choose a color
                </RadioGroup.Label>
                <div className="flex items-center space-x-3">
                  {SingleProduct.attributes.color.map((color) => (
                    <RadioGroup.Option
                      key={color.color}
                      value={color}
                      className={({ active, checked }) =>
                        classNames(
                          `ring-${color.color}-600`,
                          active && checked ? "ring ring-offset-1" : "",
                          !active && checked ? "ring-2" : "",
                          "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                        )
                      }
                    >
                      
                      <RadioGroup.Label as="span" className="sr-only">
                        {color.color}
                        {console.log("as", color)}
                      </RadioGroup.Label>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          `bg-${color.color}-600`,
                          "h-8 w-8 border border-black border-opacity-10 rounded-full"
                        )}
                      />
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Size guide
                </a>
              </div>

              <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className="mt-4"
              >
                <RadioGroup.Label className="sr-only">
                  Choose a size
                </RadioGroup.Label>
                <div className="grid grid-cols-4 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-2">
                  {SingleProduct.attributes.size.map((size) => (
                    <RadioGroup.Option
                      key={size.size}
                      value={size}
                      // disabled={!size.inStock}
                      className={({ active }) =>
                        classNames(
                          // size.inStock
                          //   ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                          //   : "bg-gray-50 text-gray-200 cursor-not-allowed",
                          active ? "ring-2 ring-indigo-500" : "",
                          "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as="span">
                            {size.size}
                          </RadioGroup.Label>
                          {/* {size.inStock ? (
                            <span
                              className={classNames(
                                active ? "border" : "border-2",
                                checked
                                  ? "border-indigo-500"
                                  : "border-transparent",
                                "absolute -inset-px rounded-md pointer-events-none"
                              )}
                              aria-hidden="true"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                            >
                              <svg
                                className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1={0}
                                  y1={100}
                                  x2={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )} */}
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <button
              type="submit"
              onClick={addToCart}
              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {console.log("card is ", items.Card)}
              Add to bag
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const data = await fetch(
    `http://localhost:1337/api/products?filters[slug]=${context.query.Slug}&populate=*`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 8495d5bf31d26acca675cc94e4d32c4ca4614849b9f53b6ff3d6d6f1ca8f2f92193f298097dc7a37baa11a05b780c643c5260b33bd59a7cc873b015045770a647e3687099da4e8baa35213fc96751b7f32dc47f5da5fbab31e664b0586f0e9d67d708b3ef891e21130e888110f5c8ed5c18c5e6ed6274eb40dcd71197501628e",
      },
    }
  );
  const SingleProduct = await data.json();
  console.log("single : ", SingleProduct);
  return {
    props: { SingleProduct: SingleProduct.data[0] },
  };
}
export default Slug;











