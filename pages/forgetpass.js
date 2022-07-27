import React from "react";

const forgetpass = () => {
  return (
    <section className="bg-indigo-50">
      <div className="w-full lg:w-4/12 px-4 mx-auto py-10">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-indigo-200 border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-indigo-500 text-lg font-bold">
                Forgot Password
              </h6>
            </div>

            <hr className="mt-3 border-b-1 border-indigo-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <div className="relative w-full mb-1 ">
                <label
                  className="block uppercase text-indigo-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Enter Email
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-indigo-300 text-indigo-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>

              <div className="text-center mt-6">
                <button
                  className="bg-indigo-800 text-white active:bg-indigo-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                >
                  {" "}
                  Send Link{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forgetpass;
