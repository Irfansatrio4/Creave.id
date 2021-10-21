import React from "react";
import DefaultFooter from "../component/DefaultFooter";
import DefaultNavbar from "../component/DefaultNavbar";
import dummyfoto from "../component/img/dummyfoto.png";

function Aboutus() {
  return (
    <div>
      <DefaultNavbar />
      <div className="min-h-screen bg-gray-100">
        <div className="container-xl mx-auto  text-center font-bold text-4xl bg-gray-100 pt-16">
          <p>Meet Us</p>
        </div>
        <div className="container-xl mx-auto w-9/12 text-justify text-xl bg-gray-100 mt-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            volutpat quam ac turpis lobortis, nec tempus eros accumsan. Mauris
            quis neque id est fringilla blandit in a dui. Cras ex justo, posuere
            id pretium a, gravida a ligula. Aliquam sed rhoncus tortor. Aliquam
            fermentum, risus ornare volutpat molestie, eros massa vulputate
            ante, non vulputate lorem lacus a est. Ut rhoncus ex quis massa
            posuere, sed fermentum neque cursus. Fusce varius turpis ligula.
            Morbi pretium erat in leo rutrum, eget lobortis nisi placerat. Duis
            facilisis lorem justo. Maecenas mollis risus a mi pulvinar
            hendrerit. Suspendisse vel dictum libero. Donec ullamcorper nunc eu
            placerat venenatis. Proin luctus orci ut mauris dignissim
            sollicitudin. Duis efficitur elit augue, vitae vehicula elit congue
            a. Aliquam faucibus, mauris rutrum cursus ultricies, diam eros
            suscipit odio, quis fermentum ligula sapien vel nulla. Nulla quis
            molestie lectus, ut convallis turpis.
          </p>
        </div>
        <div className="container-xl mx-auto  text-center font-bold text-4xl bg-gray-100 py-16">
          <p>Our Team</p>
        </div>
        <div className="flex justify-center gap-36 px-32">
          <div className="place-items-center">
            <div className="w-full">
              <img src={dummyfoto} alt="fotomember" className="mx-auto" />
            </div>
            <div className="text-3xl  text-center font-bold pt-5">
              <p>Irfan Satrio Nugroho</p>
            </div>
            <div className="text-xl text-center font-semibold">
              <p>Front-end Developer</p>
            </div>
          </div>
          <div className="items-center">
            <img src={dummyfoto} alt="fotomember" className="mx-auto" />
            <div className="text-3xl  text-center font-bold pt-5">
              <p>Sina Mustopa</p>
            </div>
            <div className="text-xl text-center font-semibold">
              <p>UI/UX Desiger</p>
            </div>
          </div>
          <div className=" justify-self-center">
            <img src={dummyfoto} alt="fotomember" className="mx-auto" />
            <div className="text-3xl  text-center font-bold pt-5">
              <p>Hafidh Akhdan Najib</p>
            </div>
            <div className="text-xl text-center font-semibold">
              <p>Back-end Developer</p>
            </div>
          </div>
        </div>
        <div className="container-xl mx-auto  text-center font-bold text-4xl bg-gray-100 py-16">
          <p>Dosen Pengampu</p>
        </div>
        <div className="flex justify-center pb-20 pt-10 w-full gap-32">
          <div className=" justify-self-center">
            <img src={dummyfoto} alt="fotomember" className="mx-auto" />
            <div className="text-3xl  text-center font-bold pt-10">
              <p>Mira Suryani, S.Pd., M.Kom.</p>
            </div>
          </div>
          <div className=" justify-self-center">
            <img src={dummyfoto} alt="fotomember" className="mx-auto" />
            <div className="text-3xl  text-center font-bold pt-10">
              <p>Aditya Pradana, S.T., M.Eng.</p>
            </div>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}

export default Aboutus;
