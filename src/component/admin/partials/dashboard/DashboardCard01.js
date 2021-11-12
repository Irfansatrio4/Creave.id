import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import moment from "moment";

function DashboardCard01() {
  let history = useHistory();
  const [user, setUser] = useState([]);
  const [status, setStatus] = useState("");

  const handleDataWebinar = () => {
    axios
      .get("https://creaveid-api.herokuapp.com/api/admin/webinar")
      .then((response) => {
        setUser(response.data.response);
        setStatus("webinar");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDataPernikahan = () => {
    axios
      .get("https://creaveid-api.herokuapp.com/api/admin/wedding")
      .then((response) => {
        setUser(response.data.response);
        setStatus("wedding");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDataUltah = () => {
    axios
      .get("https://creaveid-api.herokuapp.com/api/admin/birthday")
      .then((response) => {
        setUser(response.data.response);
        setStatus("birthday");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleDelete(id) {
    if (status === "webinar") {
      axios
        .post(
          `https://creaveid-api.herokuapp.com/api/admin/deleteWebinar/${id}`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (status === "birthday") {
      axios
        .post(
          `https://creaveid-api.herokuapp.com/api/admin/deleteBirthday/${id}`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (status === "wedding") {
      axios
        .post(
          `https://creaveid-api.herokuapp.com/api/admin/deleteWedding/${id}`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  function handleView(id) {
    if (status === "webinar") {
      history.push(`/admin/webinar/detail/${id}`);
    } else if (status === "birthday") {
      history.push(`/admin/ultah/detail/${id}`);
    } else if (status === "wedding") {
      history.push(`/admin/pernikahan/detail/${id}`);
    }
  }

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-12 bg-white shadow-lg rounded-sm border border-gray-200">
      {/* Chart built with Chart.js 3 */}
      <div className="col-span-full xl:col-span-6 bg-white rounded-sm border border-gray-200">
        <div className="w-2/4">
          <div className="flex justify-start gap-5 mt-3 ml-5">
            <div>
              <button
                className="bg-blue-900 text-white rounded-md py-1 px-4"
                onClick={handleDataPernikahan}
              >
                Pernikahan
              </button>
            </div>
            <div>
              <button
                className="bg-blue-900 text-white rounded-md py-1 px-4"
                onClick={handleDataUltah}
              >
                Ulang Tahun
              </button>
            </div>
            <div>
              <button
                className="bg-blue-900 text-white rounded-md py-1 px-8"
                onClick={handleDataWebinar}
              >
                Webinar
              </button>
            </div>
          </div>
        </div>
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800 uppercase">List User</h2>
        </header>

        <div className="p-3">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 item">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">
                      Nama Pengguna
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">
                      Tanggal Acara
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Tema Acara</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Total Harga</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">No Telp</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Status</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Bukti Foto</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Action</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-gray-100">
                {user.map((req) => {
                  return (
                    <tr key={req._id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="items-center">
                          <div className="font-medium text-gray-800 text-center">
                            {req.fullname}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">
                          {moment(req.date).format("dddd, D MMMM YYYY")}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center font-medium text-gray-800">
                          {req.theme}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{req.totalPrice}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{req.phone_number}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{req.status}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">photo</div>
                      </td>
                      <td className="p-2 whitespace-nowrap text-center">
                        <button
                          class="border-3 border-light-blue-500 border-opacity-100 py-2 px-2 mx-2 rounded text-blue-500"
                          onClick={() => handleView(req._id)}
                        >
                          View
                        </button>
                        <button
                          class="border-3 border-red-500 border-opacity-100 py-2 px-2 rounded text-red-500"
                          onClick={() => handleDelete(req._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
