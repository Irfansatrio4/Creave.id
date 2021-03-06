import H5 from "@material-tailwind/react/Heading5";
import LeadText from "@material-tailwind/react/LeadText";
import Icon from "@material-tailwind/react/Icon";
import logo from "../component/img/logo.png";
import { Link } from "react-router-dom";

export default function DefaultFooter() {
  return (
    <>
      <footer className="relative pt-8 pb-6 ">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left pt-6">
            <div className="w-1/12">
              <Link to="/">
                <img
                  src={logo}
                  alt="fotomember"
                  className="mx-auto border-8 border-white"
                />
              </Link>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <H5 color="gray">Creave.id</H5>
              <div className="-mt-4">
                <LeadText color="blueGray">
                  Kami akan membuat acara anda menjadi tidak terlupakan. mari
                  jadikan kami Creave.id sebagai pilihan Event Organizer terbaik
                  Anda.
                </LeadText>
              </div>
              <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                <a
                  href="https://www.instagram.com"
                  className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-facebook-square" />
                </a>
                <a
                  href="https://www.gmail.com.com"
                  className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-twitter" />
                </a>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-medium py-1">
                Copyright ?? {new Date().getFullYear()} Cibode Team
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
