import React from 'react'
import DefaultFooter from '../component/DefaultFooter';
import DefaultNavbar from '../component/DefaultNavbar';
import Alasan from '../component/Landing/Alasan';
import Greatings from '../component/Landing/Greatings';
import OrderNow from '../component/Landing/OrderNow';
import Testimoni from '../component/Landing/Testimoni';

export default function Landing (){
  return (
    <>
    <DefaultNavbar/>
    <main className="min-h-screen">
      <Greatings/>
      <Alasan/>
      <OrderNow/>
      <Testimoni/>
    </main>
    <DefaultFooter/>
   </> 
  );
}

