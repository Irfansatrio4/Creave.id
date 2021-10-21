import React from "react";
import DefaultFooter from "../component/DefaultFooter";
import DefaultNavbar from "../component/DefaultNavbar";
import detail from "../component/img/Rectangle 131.png";
import icon from "../component/img/Rectangle 119.png";

function detailGallery() {
  return (
    <>
      <DefaultNavbar />
      <div className="bg-gray-100 min-h-screen">
        <div>
          <p className="text-center text-4xl font-bold pt-20 pb-5">
            Birthday party satria
          </p>
        </div>
        <div>
          <p className="text-center text-xl pb-10 ">11 Oktober 2021</p>
        </div>
        <div className=" flex justify-center">
          <img src={detail} />
        </div>
        <div>
          <p className="text-justify mx-64 text-xl py-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta
            malesuada neque, vitae rhoncus turpis sodales sed. Nam vitae augue
            pulvinar, condimentum diam eu, gravida felis. Morbi ipsum leo,
            rutrum ac rhoncus et, gravida vel erat. Fusce sed sem ut leo
            ultricies euismod. Morbi vitae nibh dolor. Etiam tincidunt finibus
            risus eu egestas. Aenean ultricies lectus vel metus bibendum
            iaculis. Maecenas tincidunt eros sem, ut ultricies purus ornare at.
            Etiam nec magna pellentesque, hendrerit orci vel, vehicula tellus.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Integer malesuada odio ut velit rhoncus, eu
            condimentum erat imperdiet. Aenean eget diam ex. Phasellus lacus
            tellus, varius a accumsan et, ultricies id sem. Nulla facilisi.
            Fusce congue quis nunc at fringilla. Nunc fermentum, leo et pharetra
            feugiat, neque neque gravida orci, ac iaculis nisl orci in mi. Donec
            molestie tincidunt urna. Maecenas sit amet augue mattis nisl
            ullamcorper pellentesque. Aenean mi sem, bibendum quis est quis,
            dictum eleifend metus. Nullam non orci id dui molestie auctor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Aenean quis diam in nibh ornare finibus
            volutpat pretium metus. Aliquam erat volutpat. Nunc mollis feugiat
            urna, eu venenatis turpis vehicula in. Fusce aliquet odio nisi, sed
            sollicitudin dui suscipit a. Fusce molestie leo id lacinia
            imperdiet. Quisque enim tellus, porta eget maximus vitae, fermentum
            id lorem. Vestibulum venenatis felis sed enim consequat, id feugiat
            lectus viverra.
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
      </div>
      <DefaultFooter />
    </>
  );
}

export default detailGallery;
