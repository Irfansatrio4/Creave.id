import React from "react";
import DefaultFooter from "../component/DefaultFooter";
import DefaultNavbar from "../component/DefaultNavbar";
import EditProfile from "../component/EditProfile";
import Table from "../component/Table";

function Profile() {
  return (
    <>
      <DefaultNavbar />
      <div className="bg-gray-100">
        <EditProfile />
        <div className="w-9/12 mx-auto bg-gray-100">
          <p className="font-bold text-4xl mb-10">List Pemesanan</p>
        </div>
        <Table />
      </div>
      <DefaultFooter />
    </>
  );
}

export default Profile;
