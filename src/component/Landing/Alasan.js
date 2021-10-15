import React from "react";
import AlasanCard from "./AlasanCard";

export default function Alasan() {
  return (
    <div>
      <div className=" container max-w-7xl mx-auto px-4 grid grid-cols-2 bg-grey-800 grid-row-2 items-center mt-10">
        <div className="grid grid-rows-2 ">
          <div className="flex items-center text-4xl text-black font-bold">
            <p>Kenapa Memilih creave.id ?</p>
          </div>
          <div className="flex items-center text-justify text-black">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dapibus vitae leo sit amet imperdiet. Nulla eget maximus purus.
              Quisque id nisl in nibh cursus elementum ac nec purus. Quisque
              pulvinar ipsum sed egestas ultrices. Donec pretium sollicitudin
              tellus sed fermentum. Donec faucibus, dui vel vestibulum semper,
              nisi felis fringilla velit, a gravida nulla elit quis ipsum.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-9 gap-x-20 ml-10">
          <div>
            <AlasanCard title="alasan 1">
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </AlasanCard>
          </div>
          <div>
            <AlasanCard title="alasan 2">
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </AlasanCard>
          </div>
          <div>
            <AlasanCard title="alasan 3">
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </AlasanCard>
          </div>
          <div>
            <AlasanCard title="alasan 4">
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </AlasanCard>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
