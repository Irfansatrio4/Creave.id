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
          <p>About Us</p>
        </div>
        <div className="container-xl mx-auto w-9/12 text-center text-xl bg-gray-100 mt-10">
          <p>
            Aplikasi Creave.id merupakan aplikasi berbasis website yang
            bertujuan untuk memberikan kesempatan kepada masyarakat yang ingin
            mengadakan sebuah kegiatan atau acara untuk menggunakan jasa Event
            Organizer yang terpercaya. Anda bisa menyusun keinginan acara yang
            Anda rencanakan jauh-jauh hari sesuai dengan yang diinginkan,
            melalui proses kustomisasi sebagai penunjang rangkaian acara dengan
            kebutuhan yang diinginkan oleh Anda. Melalui proses pengelolaan
            admin aplikasi yang cepat, sehingga memberikan kemudahan kepada Anda
            untuk bisa memilih layanan jasa Creave.id.
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
