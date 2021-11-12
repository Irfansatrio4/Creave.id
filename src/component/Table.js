import React, { useState, useEffect } from "react";
import axios from "axios";

function Table() {
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/admin/vendor")
  //     .then((response) => {
  //       set(response.data.response);
  //       console.log(user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  const customers = [
    {
      id: "0",
      name: "Alex Shatov",
      email: "alexshatov@gmail.com",
      location: "🇺🇸",
      spent: "$2,890.66",
    },
    {
      id: "1",
      name: "Philip Harbach",
      email: "philip.h@gmail.com",
      location: "🇩🇪",
      spent: "$2,767.04",
    },
    {
      id: "2",
      name: "Mirko Fisuk",
      email: "mirkofisuk@gmail.com",
      location: "🇫🇷",
      spent: "$2,996.00",
    },
    {
      id: "3",
      name: "Olga Semklo",
      email: "olga.s@cool.design",
      location: "🇮🇹",
      spent: "$1,220.66",
    },
    {
      id: "4",
      name: "Burak Long",
      email: "longburak@gmail.com",
      location: "🇬🇧",
      spent: "$1,890.66",
    },
  ];

  return (
    <div>
      <div className="overflow-x-auto bg-gray-100 pb-20">
        <table className="table-auto w-9/12 mx-auto bg-white">
          {/* Table header */}
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 item">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Tanggal Acara</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Total Harga</div>
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
            {customers.map((customer) => {
              return (
                <tr key={customer.id}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="items-center">
                      <div className="font-medium text-gray-800 text-center">
                        {customer.name}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">{customer.email}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center font-medium text-gray-800">
                      {customer.spent}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-lg text-center">
                      {customer.location}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">
                    <button class="border-3 border-light-blue-500 border-opacity-100 py-2 px-2 mx-2 rounded text-blue-500">
                      View
                    </button>
                    <button class="border-3 border-red-500 border-opacity-100 py-2 px-2 rounded text-red-500">
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
  );
}

export default Table;
