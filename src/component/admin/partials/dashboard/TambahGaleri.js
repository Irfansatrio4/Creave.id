import React from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";

function TambahGaleri() {
  const history = useHistory();
 

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-12 bg-white shadow-lg rounded-sm border border-gray-200">
      {/* Chart built with Chart.js 3 */}
      <div className="col-span-full xl:col-span-6 bg-white rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Tambah Galeri </h2>
        </header>
        <div className="p-3">
          {/* Table */}
          <form>
            <div className="overflow-x-auto">
              <div className="App">
                <div className="grid gap-y-4 p-8">
                  <div className="w-full">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Judul
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-200 rounded mt-4"
                      placeholder="Masukkan judul galeri..."
                      name="title"
                    ></input>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Tanggal Acara
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-200 rounded mt-4"
                      placeholder="Masukkan tanggal acara..."
                      name="date"
                      
                    ></input>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Deskripsi
                    </label>
                    <textarea
                      class="w-full px-3 py-2 text-gray-600 border rounded border-gray-200 mt-4 focus:outline-none"
                      rows="4"
                      placeholder="Masukkan deskripsi galeri..."
                      name="description"
                      
                    ></textarea>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Input Halaman Cover
                    </label>

                    <button class=" mt-4 hover:shadow-md text-white bg-blue-600 font-bold mr-4 py-2 px-4 rounded inline-flex items-center content-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.38948 8.98403H6.45648C4.42148 8.98403 2.77148 10.634 2.77148 12.669V17.544C2.77148 19.578 4.42148 21.228 6.45648 21.228H17.5865C19.6215 21.228 21.2715 19.578 21.2715 17.544V12.659C21.2715 10.63 19.6265 8.98403 17.5975 8.98403L16.6545 8.98403"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.0215 2.19057V14.2316"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.10547 5.11877L12.0205 2.19077L14.9365 5.11877"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="text-sm px-2">Upload Gambar</span>
                    </button>
                    <span className="text-sm text-gray-600">
                      <b>*</b>format jpeg & png
                    </span>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block text-left"
                    >
                      Gambar Galeri
                    </label>
                  </div>
                  <article
                    aria-label="File Upload Modal"
                    class="relative h-full flex flex-col bg-white border-2 rounded-md"
                    ondrop="dropHandler(event);"
                    ondragover="dragOverHandler(event);"
                    ondragleave="dragLeaveHandler(event);"
                    ondragenter="dragEnterHandler(event);"
                  >
                    {/* <!-- scroll area --> */}
                    <section class="h-full overflow-auto p-8 w-full flex flex-col">
                      <header class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                        <p class="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                          <span>Drag and drop your</span>&nbsp;
                          <span>picture with format PNG and JPEG or</span>
                        </p>
                        <input
                          id="hidden-input"
                          type="file"
                          multiple
                          class="hidden"
                        />
                        <button
                          id="button"
                          class="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                        >
                          Upload a file
                        </button>
                      </header>

                      <h1 class="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                        To Upload
                      </h1>

                      <ul id="gallery" class="flex flex-1 flex-wrap -m-1">
                        <li
                          id="empty"
                          class="h-full w-full text-center flex flex-col items-center justify-center"
                        >
                          <img
                            class="mx-auto w-32"
                            src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                            alt="no data"
                          />
                          <span class="text-small text-gray-500">
                            No files selected
                          </span>
                        </li>
                      </ul>
                    </section>

                    {/* <!-- sticky footer --> */}
                  </article>
                </div>
              </div>

              {/* <!-- using two similar templates for simplicity in js code --> */}
              <template id="file-template">
                <li class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                  <article
                    tabindex="0"
                    class="group w-full h-full rounded-md focus:outline-none focus:shadow-outline elative bg-gray-100 cursor-pointer relative shadow-sm"
                  >
                    <img
                      alt="upload preview"
                      class="img-preview hidden w-full h-full sticky object-cover rounded-md bg-fixed"
                    />

                    <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                      <h1 class="flex-1 group-hover:text-blue-800"></h1>
                      <div class="flex">
                        <span class="p-1 text-blue-800">
                          <i>
                            <svg
                              class="fill-current w-4 h-4 ml-auto pt-1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                            </svg>
                          </i>
                        </span>
                        <p class="p-1 size text-xs text-gray-700"></p>
                        <button class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800">
                          <svg
                            class="pointer-events-none fill-current w-4 h-4 ml-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              class="pointer-events-none"
                              d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                            />
                          </svg>
                        </button>
                      </div>
                    </section>
                  </article>
                </li>
              </template>

              <template id="image-template">
                <li class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                  <article
                    tabindex="0"
                    class="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm"
                  >
                    <img
                      alt="upload preview"
                      class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed"
                    />

                    <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                      <h1 class="flex-1"></h1>
                      <div class="flex">
                        <span class="p-1">
                          <i>
                            <svg
                              class="fill-current w-4 h-4 ml-auto pt-"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                            </svg>
                          </i>
                        </span>

                        <p class="p-1 size text-xs"></p>
                        <button class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                          <svg
                            class="pointer-events-none fill-current w-4 h-4 ml-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              class="pointer-events-none"
                              d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                            />
                          </svg>
                        </button>
                      </div>
                    </section>
                  </article>
                </li>
              </template>
              {/* Batasan Upload Galeri Foto */}
              <div className="w-full px-8 mb-10">
                <div className="grid grid-cols-2">
                  <button
                    class=" bg-white border border-1 hover:shadow-md text-gray-800 font-bold mr-4 py-2 px-4 rounded items-center content-center"
                    onClick={() => history.goBack()}
                  >
                    <div className="inline-flex">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.91988 2H16.0899C19.6199 2 21.9999 4.271 21.9999 7.66V16.33C21.9999 19.72 19.6199 22 16.0899 22H7.91988C4.37988 22 1.99988 19.72 1.99988 16.33V7.66C1.99988 4.271 4.37988 2 7.91988 2ZM9.72988 12.75H16.0799C16.4999 12.75 16.8299 12.41 16.8299 12C16.8299 11.58 16.4999 11.25 16.0799 11.25H9.72988L12.2099 8.78C12.3499 8.64 12.4299 8.44 12.4299 8.25C12.4299 8.061 12.3499 7.87 12.2099 7.72C11.9199 7.43 11.4399 7.43 11.1499 7.72L7.37988 11.47C7.09988 11.75 7.09988 12.25 7.37988 12.53L11.1499 16.28C11.4399 16.57 11.9199 16.57 12.2099 16.28C12.4999 15.98 12.4999 15.51 12.2099 15.21L9.72988 12.75Z"
                          fill="#130F26"
                        />
                      </svg>

                      <span className="mx-4">Kembali</span>
                    </div>
                  </button>
                  <button
                    class="hover:shadow-md text-gray-800 bg-blue-900 font-bold mr-4 py-2 px-4 rounded items-center content-center"
                    type="submit"
                  >
                    <span className="text-white">Simpan</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TambahGaleri;
