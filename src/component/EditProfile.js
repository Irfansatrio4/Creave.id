import React from "react";
import user from "../component/img/user.png";
import Cookies from "js-cookie";

function EditProfile() {
  const getData = Cookies.get("fullname");
  const getNumber = Cookies.get("phone_number");
  const getEmail = Cookies.get("email");

  return (
    <div className="bg-gray-100 py-20">
      <div className="w-9/12 mx-auto bg-white grid grid-cols-4 shadow-md p-5">
        <div className="w-2/3 ">
          <img src={user} alt="fotomember" className="h-full" />
        </div>
        <div className=" grid grid-rows-3 items-center col-span-2">
          <div className="flex  text-4xl text-black font-bold ">
            <p>{getData}</p>
          </div>
          <div className="flex gap-5 bg-blue-200 rounded-lg mr-52">
            <div className="pl-10">
              <p> {getNumber} </p>
            </div>
            <div>
              <p>{getEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
