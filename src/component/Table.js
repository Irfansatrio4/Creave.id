import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

function Table() {
  const [user, setUser] = useState(false);
  const params = useParams();
  const { register, handleSubmit } = useForm();
  const getName = Cookies.get("fullname");
  const [showModal, setShowModal] = React.useState(false);
  const hasil = {
    fullname: getName,
  };

  const addPayment = (data) => {
    axios
      .post(
        `https://creaveid-api.herokuapp.com/api/user/paymentBirthday/${
          (params.id, data)
        }`
      )
      .then((response) => {
        setUser(response);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDataPernikahan = () => {
    axios
      .post("https://creaveid-api.herokuapp.com/api/user/wedding", hasil)
      .then((response) => {
        setUser(response.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(user);

  return (
    <div>
      <div className="overflow-x-auto bg-gray-100 pb-20">
        <div className="w-2/4 mb-10 ml-44">
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
              <button className="bg-blue-900 text-white rounded-md py-1 px-4">
                Ulang Tahun
              </button>
            </div>
            <div>
              <button className="bg-blue-900 text-white rounded-md py-1 px-8">
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
                        onClick={(e) => setShowModal(true)}
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
          <form onSubmit={handleSubmit(addPayment)}>
            <ModalBody>
              <input
                type="file"
                name="provePayment"
                {...register("provePayment")}
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
                Save Changes
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default Table;
