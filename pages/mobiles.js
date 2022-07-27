import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getProducts } from "../ApiCalls/products";
import Product from "../models/Product";
import mongoose from "mongoose";
const Mobiles = ({ products }) => {
  // const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   getProducts()
  //     .then((res) => {
  //       setLoading(true);
  //       setData(res);
  //     })
  //     .finally((res) => setLoading(false));
  // }, []);
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto border-gray-300 border-b-2">
          <div className="flex flex-wrap m-4 justify-center align-middle">
            {loading ? (
              <div>loading</div>
            ) : Object.keys(products).length == 0 ? (
              <p>All Mobiles are currently out of stock</p>
            ) : (
              Object.keys(products).map((item) => {
                return (
                  <Link
                    passHref={true}
                    key={item._id}
                    href={`/products/${products[item].slug}`}
                  >
                    <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-md m-4">
                      <a className="block relative rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="m-auto h-[30vh] md:h-[36vh] block"
                          src={products[item].img}
                        />
                      </a>
                      <div className="mt-4 text-center ">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          T Shirts
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {products[item].title}
                        </h2>
                        <p className="mt-1">Rs {products[item].price}</p>
                        <p className="flex mt-1 space-x-1 ">
                          {products[item].size.map((e, i) => {
                            return (
                              <div
                                key={i}
                                className={`p-1 ${
                                  e.length == 1 ? "ml-2" : "ml-1"
                                }`}
                              >
                                {e + " "}
                              </div>
                            );
                          })}
                        </p>
                        <div className="flex space-x-1">
                          {products[item].color.map((e, i) => {
                            return (
                              <button
                                key={i}
                                style={{
                                  borderWidth: 1,
                                  borderColor: "#d1d5db",
                                  backgroundColor: e,
                                  borderRadius: 100,
                                  width: 24,
                                  height: 24,
                                }}
                              ></button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "mobiles" });
  let mobiles = {};
  for (let item of products) {
    if (item.title in mobiles) {
      if (
        !mobiles[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        mobiles[item.title].color.push(item.color);
      }
      if (
        !mobiles[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        mobiles[item.title].size.push(item.size);
      }
    } else {
      mobiles[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        mobiles[item.title].color = [item.color];
        mobiles[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(mobiles)) },
  }; // will be passed to the page component as props
}
export default Mobiles;
