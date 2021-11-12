import axios from "axios";
import React, { useState, useEffect } from "react";
import moment from "moment";

function TableGaleri() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://creaveid-api.herokuapp.com/api/admin/gallery")
      .then((response) => {
        setList(response.data.response);
        console.log(list);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  function handleDelete(id) {
    axios
      .post(`https://creaveid-api.herokuapp.com/api/admin/deleteGallery/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <div className="overflow-x-auto shadow-md">
        <table className="table-auto w-full mx-auto bg-white">
          {/* TabelGaleri header */}
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-200 item">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Judul</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Tanggal Acara</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Deskripsi</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Action</div>
              </th>
            </tr>
          </thead>
          {/* TabelGaleri body */}
          <tbody className="text-sm divide-y divide-gray-100">
            {list.map((galeri) => {
              return (
                <tr key={galeri.id}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="items-center">
                      <div className="font-medium text-gray-800 text-center">
                        {galeri.title}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">{moment(galeri.date).format("dddd, D MMMM YYYY")}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center font-medium text-gray-800">
                      {galeri.description}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">
                    <button class="border-3 border-light-blue-500 border-opacity-100 py-2 px-2 mx-2 rounded text-blue-500">
                      View
                    </button>
                    <button
                      class="border-3 border-red-500 border-opacity-100 py-2 px-2 rounded text-red-500"
                      onClick={() => handleDelete(galeri._id)}
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
  );
}

export default TableGaleri;
