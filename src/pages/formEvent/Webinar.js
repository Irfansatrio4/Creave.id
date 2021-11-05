import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import DefaultFooter from "../../component/DefaultFooter";
import DefaultNavbar from "../../component/DefaultNavbar";
import axios from "axios";
// import { useForm } from "react-hook-form";

function Webinar() {
  const history = useHistory();
  const [selectDesign, setselectDesign] = useState(0);
  const [selectSertifikat, setselectSertifikat] = useState(0);
  const [selectMc, setselectMc] = useState(0);
  const [selectPaket, setselectPaket] = useState(0);
  const [selectStreaming, setselectStreaming] = useState(0);
  const [date, setdate] = useState();
  const [theme, settheme] = useState();
  // const hasil = {};
  // const [ketStreaming, setketStreaming] = useState("");

  const total =
    Number(selectDesign) +
    Number(selectSertifikat) +
    Number(selectMc) +
    Number(selectPaket) +
    Number(selectStreaming);

  // let ketMc = "";
  // if (selectMc === 200000) {
  //   ketMc = "1 MC";
  // } else if (selectMc === 400000) {
  //   ketMc = "2 MC";
  // } else if (selectMc === 600000) {
  //   ketMc = "3 MC";
  // }

  // let ketDesign = "";
  // if (selectDesign === 0) {
  //   ketDesign = "Tidak Menggunakan Design";
  // } else if (selectDesign === 1500000) {
  //   ketDesign = "Menggunakan Design dari EO";
  // }

  // let ketSertif = "";
  // if (selectSertifikat === 0) {
  //   ketSertif = "Tidak ada sertifikat";
  // } else if (selectSertifikat === 500000) {
  //   ketSertif = "Pesan Jasa buat sertifikat";
  // }

  // let ketPaket = "";
  // if (selectPaket === 50000) {
  //   ketPaket = "Paket 50 orang";
  // } else if (selectPaket === 100000) {
  //   ketPaket = "Paket 100 orang";
  // } else if (selectPaket === 150000) {
  //   ketPaket = "Paket 150 orang";
  // }

  // if (selectStreaming === 0) {
  //   // ketStreaming = "Tidak ada Streaming";
  //   setketStreaming("Tidak Menggunakan Jasa");
  // } else if (selectDesign === 250000) {
  //   setketStreaming("Menggunakan Jasa");
  // }

  const hasil = {
    date: date,
    theme: theme,
    designPublication: selectDesign,
    certificate: selectSertifikat,
    mc: selectMc,
    zoomPackage: selectPaket,
    streaming: selectStreaming,
    totalPrice: total,
  };
  console.log(hasil);

  // const { register, handleSubmit } = useForm();

  // const submitForm = () => {
  //   // console.log(hasil);
  //   // e.preventDefault();
  //   axios
  //     .post("http://localhost:5000/api/admin/addWebinar", hasil)
  //     .then(() => {
  //       // console.log(response)
  //       history.push("/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // console.log(hasil);
  return (
    <>
      <DefaultNavbar />
      <div className="App bg-gray-100">
        <div class="pt-16 pb-12">
          <h1 className="text-4xl font-bold">Webinar</h1>
        </div>
        <div className="grid gap-y-4 lg:mx-96 md:mx-60 sm:mx-px">
          <form>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block text-left"
              >
                Tanggal
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-200 rounded mt-4"
                value={date}
                onChange={(e) => setdate(e.target.value)}
                name="date"
                // {...register("date")}
              ></input>
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block text-left"
              >
                Tema
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-200 rounded mt-4"
                name="theme"
                value={theme}
                onChange={(e) => settheme(e.target.value)}
                // {...register("theme")}
              ></input>
            </div>
            <div className="w-full mx-auto">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block text-left"
              >
                Design dan Publikasi
              </label>
              <div className="grid grid-cols-4">
                <select
                  className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                  value={selectDesign}
                  onChange={(e) => setselectDesign(e.target.value)}
                  name="designPublication"
                  // {...register("designPublication")}
                >
                  <option value={1500000}>Menggunakan Desain dari EO</option>
                  <option value={0}>Tidak Menggunakan Desain </option>
                </select>
                <div className="text-center my-auto text-lg">
                  {selectDesign}
                </div>
              </div>
            </div>
            <div className="w-full mx-auto">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block text-left"
              >
                MC
              </label>
              <div className="grid grid-cols-4">
                <select
                  className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                  value={selectMc}
                  onChange={(e) => setselectMc(e.target.value)}
                  name="mc"
                  // {...register("mc")}
                >
                  <option value={200000}>1 MC</option>
                  <option value={400000}>2 MC</option>
                  <option value={600000}>3 MC</option>
                </select>
                <div className="text-center my-auto text-lg">{selectMc}</div>
              </div>
            </div>
            <div className="w-full mx-auto">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block text-left"
              >
                Sertifikat
              </label>
              <div className="grid grid-cols-4">
                <select
                  className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                  value={selectSertifikat}
                  onChange={(e) => setselectSertifikat(e.target.value)}
                  name="certificate"
                  // {...register("certificate")}
                >
                  <option value={500000}>Menggunakan Sertifikat</option>
                  <option value={0}>Tidak Menggunakan Sertifikat</option>
                </select>
                <div className="text-center my-auto text-lg">
                  {selectSertifikat}
                </div>
              </div>
            </div>
            <div className="w-full mx-auto">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block text-left"
              >
                Paket Zoom
              </label>
              <div className="grid grid-cols-4">
                <select
                  className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                  value={selectPaket}
                  onChange={(e) => setselectPaket(e.target.value)}
                  name="zoomPackage"
                  // {...register("zoomPackage")}
                >
                  <option value={50000}>Paket 50 peserta</option>
                  <option value={100000}>Paket 100 peserta</option>
                  <option value={150000}>Paket 150 peserta</option>
                </select>
                <div className="text-center my-auto text-lg">{selectPaket}</div>
              </div>
            </div>
            <div className="w-full mx-auto">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block text-left"
              >
                Streaming
              </label>
              <div className="grid grid-cols-4">
                <select
                  className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                  value={selectStreaming}
                  onChange={(e) => setselectStreaming(e.target.value)}
                  name="streaming"
                  // {...register("streaming")}
                >
                  <option value={250000}>Menggunakan Jasa Streaming</option>
                  <option value={0}>Tidak Menggunakan Jasa Streaming</option>
                </select>
                <div className="text-center my-auto text-lg">
                  {selectStreaming}
                </div>
              </div>
            </div>
            <div className="w-full mx-auto flex justify-between my-8">
              <div>
                <label
                  htmlFor=""
                  className="font-bold text-gray-600 block text-left text-2xl"
                >
                  Total
                </label>
              </div>
              {/* <input type="text" name="totalPrice" {...register("totalPrice")}> */}
              <div className="font-bold text-gray-600 block text-left text-2xl">
                <p className="text-mute">Rp {total} </p>
              </div>
              {/* </input> */}
            </div>
            <div className="w-full mx-auto mb-10">
              <div className="grid grid-cols-2">
                <button
                  class=" bg-white border border-1 hover:shadow-md text-gray-800 font-bold mr-4 py-2 px-4 rounded items-center content-center"
                  onClick={() => history.goBack()}
                >
                  <div className="inline-flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.91988 2H16.0899C19.6199 2 21.9999 4.271 21.9999 7.66V16.33C21.9999 19.72 19.6199 22 16.0899 22H7.91988C4.37988 22 1.99988 19.72 1.99988 16.33V7.66C1.99988 4.271 4.37988 2 7.91988 2ZM9.72988 12.75H16.0799C16.4999 12.75 16.8299 12.41 16.8299 12C16.8299 11.58 16.4999 11.25 16.0799 11.25H9.72988L12.2099 8.78C12.3499 8.64 12.4299 8.44 12.4299 8.25C12.4299 8.061 12.3499 7.87 12.2099 7.72C11.9199 7.43 11.4399 7.43 11.1499 7.72L7.37988 11.47C7.09988 11.75 7.09988 12.25 7.37988 12.53L11.1499 16.28C11.4399 16.57 11.9199 16.57 12.2099 16.28C12.4999 15.98 12.4999 15.51 12.2099 15.21L9.72988 12.75Z"
                        fill="#130F26"
                      />
                    </svg>

                    <span className="mx-4">Kembali</span>
                  </div>
                </button>
                <button
                  class="hover:shadow-md text-gray-800 bg-blue-900 font-bold mr-4 py-2 px-4 rounded items-center content-center"
                  // onClick={submitForm}
                  type="submit"
                >
                  <span className="text-white">Lanjut</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
}

export default Webinar;
