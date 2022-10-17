import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="px-8 mx-auto">
      <section className="text-gray-600 body-font">
        <div className=" py-12 mx-auto" bis_skin_checked="1">
          <div className="flex flex-wrap -m-4" bis_skin_checked="1">
            {products.data.map((item, id) => {
              return (
                <>
                  {console.log(item.id)}

                  <Product
                    key={item.id}
                    image={
                      item.attributes.image.data &&
                      item.attributes.image.data.attributes.name
                    }
                    category={item.attributes.category}
                    item={item.attributes.title}
                    price={item.attributes.price}
                    size={item.attributes.size.map(size => size.size)}
                    redirect={`/products/${item.attributes.slug}`}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  const data = await fetch("http://localhost:1337/api/products?populate=*", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 8495d5bf31d26acca675cc94e4d32c4ca4614849b9f53b6ff3d6d6f1ca8f2f92193f298097dc7a37baa11a05b780c643c5260b33bd59a7cc873b015045770a647e3687099da4e8baa35213fc96751b7f32dc47f5da5fbab31e664b0586f0e9d67d708b3ef891e21130e888110f5c8ed5c18c5e6ed6274eb40dcd71197501628e",
    },
  });
  const products = await data.json();
  console.log(products);
  return {
    props: { products },
  };
}

export default Products;
