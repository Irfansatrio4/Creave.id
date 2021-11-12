import React from "react";
import user from "../component/img/user.png";

function EditProfile() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="w-9/12 mx-auto bg-white grid grid-cols-4 shadow-md p-5">
        <div className="w-2/3 ">
          <img src={user} alt="fotomember" className="h-full" />
        </div>
        <div className=" grid grid-rows-3 items-center col-span-2">
          <div className="flex  text-4xl text-black font-bold ">
            <p> Full Name </p>
          </div>
          <div className="flex text-justify text-black ">
            <p>username</p>
          </div>
          <div className="flex gap-5 bg-blue-200 rounded-lg mr-10">
            <div>
              <p>081290880571</p>
            </div>
            <div>
              <p>SinaMustopa@gmail.com</p>
            </div>
            <div>
              <p>Perum Indogreen Blok E5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;