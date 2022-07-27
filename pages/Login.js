import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { handleLogin } from "../ApiCalls/auth";
import { useSession, signOut, signIn } from "next-auth/react";
const Login = () => {
  const router = useRouter();
  const { data: session } = useSession("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "pass") {
      setPass(e.target.value);
    }
  };
  useEffect(() => {
    if (session) {
      toast.success("Google Logined Succesfully");
      router.replace("/");
    }
  }, [session]);
  const handleSubmit = async () => {
    const res = await handleLogin({ email, pass });
    console.log(res.success);
    if (res.success) {
      toast.success("Logined Succesfully");
      router.replace("/");
    } else {
      toast.error(res.msg);
    }
  };

  return (
    <section className="bg-indigo-50">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <div className="w-full lg:w-4/12 px-4 mx-auto py-10">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-indigo-200 border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-indigo-500 text-sm font-bold">
                Sign in with
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
                onClick={() => signIn()}
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

            <hr className="mt-4 border-b-1 border-indigo-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-center mb-3 font-bold underline underline-offset-4 cursor-pointer">
              <Link href={"/signup"}>
                <small>Sign Up Now</small>
              </Link>
            </div>
            <form>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-indigo-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
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
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  name="pass"
                  type="password"
                  className="border-0 px-3 py-3 placeholder-indigo-300 text-indigo-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <div>
                <label className="flex items-center cursor-pointer justify-between">
                  <div className="flex justify-center items-center">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-indigo-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-indigo-600">
                      Remember me
                    </span>
                  </div>
                  <div>
                    <Link href={"/forgetpass"}>
                      <span className="ml-2 text-xs font-semibold">
                        Forget Password!
                      </span>
                    </Link>
                  </div>
                </label>
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={handleSubmit}
                  className="bg-indigo-800 text-white active:bg-indigo-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                >
                  {" "}
                  Sign In{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
