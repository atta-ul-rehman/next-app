import React, { useState } from "react";
import { handleSignUp } from "../ApiCalls/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";
const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "pass") {
      setPass(e.target.value);
    }
  };

  const handleSubmit = async () => {
    const res = await handleSignUp({ name, email, pass });
    console.log(res);
    if (res.success) {
      toast.success("Your Account has been crated");
    } else {
      toast.error("Authentication Failed");
    }
  };

  return (
    <section className="bg-indigo-50">
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="w-full lg:w-4/12 px-4 mx-auto py-10">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-indigo-200 border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-indigo-500 text-sm font-bold">
                Continue With
              </h6>
            </div>
            <div className="btn-wrapper text-center">
              <button
                className="bg-white active:bg-indigo-500 text-indigo-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img
                  alt="..."
                  className="w-5 mr-1"
                  src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                />
                Github
              </button>
              <button
                className="bg-white active:bg-indigo-500 text-indigo-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img
                  alt="..."
                  className="w-5 mr-1"
                  src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                />
                Google{" "}
              </button>
            </div>
            <hr className="mt-3 border-b-1 border-indigo-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-center mb-1 font-bold  text-indigo-600 ">
              <small>Or Sign Up Now</small>
            </div>
            <form method="POST">
              <div className="relative w-full mb-1 ">
                <label
                  className="block uppercase text-indigo-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-indigo-300 text-indigo-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-indigo-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  className="border-0 px-3 py-3 placeholder-indigo-300 text-indigo-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-indigo-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Password
                </label>
                <input
                  name="pass"
                  onChange={handleChange}
                  type="password"
                  className="border-0 px-3 py-3 placeholder-indigo-300 text-indigo-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>

              <div className="text-center mt-6">
                <button
                  className="bg-indigo-800 text-white active:bg-indigo-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <Link href={"/login"}>
              <div className="cursor-pointer block uppercase underline text-indigo-600 text-md font-bold mb-2">
                Login now!
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
