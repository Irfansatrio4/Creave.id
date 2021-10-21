import React from "react";
import Image from "@material-tailwind/react/Image";


export default function Greatings() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto grid grid-cols-2  grid-row-2 items-center pt-10">
        <div className=" justify-self-center">
          <Image
            src="assets/img/wedding_vector 1.svg"
            rounded={false}
            raised={false}
            alt="Image"
          />
        </div>
        <div className="grid grid-rows-2 w-2/3">
          <div className="flex items-center text-xl text-black">
            <p>Selamat Datang Di</p>
          </div>
          <div className="flex items-center text-4xl text-black font-bold">
            <p>Creave.id untuk acara yang mengesankan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
