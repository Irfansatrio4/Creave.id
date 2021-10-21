import React from "react";
import DefaultFooter from "../component/DefaultFooter";
import DefaultNavbar from "../component/DefaultNavbar";
import ListGallery from "../component/gallery/ListGallery";

function Gallery() {
  return (
    <>
    <DefaultNavbar/>
    <main>
      <ListGallery />
    </main>
    <DefaultFooter />
    </>
  );
}

export default Gallery;
