import React from 'react';
import Navbar from "./components/Navbar";
import './index.css';
import InfoCard  from './components/inforCards';
import CoverImage from './components/ImageCover';
import ProgramsContent from './components/Programs';

function Home() {
  return (
    <>
    <Navbar/>
    <div className="grid grid-rows-3 grid-flow-col gap-1 bg-rose-300 h-fit">
    <div>
      <ProgramsContent />
      </div>
      <div>
      <InfoCard />
      </div>
      <div>
        <ProgramsContent />
      </div>
      
    </div>
    </>
  );
}

export default Home;