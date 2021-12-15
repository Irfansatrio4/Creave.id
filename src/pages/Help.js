import React from "react";
import DefaultFooter from "../component/DefaultFooter";
import DefaultNavbar from "../component/DefaultNavbar";

function Help() {
  return (
    <div>
      <DefaultNavbar />
      <div className="min-h-screen bg-gray-100 pt-10 pb-20">
        <div className="container-xl mx-auto  text-center font-bold lg:text-4xl md:text-2xl bg-gray-100 pt-10">
          <p>Syarat dan Ketentuan</p>
        </div>
        <div className="container-xl flex  mx-auto w-9/12 text-justify lg:text-xl md:text-lg bg-gray-100 mt-10">
          <div className="pr-3">1. </div>
          <div>
            <p>
              Cara melakukan proses pemesanan jasa layanan Event Organizer di
              Creave.id, pastikan terlebih dahulu Anda sudah mempersiapkan
              rencana acara Anda yang sangat Anda idamkan sesuai dengan
              kebutuhan Anda.
            </p>
          </div>
        </div>
        <div className="container-xl flex mx-auto w-9/12 text-justify lg:text-xl md:text-lg bg-gray-100 mt-5">
          <div className="pr-3">2. </div>
          <div>
            <p>
              Setelah Anda sudah mempersiapkan semua itu, masuk ke halaman event
              di website creave.id untuk memilih jenis acara yang sudah
              disediakan oleh pihak kami, termasuk Ulang Tahun, Pernikahan, dan
              Webinar.
            </p>
          </div>
        </div>
        <div className="container-xl flex mx-auto w-9/12 text-justify lg:text-xl md:text-lg bg-gray-100 mt-5">
          <div className="pr-3">3. </div>
          <div>
            <p>
              Ketika Anda sudah memilih jenis acara yang Anda inginkan,
              kustomisasi acara yang Anda inginkan sesuai dengan kebutuhan dan
              harapan untuk membuat acara Anda lebih berkesan.
            </p>
          </div>
        </div>
        <div className="container-xl flex mx-auto w-9/12 text-justify lg:text-xl md:text-lg bg-gray-100 mt-5">
          <div className="pr-3">4. </div>
          <div>
            <p>
              Harga dari proses kustomisasi acara Anda, langsung tertampilkan
              dihalaman proses kustomisasi, hal ini bertujuan untuk mempermudah
              Anda mengetahui biaya yang harus dikeluarkan.
            </p>
          </div>
        </div>
        <div className="container-xl flex mx-auto w-9/12 text-justify lg:text-xl md:text-lg bg-gray-100 mt-5">
          <div className="pr-3">5. </div>
          <div>
            <p>
              Ketika Anda sudah melakukan pemesanan, data pemesanan akan dilihat
              oleh admin dan dilakukan proses persetujuan oleh admin.
            </p>
          </div>
        </div>
        <div className="container-xl flex mx-auto w-9/12 text-justify lg:text-xl md:text-lg bg-gray-100 mt-5">
          <div className="pr-3">6. </div>
          <div>
            <p>
              Anda bisa masuk ke halaman profil untuk mengecek apakah pemesanan
              Anda sudah disetujui oleh Admin.
            </p>
          </div>
        </div>
        <div className="container-xl flex mx-auto w-9/12 text-justify lg:text-xl md:text-lg bg-gray-100 mt-5">
          <div className="pr-3">7. </div>
          <div>
            <p>
              Proses pemesanan Anda sudah disetujui oleh admin. Anda harus
              melakukan pembayaran ke no Rekening :
              <ul className="font-bold">
                <li>Bank BCA(1408101800) a.n Creave.id </li>
                <li>Bank Mandiri(1408101800) a.n Creave.id</li>
              </ul>
              Lalu mengupload bukti pembayaran sesuai dengan harga yang tertera
              ketika melakukan proses kustomisasi acara Anda.
            </p>
          </div>
        </div>
        <div className="container-xl flex mx-auto w-9/12 text-justify lg:text-xl md:text-lg bg-gray-100 mt-5">
          <div className="pr-3">8. </div>
          <div>
            <p>
              Setelah bukti pembayaran sudah terupload. Anda akan dihubungi oleh
              pihak Creave.id untuk persiapan pelaksanaan acara Anda.
            </p>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}

export default Help;
