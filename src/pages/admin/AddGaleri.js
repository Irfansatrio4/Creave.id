import React, { useState } from "react";
import { useHistory } from "react-router";
import Sidebar from "../../component/admin/partials/Sidebar";
import Header from "../../component/admin/partials/Header";
import WelcomeBanner from "../../component/admin/partials/dashboard/WelcomeBanner";
import TableGaleri from "../../component/TableGaleri";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const history = useHistory();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Cards */}
            <div>
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl uppercase font-bold pb-7">Galeri</p>
                </div>
                <div>
                  <button
                    class="hover:shadow-md text-gray-800 bg-yellow-500 font-bold mr-4 py-2 px-8 rounded items-center content-center"
                    onClick={() => history.push("/admin/addgaleri/form")}
                  >
                    <span className="text-black">Tambah Galeri</span>
                  </button>
                </div>
              </div>
              <TableGaleri />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
