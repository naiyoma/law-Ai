import React from 'react';
import Navbar from "./components/Navbar";
import './index.css';
import InfoCard  from './components/inforCards';
import HomePage from './components/ImageCover';
import ProgramsContent from './components/Programs';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <>
    <Navbar/>
    <div className="grid grid-rows-1 h-fit">
      <HomePage />     
      <InfoCard />
      <ProgramsContent />
      <Footer />
      </div>
    </>
  );
}

export default Home;