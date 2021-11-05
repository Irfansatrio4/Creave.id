import React from "react";

function detailWebinar() {
  // const customers = [
  //   {
  //     id: "0",
  //     name: "Alex Shatov",
  //     email: "alexshatov@gmail.com",
  //     location: "🇺🇸",
  //     spent: "$2,890.66",
  //   },
  //   {
  //     id: "1",
  //     name: "Philip Harbach",
  //     email: "philip.h@gmail.com",
  //     location: "🇩🇪",
  //     spent: "$2,767.04",
  //   },
  //   {
  //     id: "2",
  //     name: "Mirko Fisuk",
  //     email: "mirkofisuk@gmail.com",
  //     location: "🇫🇷",
  //     spent: "$2,996.00",
  //   },
  //   {
  //     id: "3",
  //     name: "Olga Semklo",
  //     email: "olga.s@cool.design",
  //     location: "🇮🇹",
  //     spent: "$1,220.66",
  //   },
  //   {
  //     id: "4",
  //     name: "Burak Long",
  //     email: "longburak@gmail.com",
  //     location: "🇬🇧",
  //     spent: "$1,890.66",
  //   },
  // ];

  // const chartData = {
  //   labels: [
  //     "12-01-2020",
  //     "01-01-2021",
  //     "02-01-2021",
  //     "03-01-2021",
  //     "04-01-2021",
  //     "05-01-2021",
  //     "06-01-2021",
  //     "07-01-2021",
  //     "08-01-2021",
  //     "09-01-2021",
  //     "10-01-2021",
  //     "11-01-2021",
  //     "12-01-2021",
  //     "01-01-2022",
  //     "02-01-2022",
  //     "03-01-2022",
  //     "04-01-2022",
  //     "05-01-2022",
  //     "06-01-2022",
  //     "07-01-2022",
  //     "08-01-2022",
  //     "09-01-2022",
  //     "10-01-2022",
  //     "11-01-2022",
  //     "12-01-2022",
  //     "01-01-2023",
  //   ],
  //   datasets: [
  //     // Indigo line
  //     {
  //       data: [
  //         732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192,
  //         154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532,
  //       ],
  //       fill: true,
  //       backgroundColor: `rgba(${hexToRGB(
  //         tailwindConfig().theme.colors.blue[500]
  //       )}, 0.08)`,
  //       borderColor: tailwindConfig().theme.colors.indigo[500],
  //       borderWidth: 2,
  //       tension: 0,
  //       pointRadius: 0,
  //       pointHoverRadius: 3,
  //       pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
  //       clip: 20,
  //     },
  //     // Gray line
  //     {
  //       data: [
  //         532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234,
  //         314, 314, 314, 388, 314, 202, 202, 202, 202, 314, 720, 642,
  //       ],
  //       borderColor: tailwindConfig().theme.colors.gray[300],
  //       borderWidth: 2,
  //       tension: 0,
  //       pointRadius: 0,
  //       pointHoverRadius: 3,
  //       pointBackgroundColor: tailwindConfig().theme.colors.gray[300],
  //       clip: 20,
  //     },
  //   ],
  // };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-12 bg-white shadow-lg rounded-sm border border-gray-200">
      {/* Chart built with Chart.js 3 */}
      <div className="col-span-full xl:col-span-6 bg-white rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">
            Review Pemesanan Webinar #1
          </h2>
        </header>
        <div className="p-3">
          {/* Table */}
          <div className="overflow-x-auto">
            <div className="App">
              <div className="grid gap-y-4 p-8">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Nama Pengguna
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-200 rounded mt-4"
                  ></input>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Tanggal
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-200 rounded mt-4"
                  ></input>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    No Telp
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-200 rounded mt-4"
                  ></input>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Jenis Acara
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-200 rounded mt-4"
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
                  ></input>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Desain dan Publikasi
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-200 rounded mt-4"
                  ></input>
                  <div className="w-full">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Sertifikat
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-200 rounded mt-4"
                    ></input>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    MC
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-200 rounded mt-4"
                  ></input>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Paket Zoom
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-200 rounded mt-4"
                  ></input>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Streaming
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-200 rounded mt-4"
                  ></input>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Total
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-200 rounded mt-4"
                  ></input>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Catatan
                  </label>
                  <textarea
                    class="w-full px-3 py-2 text-gray-600 border rounded border-gray-200 mt-4 focus:outline-none"
                    rows="4"
                  ></textarea>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Status
                  </label>
                  <select
                    type="text"
                    className="w-full p-2 border border-gray-100 rounded mt-4"
                  >
                    <option>Pending</option>
                    <option>Terima</option>
                    <option>Tolak</option>
                  </select>
                </div>

                {/* Batasan Section Atas */}
                <div className="w-full px-8 mb-10 mt-10">
                  <div className="grid grid-cols-2">
                    <button class=" bg-white border border-1 hover:shadow-md text-gray-800 font-bold mr-4 py-2 px-4 rounded items-center content-center">
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
                    <button class="hover:shadow-md text-gray-800 bg-blue-900 font-bold mr-4 py-2 px-4 rounded items-center content-center">
                      <span className="text-white">Simpan Perubahan</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default detailWebinar;
