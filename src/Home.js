import React from 'react';
import Navbar from "./components/Navbar";
import './index.css';


function Home() {
  return (
    <>
    <Navbar/>
    <div class="grid grid-rows-4 grid-flow-col gap-1">
    <div
    class="bg-cover"
    style={{ backgroundImage: `url(${require('./assets/coverimage.jpg')})` }}
  >
    01
  </div>
    <div>02</div>
  
   
    </div>
    </>
  );
}

export default Home;