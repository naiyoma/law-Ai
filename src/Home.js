import React from 'react';
import Navbar from "./components/Navbar";
import './index.css';
import InfoCard  from './components/inforCards';
import HomePage from './components/ImageCover';
import ProgramsContent from './components/Programs';

function Home() {
  return (
    <>
    <Navbar/>
    <div className="grid grid-rows-3 grid-flow-col h-fit">
    <div>
      <HomePage />
      </div>
      <div>
      <InfoCard className="pt-8"/>
      </div>
      <div>
        <ProgramsContent className="pb-2"/>
      </div>
    </div>
    </>
  );
}

export default Home;