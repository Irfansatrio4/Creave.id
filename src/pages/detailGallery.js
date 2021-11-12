import DefaultFooter from "../component/DefaultFooter";
import DefaultNavbar from "../component/DefaultNavbar";
import detail from "../component/img/Rectangle 131.png";
import icon from "../component/img/Rectangle 119.png";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";

function DetailGallery() {
  // const [list, setList] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api/admin/gallery/${id}`)
  //     .then((response) => {
  //       setList(response.data.response);
  //       console.log(list);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  return (
    <>
      <DefaultNavbar />
      <div className="bg-gray-100 min-h-screen">
        {/* {list.map((galeri) => ( */}
        <>
          <div>
            <p className="text-center text-4xl font-bold pt-20 pb-5">
              {/* {galeri.title} */}
              ini judul
            </p>
          </div>
          <div>
            <p className="text-center text-xl pb-10 ">date</p>
          </div>
          <div className=" flex justify-center">
            <img src={detail} />
          </div>
          <div>
            <p className="text-justify mx-64 text-xl py-10 ">
              {/* {galeri.description} */}
              blablablabalbalba
            </p>
          </div>
          <div>
            <p className="text-center text-4xl font-bold py-10 ">
              Gallery Event
            </p>
          </div>
          <div className="flex justify-evenly gap-5 mx-64 pt-5 pb-20">
            <div>
              <img
                src={icon}
                alt="fotomember"
                className="mx-auto border-8 border-white"
              />
            </div>
            <div>
              <img
                src={icon}
                alt="fotomember"
                className="mx-auto border-8 border-white"
              />
            </div>
            <div>
              <img
                src={icon}
                alt="fotomember"
                className="mx-auto border-8 border-white"
              />
            </div>
          </div>
        </>
        {/* ))} */}
      </div>
      <DefaultFooter />
    </>
  );
}

export default DetailGallery;
