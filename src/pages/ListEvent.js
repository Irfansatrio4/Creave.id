import icon_ultah from "../component/img/icon_birthday.png";
import icon_nikah from "../component/img/icon_nikah.png";
import icon_webinar from "../component/img/icon_webinar.png";
import icon_next from "../component/img/icon_next.png";
import DefaultNavbar from "../component/DefaultNavbar";
import DefaultFooter from "../component/DefaultFooter";
import { useHistory } from "react-router";

function App() {
  const history = useHistory();

  return (
    <>
      <DefaultNavbar />
      <div className="App bg-gray-100">
        <div class="pt-16 pb-12">
          <h1 className="text-4xl font-bold">Event Creating</h1>
        </div>
        {/* Batas perubahan baru */}
        <div className="p-10 lg:mx-48 md:mx-60 sm:mx-px grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 pb-36">
          <div class="rounded overflow-hidden border-2 border-gray-200 bg-gray-50 hover:shadow-lg">
            <img src={icon_ultah} className="mx-auto mt-6 p-4" />
            <div class="px-6 py-2">
              <div className="flex justify-between mt-4">
                <div class="font-bold text-xl mt-2 mb-2 ">Ulang Tahun</div>
                <div class="font-bold text-xl mb-2">
                  <button class="hover:shadow-md text-gray-700 bg-gray-200 rounded-full font-bold py-1 px-4 inline-flex items-center content-center" onClick={()=>history.push("/event/ultah")}>
                    <img src={icon_next} className />
                  </button>
                </div>  
              </div>
            </div>
          </div>
          {/* Tanda perubahan */}
          <div class="rounded overflow-hidden border-2 border-gray-200 bg-gray-50 hover:shadow-lg">
            <img src={icon_nikah} className="mx-auto mt-6 p-4" />
            <div class="px-6 py-2">
              <div className="flex justify-between mt-4">
                <div class="font-bold text-xl mt-2 mb-2 ">Pernikahan</div>
                <div class="font-bold text-xl mb-2">
                  <button class="hover:shadow-md text-gray-700 bg-gray-200 rounded-full font-bold py-1 px-4  inline-flex items-center content-center"  onClick={()=>history.push("/event/pernikahan")}>
                    <img src={icon_next} className />
                  </button>
                </div>
              </div>    
            </div>
          </div>
          {/* Tanda perubahan */}
          <div class="rounded overflow-hidden border-2 border-gray-200 bg-gray-50 hover:shadow-lg">
            <img src={icon_webinar} className="mx-auto mt-6 p-4" />
            <div class="px-6 py-2">
              <div className="flex justify-between mt-4">
                <div class="font-bold text-xl mt-2 mb-2 ">Webinar</div>
                <div class="font-bold text-xl mb-2">
                  <button class="hover:shadow-md text-gray-700 bg-gray-200 rounded-full font-bold py-1 px-4  inline-flex items-center content-center" onClick={()=>history.push("/event/webinar")}>
                    <img src={icon_next} className />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Tanda perubahan */}
        </div>
      </div>
      <DefaultFooter />
    </>
  );
}

export default App;
