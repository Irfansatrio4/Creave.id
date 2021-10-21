import React from "react";
import Image from "@material-tailwind/react/Image";

export default function OrderNow() {
  return (
    <div>
      <div className=" container mx-auto grid grid-cols-2 grid-row-2 items-center pt-10">
        <div className=" justify-self-center">
          <Image
            src="assets/img/birthday_vector 1.svg"
            rounded={false}
            raised={false}
            alt="Image"
          />
        </div>
        <div className="grid grid-rows-3 w-2/3 items-center">
          <div className="flex  text-4xl text-black font-bold">
            <p> Meriahkan acara kamu bersama creave.id </p>
          </div>
          <div className="flex text-justify text-black">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dapibus vitae leo sit amet imperdiet. Nulla eget maximus purus.
              Quisque id nisl in nibh cursus elementum ac nec purus. Quisque
              pulvinar ipsum sed egestas ultrices. Donec pretium sollicitudin
              tellus sed fermentum. Donec faucibus, dui vel vestibulum semper,
              nisi felis fringilla velit, a gravida nulla elit quis ipsum.
            </p>
          </div>
          <div>
            Button
          </div>
        </div>
      </div>
    </div>
  );
}
