import React, { useState } from "react";
import Sidebar from "../../component/admin/partials/Sidebar";
import Header from "../../component/admin/partials/Header";
import DataPernikahan from "../../component/admin/partials/dashboard/DataPernikahan";

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
            <div>
              <DataPernikahan />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
