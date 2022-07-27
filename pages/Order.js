import React from "react";

const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pt-8 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Thanks For Ordering
              </h2>
              <h1 className="text-gray-900 text-xl title-font font-medium mb-2">
                Order Tracking Id #122333
              </h1>
              <p className="text-sm">Your Order had been Placed Successfuly!</p>
              <div className="flex justify-between border-b-2">
                <a className=" py-2 text-lg font-semibold"></a>
                <a className=" py-2 text-lg font-semibold">Description</a>
                <a className=" py-2 text-lg mr-8 font-semibold">Size</a>
                <a className=" py-2 text-lg font-semibold">Price</a>
              </div>

              <div className="flex border-b border-gray-200 py-2 justify-between">
                <img
                  src="https://dummyimage.com/400x400"
                  className="w-12 h-12 rounded-lg"
                />
                <span className="text-gray-500">Wear it</span>
                <span className=" text-gray-900">xL</span>
                <span className=" text-gray-900">Rs 499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2 justify-between">
                <img
                  src="https://dummyimage.com/400x400"
                  className="w-12 h-12 rounded-lg"
                />
                <span className="text-gray-500">T mshirt</span>
                <span className=" text-gray-900">L</span>
                <span className=" text-gray-900">Rs 599</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2 justify-between">
                <img
                  src="https://dummyimage.com/400x400"
                  className="w-12 h-12 rounded-lg"
                />
                <span className="text-gray-500">T mshirt</span>
                <span className=" text-gray-900">L</span>
                <span className=" text-gray-900">Rs 599</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="title-font font-medium text-xl text-gray-900">
                  SubTotal=Rs 58.00
                </span>
                <button className="flex md:w-1/3 w-1/2 md:text-lg text-md text-white justify-center align-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-96 w-0 lg:h-96 h-0 object-cover object-center rounded md:mt-14"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
