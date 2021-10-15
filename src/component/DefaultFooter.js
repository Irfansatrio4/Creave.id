import H5 from "@material-tailwind/react/Heading5";
import LeadText from "@material-tailwind/react/LeadText";
import Icon from "@material-tailwind/react/Icon";

export default function DefaultFooter() {
  return (
    <>
      <footer className="relative bg-gray-100 pt-8 pb-6 ">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left pt-6">
            <div className="w-full lg:w-6/12 px-4">
              <H5 color="gray">Creave.id</H5>
              <div className="-mt-4">
                <LeadText color="blueGray">
                  Kami akan membuat acara anda menjadi tidak terlupakan.
                </LeadText>
              </div>
              <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                <a
                  href="https://www.facebook.com/CreativeTim"
                  className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-facebook-square" />
                </a>
                <a
                  href="https://www.twitter.com/creativetim"
                  className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-twitter" />
                </a>
                <a
                  href="https://www.instagram.com/creativetimofficial/"
                  className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-medium py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=mtk"
                  className="text-gray-700 hover:text-gray-900 transition-all"
                >
                  Cibode Team
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
