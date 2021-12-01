import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { useParams } from "react-router";
import swal from "sweetalert";

function Table() {
  const [user, setUser] = useState([]);
  const [image, setImage] = useState(null);
  const getName = Cookies.get("fullname");
  const [id, setId] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [namaProjek, setNamaProjek] = useState("");
  const [bukti, setBukti] = useState("");
  const hasil = {
    fullname: getName,
  };

  const addPayment = (e) => {
    e.preventDefault();
    const data = new FormData();
    console.log(image);
    data.append("provePayment", image);
    axios
      .post(`https://creaveid-api.herokuapp.com/api/user/${bukti}/${id}`, data)
      .then((response) => {
        console.log(response);
        swal({
          title: "Bukti Pembayaran Sudah Diterima",
          text: "Tunggu admin kami menghubungin anda",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDataProjek = () => {
    axios
      .post(`https://creaveid-api.herokuapp.com/api/user/${namaProjek}`, hasil)
      .then((response) => {
        setUser(response.data.order);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto bg-gray-100 pb-20">
        <div className="w-2/4 mb-10 ml-44">
          <div className="flex justify-start gap-5 mt-3 ml-5">
            <div>
              <button
                className="bg-blue-900 text-white rounded-md py-1 px-4"
                onClick={(e) => {
                  handleDataProjek();
                  setNamaProjek("wedding");
                  setBukti("paymentWedding");
                }}
              >
                Pernikahan
              </button>
            </div>
            <div>
              <button
                className="bg-blue-900 text-white rounded-md py-1 px-4"
                onClick={(e) => {
                  handleDataProjek();
                  setNamaProjek("birthday");
                  setBukti("paymentBirthday");
                }}
              >
                Ulang Tahun
              </button>
            </div>
            <div>
              <button
                className="bg-blue-900 text-white rounded-md py-1 px-8"
                onClick={(e) => {
                  handleDataProjek();
                  setNamaProjek("webinar");
                  setBukti("paymentWebinar");
                }}
              >
                Webinar
              </button>
            </div>
          </div>
        </div>

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
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm divide-y divide-gray-100">
            {user &&
              user.map((order) => {
                return (
                  <tr key={order._id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="items-center">
                        <div className="font-medium text-gray-800 text-center">
                          {moment(order.date).format("dddd, D MMMM YYYY")}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center">{order.totalPrice}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center font-medium text-gray-800">
                        {order.status}
                      </div>
                    </td>

                    <td className="p-2 whitespace-nowrap text-center">
                      <button
                        class="border-3 border-red-500 border-opacity-100 py-2 px-2 rounded text-black font-semibold"
                        onClick={(e) => {
                          setId(order._id);
                          setShowModal(true);
                        }}
                      >
                        Upload Bukti
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
          <ModalHeader toggler={() => setShowModal(false)}>
            Upload Bukti Bayar
          </ModalHeader>
          <form onSubmit={addPayment}>
            <ModalBody>
              <input
                type="file"
                name="provePayment"
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
            </ModalBody>
            <ModalFooter>
              <Button
                color="red"
                buttonType="link"
                onClick={(e) => setShowModal(false)}
                ripple="dark"
              >
                Close
              </Button>

              <Button
                color="green"
                onClick={(e) => setShowModal(false)}
                ripple="light"
                type="submit"
              >
                Upload Bukti
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default Table;
