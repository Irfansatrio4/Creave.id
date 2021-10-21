import React from "react";
import icon from "../img/Rectangle 119.png";
import { Link } from "react-router-dom";

export default function ListGallery() {
  return (
    <div className="bg-gray-100">
      <div className="text-center text-4xl text-black font-bold pb-20 pt-24">
        <p> Gallery Creave.id</p>
      </div>

      <div className="mx-64 grid grid-cols-3 gap-10 justify-items-center pb-32">
      <Link to="/DetailGallery">
        <div>
          <img
            src={icon}
            alt="fotomember"
            className="mx-auto border-8 border-white"
          />
          <p className="text-center pt-5 font-bold text-blue-500 text-2xl">
            Birthday Party Satria
          </p>
          <p className="text-center pt-2 font-bold text-gray-500 text-xl">
            11 Oktober 2021
          </p>
        </div>
        </Link>
        {/* <div>
          <img
            src={icon}
            alt="fotomember"
            className="mx-auto border-8 border-white"
          />
          <p className="text-center pt-5 font-bold text-blue-500 text-2xl">
            Birthday Party Satria
          </p>
          <p className="text-center pt-2 font-bold text-gray-500 text-xl">
            11 Oktober 2021
          </p>
        </div>
        <div>
          <img
            src={icon}
            alt="fotomember"
            className="mx-auto border-8 border-white"
          />
          <p className="text-center pt-5 font-bold text-blue-500 text-2xl">
            Birthday Party Satria
          </p>
          <p className="text-center pt-2 font-bold text-gray-500 text-xl">
            11 Oktober 2021
          </p>
        </div>
        <div>
          <img
            src={icon}
            alt="fotomember"
            className="mx-auto border-8 border-white"
          />
          <p className="text-center pt-5 font-bold text-blue-500 text-2xl">
            Birthday Party Satria
          </p>
          <p className="text-center pt-2 font-bold text-gray-500 text-xl">
            11 Oktober 2021
          </p>
        </div>
        <div>
          <img
            src={icon}
            alt="fotomember"
            className="mx-auto border-8 border-white"
          />
          <p className="text-center pt-5 font-bold text-blue-500 text-2xl">
            Birthday Party Satria
          </p>
          <p className="text-center pt-2 font-bold text-gray-500 text-xl">
            11 Oktober 2021
          </p>
        </div>
        <div>
          <img
            src={icon}
            alt="fotomember"
            className="mx-auto border-8 border-white"
          />
          <p className="text-center pt-5 font-bold text-blue-500 text-2xl">
            Birthday Party Satria
          </p>
          <p className="text-center pt-2 font-bold text-gray-500 text-xl">
            11 Oktober 2021
          </p>
        </div> */}
      </div>
    </div>
  );
}
