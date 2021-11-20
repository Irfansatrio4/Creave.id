import React, { useState, useEffect } from "react";
import icon from "../img/Rectangle 119.png";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export default function ListGallery() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://creaveid-api.herokuapp.com/api/admin/gallery")
      .then((response) => {
        setList(response.data.response);
        console.log(list);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="bg-gray-100">
      <div className="text-center text-4xl text-black font-bold pb-20 pt-24">
        <p> Gallery Creave.id</p>
      </div>
      <div className="mx-64 grid grid-cols-3 gap-10 justify-items-center pb-32">
        {list.map((galeri) => {
          return (
            <Link to={`/detailgallery/${galeri._id}`}>
              <div>
                <div key={galeri._id}></div>
                <img
                  src={galeri.imageCover?.url}
                  className="mx-auto border-8 border-white"
                />
                <p className="text-center pt-5 font-bold text-blue-500 text-2xl">
                  {galeri.title}
                </p>
                <p className="text-center pt-2 font-bold text-gray-500 text-xl">
                  {moment(galeri.date).format("dddd, D MMMM YYYY")}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
