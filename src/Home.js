import React from 'react';
import Navbar from "./components/Navbar";
import './index.css';
import InfoCard  from './components/inforCards';
import CoverImage from './components/ImageCover';

function Home() {
  return (
    <>
    <Navbar/>
    <div className="grid grid-rows-4 grid-flow-col gap-1">
    <CoverImage />
    <div>
    <InfoCard />
    </div>
    </div>
    </>
  );
}

export default Home;