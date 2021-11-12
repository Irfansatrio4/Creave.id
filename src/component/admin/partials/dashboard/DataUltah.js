import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useHistory, useParams } from "react-router";

function DataUltah() {
  const history = useHistory();
  const [user, setUser] = useState([]);
  const params = useParams();
  console.log(params);
  const [selectStatus, setSelectStatus] = useState();

  useEffect(() => {
    axios
      .get(`https://creaveid-api.herokuapp.com/api/admin/birthday/${params.id}`)
      .then((response) => {
        setUser(response.data.birthday);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const hasil = {
    status: selectStatus,
  };

  const submitUpdate = (data, e) => {
    e.preventDefault();
    axios
      .post(
        `https://creaveid-api.herokuapp.com/api/admin/statusBirthday/${params.id}`,
        data
      )
      .then((response) => {
        console.log(response.data.updateData);
        history.push("/admin/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-12 bg-white shadow-lg rounded-sm border border-gray-200">
      {/* Chart built with Chart.js 3 */}
      <div className="col-span-full xl:col-span-6 bg-white rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">
            Review Pemesanan Ulang Tahun #{user._id}
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
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.fullname}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Tanggal
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {moment(user.date).format("dddd, D MMMM YYYY")}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    No Telp
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.phone_number}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Tema
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.theme}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Jumlah Orang
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.guest}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Jenis Konsumsi
                    </label>
                    <div className="p-2 text-left text-sm font-semibold mt-2">
                      {user.foodType}
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Jumlah Konsumsi
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.foodTotal}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Entertain
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.entertain}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    MC
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.mc}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    MUA
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.mua}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Wardrobe
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.wardrobe}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Dokumentasi
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.documentation}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Souvenir
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.souvenir}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Desain Undangan
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.design}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Venue
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.venue}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block text-left"
                  >
                    Total
                  </label>
                  <div className="p-2 text-left text-sm font-semibold mt-2">
                    {user.totalPrice}
                  </div>
                </div>
                <form>
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
                      value={selectStatus}
                      name="status"
                      onChange={(e) => setSelectStatus(e.target.value)}
                    >
                      <option value={"pending"}>Pending</option>
                      <option value={"declined"}>Declined</option>
                      <option value={"accepted"}>Accepted</option>
                      <option value={"waiting payment"}>Waiting Payment</option>
                    </select>
                  </div>

                  <div className="w-full px-8 mb-10 mt-10">
                    <div className="grid grid-cols-2">
                      <button
                        class=" bg-white border border-1 hover:shadow-md text-gray-800 font-bold mr-4 py-2 px-4 rounded items-center content-center"
                        onClick={() => history.push("/admin/home")}
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
                        onClick={(e) => submitUpdate(hasil, e)}
                      >
                        <span className="text-white">Simpan Perubahan</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataUltah;
