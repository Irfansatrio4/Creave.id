import React from "react";
import HeaderNav from "../component/Login/HeaderNav";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import swal from "sweetalert";

function Register() {
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const handleRegis = (data) => {
    console.log(data);
    axios
      .post("https://creaveid-api.herokuapp.com/api/user/register", data)
      .then(() => {
        swal({
          title: "Register Berhasil",
          text: "Harap login untuk mulai menggunakan aplikasi creave.id",
          icon: "success",
        });
        // console.log(response)
        history.push("/login");
      })
      .catch((error) => {
        swal({
          title: "Harap isi semua data",
          text: "Beberapa data belum diinputkan !",
          icon: "error",
          button: "Ok !",
        });
        console.log(error);
      });
  };

  return (
    <div>
      <HeaderNav />
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
                name="fullname"
                {...register("fullname", { required: true })}
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
                name="phone_number"
                {...register("phone_number", { required: true })}
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
                {...register("email", { required: true })}
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
                {...register("username", { required: true })}
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
                {...register("password", { required: true })}
              />
            </div>
            <div>
              <button
                className="w-full py-2 px-4 bg-yellow-500 hover:shadow-md rounded-md text-white text-small"
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
    </div>
  );
}

export default Register;
