import React from "react";
import Image from "@material-tailwind/react/Image";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function OrderNow() {
  const history = useHistory();
  return (
    <div>
      <div className=" container mx-auto grid grid-cols-2 grid-row-2 items-center pt-10 w-11/12">
        <div className=" justify-self-center">
          <Image
            src="assets/img/birthday_vector 1.svg"
            rounded={false}
            raised={false}
            alt="Image"
          />
        </div>
        <div className="grid grid-rows-3 items-center">
          <div className="flex  text-4xl text-black font-bold">
            <p> Meriahkan acara kamu bersama creave.id </p>
          </div>
          <div className="flex text-justify text-black pr-36">
            <p>
              Banyak sekali keseruan dan momen yang kami ciptakan disetiap
              event, mari jadikan kami Creave.id sebagai pilihan Event Organizer
              terbaik Anda.
            </p>
          </div>
          <Link to="/event">
            <button className="bg-yellow-500 w-1/5 py-2 rounded-md font-bold uppercase">
              order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
