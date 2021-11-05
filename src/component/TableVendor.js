import React from "react";

function TableVendor() {
  const customers = [
    {
      id: "0",
      name: "Sumber Cahaya",
      email: "Jl. Buah Batu Raya no 20",
      telp: "08123659984",
      spent: "Tempat Penyewaan Lampu tembak",
    },
    {
      id: "1",
      name: "Tenda Biru",
      email: "Jl. Jambi Raya no 12",
      telp: "082156448897",
      spent: "Penyewaan tenda dan dekorasi",
    },
    {
      id: "2",
      name: "Tenda Biru",
      email: "Jl. Jambi Raya no 12",
      telp: "082156448897",
      spent: "Penyewaan tenda dan dekorasi",
    },
    {
      id: "3",
      name: "Tenda Biru",
      email: "Jl. Jambi Raya no 12",
      telp: "082156448897",
      spent: "Penyewaan tenda dan dekorasi",
    },
    {
      id: "4",
      name: "Tenda Biru",
      email: "Jl. Jambi Raya no 12",
      telp: "082156448897",
      spent: "Penyewaan tenda dan dekorasi",
    },
  ];

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
                    <div className="text-center">{customer.telp}</div>
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

export default TableVendor;
