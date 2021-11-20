import DefaultFooter from "../component/DefaultFooter";
import DefaultNavbar from "../component/DefaultNavbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import moment from "moment";

function DetailGallery() {
  const [detail, setDetail] = useState([]);
  const params = useParams();
  console.log(detail);

  useEffect(() => {
    axios
      .get(`https://creaveid-api.herokuapp.com/api/admin/gallery/${params.id}`)
      .then((response) => {
        setDetail(response.data.gallery);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <DefaultNavbar />
      <div className="bg-gray-100 min-h-screen">
        <>
          <div>
            <p className="text-center text-4xl font-bold pt-20 pb-5">
              {detail.title}
            </p>
          </div>
          <div>
            <p className="text-center text-xl pb-10 ">
              {moment(detail.date).format("dddd, D MMMM YYYY")}
            </p>
          </div>
          <div className=" flex justify-center">
            <img src={detail.imageCover?.url} />
          </div>
          <div>
            <p className="text-justify mx-64 text-xl py-10 ">
              {detail.description}
            </p>
          </div>
        </>
      </div>
      <DefaultFooter />
    </>
  );
}

export default DetailGallery;
