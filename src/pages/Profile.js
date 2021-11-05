import React from "react";
import DefaultFooter from "../component/DefaultFooter";
import DefaultNavbar from "../component/DefaultNavbar";
import EditProfile from "../component/EditProfile";
import Table from "../component/Table";

function Profile() {
  return (
    <>
      <DefaultNavbar />
      <div>
        <EditProfile />
        <Table />
      </div>
      <DefaultFooter />
    </>
  );
}

export default Profile;
