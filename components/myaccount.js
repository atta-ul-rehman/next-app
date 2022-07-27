import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { handleLogOut } from "../ApiCalls/auth";
import { useDispatch } from "react-redux";
import {
  AiOutlineProfile,
  AiOutlineInfoCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { removeUser } from "../store/usersSlice";
import Router, { useRouter } from "next/router";
const Myaccount = ({ AccClick, ref, setModal, toggleAcc }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const users = useSelector((state) => state.user.users);
  return (
    <div
      ref={ref}
      className="absolute justify-center items-center bg-white w-40 right-8 top-10  z-40 border rounded-lg shadow-lg "
    >
      <a onMouseLeave={toggleAcc}>
        <div className="flex space-x-2 p-2 items-center hover:bg-zinc-100">
          <AiOutlineUser className="md:text-lg text-md" />
          <button
            className="md:p-2 font-mono font-semibold text-lg"
            onClick={AccClick}
          >
            {users.length > 0 ? users[0].name : "MyAccount"}
          </button>
        </div>
        <div className="border-t border-zinc-300 ">
          <div className="flex space-x-2 p-2 items-center hover:bg-zinc-100 cursor-pointer">
            <AiOutlineProfile className="md:text-lg text-md " />
            <button
              className="font-mono font-medium text-lg "
              onClick={AccClick}
            >
              Profile
            </button>
          </div>
          <div className="flex space-x-2 p-2 items-center hover:bg-zinc-100 cursor-pointer">
            <AiOutlineInfoCircle className="md:text-lg text-md" />
            <button
              className="font-mono font-medium text-lg"
              onClick={() => {
                router.push("/myorders");
                toggleAcc;
              }}
            >
              Orders
            </button>
          </div>
          <div className="flex p-2 justify-around border-t border-zinc-100 items-center hover:bg-zinc-100 cursor-pointer">
            <p
              style={{
                padding: 5,
                backgroundColor: users.length ? "green" : "red",
                borderRadius: 100,

                shadowColor: "black",
                shadowOffset: {
                  width: 10,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,

                elevation: 24,
              }}
            ></p>
            <Link href={"/login"}>
              <button
                className="text-lg font-mono font-medium"
                onClick={() => {
                  handleLogOut();
                  dispatch(removeUser);
                  setModal(false);
                  router.reload();
                }}
              >
                {users.length > 0 ? "LogOut" : "LogIn"}
              </button>
            </Link>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Myaccount;
