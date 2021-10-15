import React from "react";
import DefaultNavbar from "../component/DefaultNavbar";
import DefaultFooter from "../component/DefaultFooter";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function Register() {
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const handleRegis = (data) => {
    console.log(data);
    // axios
    //   .post(link, data)
    //   .then(() => {
    //     // console.log(response)
    //     history.push("/Landing");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <DefaultNavbar />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto"></div>
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <div className="text-center text-3xl font-bold mb-10"> Daftar </div>
          <form className="space-y-6" onSubmit={handleSubmit(handleRegis)}>
            <div>
              <label
                className="text-sm font-bold text-gray-600 block"
                htmlFor=""
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="nama"
                {...register("nama")}
              />
            </div>
            <div>
              <label
                className="text-sm font-bold text-gray-600 block"
                htmlFor=""
              >
                Nomor Telpon
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="phone"
                {...register("phone")}
              />
            </div>
            <div>
              <label
                className="text-sm font-bold text-gray-600 block"
                htmlFor=""
              >
                Email
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                nama="email"
                {...register("email")}
              />
            </div>
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
                className="w-full py-2 px-4 bg-yellow-500 hover:bg-blue-700 rounded-md text-white text-small"
                type="submit"
              >
                Mendaftar
              </button>
            </div>
            <div className="py-2 px-4 text-md text-black text-center">
              <a href="Login"> Sudah punya akun ? </a>
            </div>
          </form>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}

export default Register;
