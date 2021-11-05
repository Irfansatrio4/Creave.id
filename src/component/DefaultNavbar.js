import React from "react";
import { Link } from "react-router-dom";

function DefaultNavbar() {
  return (
    <nav className="w-full sticky top-0 z-20  py-5 bg-white shadow-md">
      <div className="w-4/5 mx-auto flex justify-between items-center">
        <div className="font-nunito font-bold text-2xl">
          <Link to="/">Creave.id</Link>
        </div>
        <div className="w-5/6  flex justify-end">
          <ul className="flex justify-around font-nunito text-base w-5/6 ">
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
            <li>
              <Link to="/Login"> Login </Link>
            </li>
            <li className="bg-blue-300">
              <Link to="/Regis"> Register </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DefaultNavbar;
