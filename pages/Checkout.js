import React from "react";

import Link from "next/link";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
const Checkout = ({ cart, addtocart, removeFromCart, clearCart, subTotal }) => {
  return (
    <div className="container m-auto w-4/5">
      <h1 className="font-bold text-3xl my-5 text-center">Checkout</h1>
      <h2 className="font-bold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="px-2 w-full">
        <div className="mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Addreas
          </label>
          <textarea
            name="address"
            id="addreas"
            cols="30"
            rows="2"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              Pincode
            </label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      {Object.keys(cart).length !== 0 && (
        <div>
          <h2 className="font-bold text-10x1">2. Review Cart Items</h2>
          <div className="px-3 mx-2 my-1">
            <ul className="font-bold ml-2">
              <li className="mx-4">
                <div className="flex my-2 justify-between">
                  <p>Item</p>
                  <p>size</p>
                  <div className="flex font-bold items-center justify-center w-64">
                    <p>Qty</p>
                  </div>
                  <p>Price/Unit</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
      {Object.keys(cart).length == 0 ? (
        <>
          <div className="flex mt-4 font-semibold mx-1 md:text-xl text-lg justify-center items-center">
            Your cart is Empty!
          </div>
        </>
      ) : (
        <div className="sidebar px-3 mx-2 my-1 border-y-2 border-indigo-2 00">
          <ol className="list-decimal font-semibold ml-2">
            {Object.keys(cart).map((item) => {
              return (
                <li key={item} className="mx-4">
                  <div className="item flex my-2 justify-between">
                    <div className="font-semibold">{cart[item].name}</div>
                    <div className="font-light">{cart[item].size}</div>
                    <div className="flex font-semibold items-center justify-center w-1/3">
                      <AiFillMinusSquare
                        onClick={() => {
                          removeFromCart(
                            item,
                            1,
                            cart[item].price,
                            cart[item].name,
                            cart[item].variant
                          );
                        }}
                        className="cursor-pointer text-indigo-500 md:text-5xl text-2xl"
                      />
                      <span className="mx-2 text-sm">{cart[item].qty}</span>
                      <AiFillPlusSquare
                        onClick={() => {
                          addtocart(
                            item,
                            1,
                            cart[item].price,
                            cart[item].name,
                            cart[item].variant
                          );
                        }}
                        className="cursor-pointer text-gray-500 md:text-5xl text-2xl"
                      />
                    </div>
                    <div className="font-light">Rs {cart[item].price}</div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      )}
      {Object.keys(cart).length !== 0 && (
        <div>
          <div className="flex mx-2 justify-between py-1">
            <p className="font-bold">SubTotal:</p>
            <p className="font-medium mr-7">Rs {subTotal}</p>
          </div>
          <Link href={"/Checkout"}>
            <button
              disabled={true}
              className="flex text-white mt-4 cursor-pointer bg-indigo-500 border-0 md:py-3 md:px-7 ml-2 py-2 px-5 md:text-lg text-sm focus:outline-none hover:bg-indigo-800 transition-colors duration-300 rounded disabled:opacity-50 disabled:cursor-not-allowed "
            >
              Proceed To Pay
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
