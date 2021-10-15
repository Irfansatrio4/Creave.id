import React from "react";
import DefaultNavbar from "../component/DefaultNavbar";
import Image from "@material-tailwind/react/Image";
import DefaultFooter from "../component/DefaultFooter";


function Login() {
  return (
    <div>
      <DefaultNavbar />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto"></div>
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <div className="text-center font-medium text-xl"> Masuk </div>
          <div className=" flex justify-center mt-5 mb-5">
            <Image
              src="assets/img/Login 1.svg"
              rounded={false}
              raised={false}
              alt="Image"
              className="content-center"
            />
          </div>
          <form action="" className="space-y-6">
            <div>
              <label
                className="text-sm font-bold text-gray-600 block"
                htmlFor=""
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label
                className="text-sm font-bold text-gray-600 block"
                htmlFor=""
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <button className="w-full py-2 px-4 bg-yellow-500 hover:bg-blue-700 rounded-md text-white text-small">
                Masuk
              </button>
            </div>
            <div className="py-2 px-4 text-md text-black text-center" >
            <a href="/Regis">
              {" "}
              Belum punya akun ?{" "}
            </a>
            </div>
          </form>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}

export default Login;
