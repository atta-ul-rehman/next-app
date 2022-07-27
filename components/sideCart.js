import React from "react";
import Link from "next/link";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiFillDelete,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Image from "next/image";
const SideCart = ({ cart, addtocart, removeFromCart, clearCart, subTotal }) => {
  console.log("Cart is", cart);
  const ref = React.useRef(null);
  return (
    <div className="flex-1 border border-black">
      <div
        ref={ref}
        className={`w-72 h-screen sidebar absolute top-0 right-0  px-3 py-10 transform bg-indigo-100`}
      >
        <span className="absolute top-5 right-2 cursor-pointer text-2xl text-indigo-500">
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold ml-1">
          <>
            <div className="flex justify-center align-center">
              <Image
                src="/EmptyCart.png"
                alt=""
                height={150}
                width={150}
                objectFit="cover"
              />
            </div>
            <div className="flex my-4 font-semibold mx-1 md:text-xl text-lg justify-center items-center">
              Your cart is Empty!
            </div>
            <div className="flex md:text-md text-lg justify-center items-center text-gray-400">
              Looks Like you havent made
            </div>
            <div className="flex md:text-md text-lg justify-center items-center text-gray-400">
              Any Choice Yet!
            </div>
          </>

          <ul className="ml-1">
            <div className="item flex my-2">
              <div className="w-2/3 font-semibold"></div>
            </div>
          </ul>
        </ol>
      </div>
    </div>
  );
};

export default SideCart;
