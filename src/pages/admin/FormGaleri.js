import React, { useState } from "react";

import Sidebar from "../../component/admin/partials/Sidebar";
import Header from "../../component/admin/partials/Header";
import WelcomeBanner from "../../component/admin/partials/dashboard/WelcomeBanner";
import AddGaleri from "../../component/admin/partials/dashboard/TambahGaleri";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
              <AddGaleri />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
