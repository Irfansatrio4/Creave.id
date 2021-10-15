import React from "react";
import { Link } from "react-router-dom";

function DefaultNavbar() {
  return (
    <nav className="w-full sticky top-0 z-20  py-8 bg-white shadow-md">
      <div className="w-4/5 mx-auto flex justify-between items-center">
        <div className="font-nunito font-bold text-2xl">
          <Link to="/">Creave.id</Link>
        </div>
        <div className="w-5/6  flex justify-end">
          <ul className="flex justify-around font-nunito text-base w-5/6 ">
            <li>
              <Link to="/Event">Event</Link>
            </li>
            <li>Gallery</li>
            <li>About Us</li>
            <li>Help</li>
            <li>
              <Link to="/Login"> Login </Link>
            </li>
            <li>
              <Link to="/Regis"> Register </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DefaultNavbar;
