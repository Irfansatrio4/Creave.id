import React from "react";

function EditProfile() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="w-9/12 mx-auto bg-white grid grid-cols-2 shadow-md p-5">
        <div className="w-4/12 ">gambar</div>
        <div className="grid grid-rows-3 items-center">
          <div className="flex  text-4xl text-black font-bold">
            <p> Full Name </p>
          </div>
          <div className="flex text-justify text-black">
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
