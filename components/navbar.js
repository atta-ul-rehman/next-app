import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiFillDelete,
  AiFillCaretDown,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BsFillBagCheckFill, BsFillBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import Myaccount from "./myaccount";
import { useRouter } from "next/router";
const Navbar = ({ cart, addtocart, removeFromCart, clearCart, subTotal }) => {
  const user = useSelector((state) => state.user.users);
  const router = useRouter();
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const [modal, setModal] = useState(false);
  const toggleCart = () => {
    if (ref1.current.classList.contains("translate-x-full")) {
      ref1.current.classList.remove("translate-x-full");
      ref1.current.classList.add("translate-x-0");
    } else if (!ref1.current.classList.contains("translate-x-full")) {
      ref1.current.classList.remove("translate-x-0");
      ref1.current.classList.add("translate-x-full");
    }
  };
  const toggleAcc = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between mb-1 px-3 py-2.5 shadow-md sticky top-0 bg-white z-30">
        <div className="self-start">
          <p className="font-mono font-bold text-xl text-indigo-900">
            <Link href="/" className="cursor-pointer">
              CodeCommerce
            </Link>
          </p>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-6 font-bold md:text-md">
            <Link href={"/tshirts"}>
              <a className="hover:border-b-2 border-violet-600 focus:border-b-2">
                <li>Tshirts</li>
              </a>
            </Link>
            <Link href={"/contact"}>
              <a className="hover:border-b-2 border-violet-600 focus:border-b-2">
                <li>Mugs</li>
              </a>
            </Link>
            <Link href={"/hoddies"}>
              <a className="hover:border-b-2 border-violet-600 focus:border-b-2">
                <li>Hoddies</li>
              </a>
            </Link>
            <Link href={"/mobiles"}>
              <a className="hover:border-b-2 border-violet-600 focus:border-b-2">
                <li>Mobiles</li>
              </a>
            </Link>
          </ul>
        </div>
        <div></div>

        <div className="cart flex flex-row absolute right-1 top-1">
          {user.length <= 0 ? (
            <div className="flex space-x-2 my-2 md:my-0">
              <div
                onClick={() => router.replace("/signup")}
                className="md:py-1.5 md:px-2 px-1 text-sm md:text-base cursor-pointer border border-zinc-300 bg-zinc-50 hover:bg-indigo-500 hover:text-white hover:border-0"
              >
                SignUp
              </div>
              <div
                onClick={() => router.replace("/login")}
                className="md:py-1.5 md:px-2 px-1 text-sm md:text-base cursor-pointer font-semibold hover:text-indigo-500"
              >
                Login
              </div>
            </div>
          ) : (
            <a
              onMouseEnter={toggleAcc}
              className="flex flex-row items-center justify-center mt-2 cursor-pointer"
            >
              <Image
                src={user[0].image}
                alt="userDp"
                height={26}
                width={26}
                objectFit="cover"
                className="rounded-100 mt-2"
              />
              <AiFillCaretDown className="md:text-sm text-xs" />
            </a>
          )}

          <AiOutlineShoppingCart
            className="text-2xl cursor-pointer ml-2 mt-2"
            onClick={toggleCart}
          />
        </div>
        <div
          ref={ref1}
          className={`md:w-3/12 w-72 h-screen ${
            Object.keys(cart).length == 0 > 4 && "overflow-y-scroll"
          } sidebar absolute top-0 right-0 bg-white border-zinc-400 border transform transition-transform duration-500 ${
            Object.keys(cart).length === 0
              ? "translate-x-0 "
              : "translate-x-full"
          }'}>`}
        >
          <div className="absolute top-7 left-8 text-white text-sm">
            {Object.keys(cart).length}
          </div>
          <div className="flex cursor-pointer text-2xl p-5 justify-between border border-gray-300 items-center">
            <div className="flex space-x-3 items-center">
              <BsFillBagFill className="text-3xl" />
              <h2 className="font-medium text-lg text-center">Cart</h2>
            </div>
            <span className="" onClick={toggleCart}>
              <AiFillCloseCircle />
            </span>
          </div>
          <ol className="list-decimal font-semibold">
            {Object.keys(cart).length == 0 && (
              <>
                <div className="flex justify-center align-center mt-2">
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
                  Looks Like you haven't made
                </div>
                <div className="flex md:text-md text-lg justify-center items-center text-gray-400">
                  Any Choice Yet!
                </div>
              </>
            )}
            {Object.keys(cart).map((item) => {
              return (
                <ul className="" key={item}>
                  <div className="item flex py-2 justify-between items-center bg-zinc-100 border-b border-gray-400 ">
                    <img
                      src={cart[item].img}
                      alt=""
                      className="md:m-2 m-1 md:h-15 md:w-14 w-16 h-17 border border-gray-300 mr-1"
                    />
                    <div className="flex md:w-44 flex-col w-40">
                      <div className="md:text-base text-sm font-semibold">
                        {cart[item].name}( {cart[item].size}/
                        {cart[item].variant})
                      </div>
                      <div className="font-semibold text-indigo-500">
                        Rs {cart[item].price}
                      </div>
                    </div>

                    <div className="flex flex-col font-semibold items-center justify-center mr-1">
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            item,
                            1,
                            cart[item].price,
                            cart[item].name,
                            cart[item].variant
                          );
                        }}
                        className="cursor-pointer text-indigo-500 md:text-xl"
                      />
                      <span className="mx-2 text-md">{cart[item].qty}</span>
                      <AiFillPlusCircle
                        onClick={() => {
                          addtocart(
                            item,
                            1,
                            cart[item].price,
                            cart[item].name,
                            cart[item].size,
                            cart[item].variant,
                            cart[item].img
                          );
                        }}
                        className="cursor-pointer text-indigo-500 md:text-xl"
                      />
                    </div>
                  </div>
                </ul>
              );
            })}
          </ol>

          {Object.keys(cart).length !== 0 && (
            <div className="w-full items-center">
              <div className="flex p-3 w-full justify-between items-center">
                <span className="text-lg text-gray-400 font-thin">
                  Sub-Total
                </span>
                <span className="text-md font-medium ">Rs {subTotal}</span>
              </div>
              <div className="bg-zinc-100 py-4">
                <Link href={"/Checkout"}>
                  <button className="flex mb-2 text-white cursor-pointer self-center bg-indigo-500 border-0 md:py-2 w-4/5 ml-8 py-1.5 text-md justify-center items-center focus:outline-none hover:bg-indigo-800 transition-colors duration-300 rounded-xl">
                    <BsFillBagCheckFill className="m-1 text-sm" />
                    CheckOut
                  </button>
                </Link>
                <button
                  onClick={clearCart}
                  className="flex text-white bg-indigo-500 border-0 md:py-2 w-4/5 ml-8 py-1.5 text-md focus:outline-none hover:bg-indigo-800 transition-colors duration-300 rounded-xl justify-center items-start"
                >
                  <AiFillDelete className="m-1 text-md" />
                  ClearCart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {modal && <Myaccount setModal={setModal} toggleAcc={toggleAcc} />}
    </>
  );
};

export default Navbar;
