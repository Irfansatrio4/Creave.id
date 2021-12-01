import React from "react";
import { Link } from "react-router-dom";
import logo from "../component/img/logonav.png";
import Cookies from "js-cookie";
import { useHistory } from "react-router";

function DefaultNavbar() {
  const loged = Cookies.get("token");
  const history = useHistory();

  function logOut() {
    swal({
      title: "Log out berhasil",
      icon: "success",
    });
    Cookies.remove("token");
    window.location.reload();
    history.push("/");
  }
  return loged ? (
    <nav className="w-full sticky top-0 z-20  py-5 bg-white shadow-md">
      <div className="w-4/5 mx-auto flex justify-between items-center">
        <div className="w-1/12 ">
          <Link to="/">
            <img
              src={logo}
              alt="fotomember"
              className="mx-auto border-8 border-white"
            />
          </Link>
        </div>
        <div className="w-5/6  flex justify-end">
          <ul className="flex justify-around items-center font-nunito text-base w-5/6 ">
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/Aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/Help">Help</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>

            {/* {/* <li className="border-2 rounded-sm py-2 px-5">
              <Link to="/Login"> Login </Link>
            </li> */}
            <li className="bg-blue-900 text-white rounded-sm py-2 px-3">
              <button onClick={logOut}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="w-full sticky top-0 z-20  py-5 bg-white shadow-md">
      <div className="w-4/5 mx-auto flex justify-between items-center">
        <div className="w-1/12 ">
          <Link to="/">
            <img
              src={logo}
              alt="fotomember"
              className="mx-auto border-8 border-white"
            />
          </Link>
        </div>
        <div className="w-5/6  flex justify-end">
          <ul className="flex justify-around items-center font-nunito text-base w-5/6 ">
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/Aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/Help">Help</Link>
            </li>
            {/* <li>
          <Link to="/profile">Profile</Link>
        </li> */}
            <li className="border-2 rounded-sm py-2 px-5">
              <Link to="/Login"> Login </Link>
            </li>
            <li className="bg-blue-900 text-white rounded-sm py-2 px-3">
              <Link to="/Regis"> Register </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DefaultNavbar;
