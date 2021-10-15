import React from "react";
import Image from "@material-tailwind/react/Image";

export default function Greatings() {
  return (
    <div>
      <div className="grid grid-cols-2 bg-grey-800 grid-row-2 items-center mx-96 mt-10">
        <div className=" justify-self-center">
          <Image
            src="assets/img/wedding_vector 1.svg"
            rounded={false}
            raised={false}
            alt="Image"
          />
        </div>
        <div className="grid grid-rows-2 ">
          <div className="flex items-center text-xl text-black">
            <p>Selamat Datang Di</p>
          </div>
          <div className="flex items-center text-4xl text-black font-bold">
            <p>Creave.id untuk acara yang mengensankan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
