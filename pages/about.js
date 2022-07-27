import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addUser } from "../store/usersSlice";
const About = ({ cart }) => {
  const [user, setUser] = useState([cart]);
  // const dispatch = useDispatch();
  const setUsers = () => {
    console.log("cart is", Object.keys(cart).length);
  };
  return (
    <div className="container py-4 px-4">
      About
      <button
        onClick={setUsers}
        className="py-2 px-2 text-center bg-red-700 hover:bg-white hover:border-red-700 hover:border-2 rounded cursor-pointer"
      >
        getData
      </button>
    </div>
  );
};
export default About;
