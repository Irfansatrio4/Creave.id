import React, { useState } from "react";
import { useHistory } from "react-router";
import DefaultFooter from "../../component/DefaultFooter";
import DefaultNavbar from "../../component/DefaultNavbar";
import Cookies from "js-cookie";
import axios from "axios";

function Pernikahan() {
  const history = useHistory();
  const [selectMakanan, setSelectMakanan] = useState(30000);
  const [jumlahKomsumsi, setjumlahKomsumsi] = useState(selectMakanan);
  const [entertaiment, setentertaiment] = useState(500000);
  const [jumlahMc, setjumlahMc] = useState(300000);
  const [selectMua, setselectMua] = useState(1500000);
  const [selectWardrobe, setselectWardrobe] = useState(5000000);
  const [selectDokumentasi, setselectDokumentasi] = useState(3000000);
  const [selectSouvenir, setselectSouvenir] = useState(1000000);
  const [selectDesign, setselectDesign] = useState(2500000);
  const [venue, setvenue] = useState(15000000);
  const [date, setdate] = useState();
  const [theme, settheme] = useState();
  const [guest, setGuest] = useState();

  const total =
    Number(selectMakanan) +
    Number(jumlahKomsumsi) +
    Number(entertaiment) +
    Number(jumlahMc) +
    Number(selectMua) +
    Number(selectWardrobe) +
    Number(selectDokumentasi) +
    Number(selectSouvenir) +
    Number(selectDesign) +
    Number(venue);

  const fullname = Cookies.get("fullname");
  const phone_number = Cookies.get("phone_number");

  const hasil = {
    date: date,
    theme: theme,
    guest: guest,
    foodType: selectMakanan,
    foodTotal: jumlahKomsumsi,
    entertaiment: entertaiment,
    mc: jumlahMc,
    mua: selectMua,
    wardrobe: selectWardrobe,
    documentation: selectDokumentasi,
    souvenir: selectSouvenir,
    design: selectDesign,
    totalPrice: total,
    fullname: fullname,
    phone_number: phone_number,
  };

  const submitForm = () => {
    console.log(hasil);

    axios
      .post("https://creaveid-api.herokuapp.com/api/admin/addWedding", hasil)
      .then(() => {
        // console.log(response)
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <DefaultNavbar />
      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-12 rounded-sm bg-gray-100">
        {/* Chart built with Chart.js 3 */}
        <div className="col-span-full xl:col-span-6 rounded-sm">
          <div class="pt-16 pb-12">
            <h1 className="text-4xl font-bold text-center">Pernikahan</h1>
          </div>
          <div className="grid gap-y-4 lg:mx-96 md:mx-60 sm:mx-px">
            {/* Table */}
            <div className="overflow-x-auto">
              <div className="App">
                <div className="grid gap-y-4 p-8">
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
                      name="date"
                      value={date}
                      onChange={(e) => setdate(e.target.value)}
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
                    ></input>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Jumlah Orang
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-200 rounded mt-4"
                      name="guest"
                      value={guest}
                      onChange={(e) => setGuest(e.target.value)}
                    ></input>
                  </div>
                  <div className="w-full mx-auto">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Jenis Konsumsi
                    </label>
                    <div className="grid grid-cols-4">
                      <select
                        className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                        value={selectMakanan}
                        onChange={(e) => setSelectMakanan(e.target.value)}
                      >
                        <option value={30000}>Makanan Indonesia</option>
                        <option value={50000}>Makanan Western</option>
                      </select>
                      <div className="text-center my-auto text-lg">
                        {selectMakanan}
                      </div>
                    </div>
                  </div>
                  <div className="w-full mx-auto">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Jumlah Konsumsi
                    </label>
                    <div className="grid grid-cols-4">
                      <select
                        className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                        value={jumlahKomsumsi}
                        onChange={(e) =>
                          setjumlahKomsumsi(e.target.value * selectMakanan)
                        }
                      >
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                        <option value={150}>150</option>
                      </select>
                      <div className="text-center my-auto text-lg">
                        {jumlahKomsumsi}
                      </div>
                    </div>
                  </div>
                  <div className="w-full mx-auto">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Entertain
                    </label>
                    <div className="grid grid-cols-4">
                      <select
                        className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                        value={entertaiment}
                        onChange={(e) => setentertaiment(e.target.value)}
                      >
                        <option value={500000}>Terdapat Entertain</option>
                        <option value={0}>Tidak Menggunakan Entertain</option>
                      </select>
                      <div className="text-center my-auto text-lg">
                        {entertaiment}
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
                        value={jumlahMc}
                        onChange={(e) => setjumlahMc(e.target.value)}
                      >
                        <option value={300000}>1 MC</option>
                        <option value={600000}>2 MC</option>
                        <option value={900000}>3 MC</option>
                      </select>
                      <div className="text-center my-auto text-lg">
                        {jumlahMc}
                      </div>
                    </div>
                  </div>
                  <div className="w-full mx-auto">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      MUA
                    </label>
                    <div className="grid grid-cols-4">
                      <select
                        className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                        value={selectMua}
                        onChange={(e) => setselectMua(e.target.value)}
                      >
                        <option value={1500000}>Menggunakan MUA</option>
                        <option value={0}>Tidak Menggunakan MUA</option>
                      </select>
                      <div className="text-center my-auto text-lg">
                        {selectMua}
                      </div>
                    </div>
                  </div>
                  <div className="w-full mx-auto">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Wardrobe
                    </label>
                    <div className="grid grid-cols-4">
                      <select
                        className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                        value={selectWardrobe}
                        onChange={(e) => setselectWardrobe(e.target.value)}
                      >
                        <option value={5000000}>
                          Menggunakan jasa Wardrobe
                        </option>
                        <option value={0}>
                          Tidak Menggunakan jasa Wardrobe
                        </option>
                      </select>
                      <div className="text-center my-auto text-lg">
                        {selectWardrobe}
                      </div>
                    </div>
                  </div>
                  <div className="w-full mx-auto">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Dokumentasi
                    </label>
                    <div className="grid grid-cols-4">
                      <select
                        className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                        value={selectDokumentasi}
                        onChange={(e) => setselectDokumentasi(e.target.value)}
                      >
                        <option value={3000000}>
                          Menggunakan jasa dokumentasi
                        </option>
                        <option value={0}>
                          Tidak menggunakan jasa dokumentasi
                        </option>
                      </select>
                      <div className="text-center my-auto text-lg">
                        {selectDokumentasi}
                      </div>
                    </div>
                  </div>
                  <div className="w-full mx-auto">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Souvenir
                    </label>
                    <div className="grid grid-cols-4">
                      <select
                        className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                        value={selectSouvenir}
                        onChange={(e) => setselectSouvenir(e.target.value)}
                      >
                        <option value={1000000}>Terdapat souvenir</option>
                        <option value={0}>Tidak ada souvenir</option>
                      </select>
                      <div className="text-center my-auto text-lg">
                        {selectSouvenir}
                      </div>
                    </div>
                  </div>
                  <div className="w-full mx-auto">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Desain Undangan
                    </label>
                    <div className="grid grid-cols-4">
                      <select
                        className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                        value={selectDesign}
                        onChange={(e) => setselectDesign(e.target.value)}
                      >
                        <option value={2500000}>
                          Menggunakan jasa desain undangan
                        </option>
                        <option value={0}>
                          Tidak menggunakan jasa desain undangan
                        </option>
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
                      Venue
                    </label>
                    <div className="grid grid-cols-4">
                      <select
                        className="col-span-3 w-full p-2 border border-gray-200 rounded my-4"
                        value={venue}
                        onChange={(e) => setvenue(e.target.value)}
                      >
                        <option value={15000000}>Sewa gedung</option>
                        <option value={0}>Tidak sewa gedung</option>
                      </select>
                      <div className="text-center my-auto text-lg">{venue}</div>
                    </div>
                  </div>
                  <div className="w-full mx-auto flex justify-between my-8">
                    <div>
                      <label
                        htmlFor=""
                        className=" font-bold text-gray-600 block text-left text-2xl"
                      >
                        Total
                      </label>
                    </div>
                    <div className="font-bold text-gray-600 block text-left text-2xl">
                      <p>Rp {total} </p>
                    </div>
                  </div>

                  {/* Batasan Section Atas */}
                  <div className="w-full px-8 mb-10">
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
                        onClick={submitForm}
                      >
                        <span className="text-white">Order</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
}

export default Pernikahan;
