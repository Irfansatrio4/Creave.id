import React from 'react'
import DefaultFooter from '../component/DefaultFooter';
import DefaultNavbar from '../component/DefaultNavbar';
import Greatings from '../component/Landing/Greatings';


export default function Landing (){
  return (
    <>
    <DefaultNavbar/>
    <main className="min-h-screen">
      <Greatings/>
    </main>
    <DefaultFooter/>
   </> 
  );
}

