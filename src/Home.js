import React from 'react';
import Navbar from "./components/Navbar";
import './index.css';
import InfoCard  from './components/inforCards';
import HomePage from './components/ImageCover';
import ProgramsContent from './components/Programs';
import Footer from "./components/Footer";

function Home() {
  return (
    <>
    <Navbar/>
    <div className="grid grid-rows-4 h-fit">
      <HomePage />     
      <InfoCard className="pt-8"/>
      <ProgramsContent className="pb-2"/>
      <Footer />
      </div>
    </>
  );
}

export default Home;