import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from "sweetalert";

function TableVendor() {
  const [list, setlist] = useState([]);
  useEffect(() => {
    axios
      .get("https://creaveid-api.herokuapp.com/api/admin/vendor")
      .then((response) => {
        setlist(response.data.response);
        console.log(list);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  function handleDelete(id) {
    axios
      .post(`https://creaveid-api.herokuapp.com/api/admin/deleteVendor/${id}`)
      .then((response) => {
        swal({
          title: "Berhasil Dihapus",
          text: "Data vendor berhasil dihapus",
          icon: "warning",
        });
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="overflow-x-auto bg-gray-100 shadow-md">
        <table className="table-auto w-full mx-auto bg-white">
          {/* TabelGaleri header */}
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-200 item">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Nama Vendor</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Alamat</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Deskripsi</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">No Telp</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Action</div>
              </th>
            </tr>
          </thead>
          {/* TabelGaleri body */}
          <tbody className="text-sm divide-y divide-gray-100">
            {list.map((vendor) => {
              return (
                <tr key={vendor._id}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="items-center">
                      <div className="font-medium text-gray-800 text-center">
                        {vendor.vendorname}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">{vendor.address}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center font-medium text-gray-800">
                      {vendor.description}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">{vendor.phone_number}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">
                    <button
                      class="border-3 border-red-500 border-opacity-100 py-2 px-2 rounded text-red-500"
                      onClick={() => handleDelete(vendor._id)}
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

export default TableVendor;
