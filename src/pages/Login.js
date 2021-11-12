import React from "react";
import HeaderNav from "../component/Login/HeaderNav";
import Image from "@material-tailwind/react/Image";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
    // console.log(data);
    axios
      .post("https://creaveid-api.herokuapp.com/api/user/login", data)
      .then((response) => {
        Cookies.set("fullname", response.data.others.fullname);
        Cookies.set("phone_number", response.data.others.phone_number);
        Cookies.set("token", response.data.accessToken);
        history.push("/");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <HeaderNav />
      <div className="bg-gray-100 max-h-screen">
        <div className="py-10 flex flex-col justify-center">
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
            <form
              action=""
              className="space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
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
                  name="username"
                  {...register("username")}
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
                  name="password"
                  {...register("password")}
                />
              </div>
              <div>
                <button
                  className="w-full py-2 px-4 bg-yellow-500 hover:shadow-md rounded-md text-white text-small"
                  type="submit"
                >
                  Masuk
                </button>
              </div>
              <div className="py-2 px-4 text-md text-black text-center">
                <a href="/Regis"> Belum punya akun ? </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
