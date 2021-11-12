import React from "react";
import AlasanCard from "./AlasanCard";

export default function Alasan() {
  return (
    <div className="bg-gray-100">
      <div className=" container px-20 grid grid-cols-2 w-11/12 mx-auto grid-row-2 items-center pt-10">
        <div className="grid grid-rows-2 w-11/12">
          <div className="flex  text-4xl text-black font-bold">
            <p>Kenapa Memilih creave.id ?</p>
          </div>
          <div className="flex text-justify text-black">
            <p>
              Membuat event bersama creave.id dipastikan sesuai dengan kebutuhan
              Anda. Seluruh kegiatan akan direncanakan dengan sistematis dan
              dibuat mengesankan dengan mewujudkan ekspektasi kemeriahan event
              Anda.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-4 gap-x-20  pb-8">
          <div>
            <AlasanCard title="Kustomisasi Event">
              Proses kustomisasi event yang bisa Anda rancang sendiri sesuai
              kebutuhan.
            </AlasanCard>
          </div>
          <div>
            <AlasanCard title="Penyediaan Terbaik">
              Kebutuhan untuk kegiatan Anda, kami berikan yang terbaik dari
              vendor pilihan kami.
            </AlasanCard>
          </div>
          <div>
            <AlasanCard title="Pengalaman Tinggi">
              Berpengalaman dalam mengadakan event yang dilakukan baik offline
              maupun online.
            </AlasanCard>
          </div>
          <div>
            <AlasanCard title="Harga Terstruktur">
              Jumlah harga yang ditampilkan secara jelas sesuai dengan
              kustomisasi kebutuhan Anda
            </AlasanCard>
          </div>
        </div>
      </div>
    </div>
  );
}
