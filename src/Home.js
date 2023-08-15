import React from 'react';
import Navbar from "./components/Navbar";
import './index.css';
import { TERipple } from 'tw-elements-react';
import InfoCard  from './components/inforCards';

function Home() {
  return (
    <>
    <Navbar/>
    <div className="grid grid-rows-4 grid-flow-col gap-1">
    <div className="bg-cover relative">
      <img
        src={require('./assets/coverimage.jpg')}
        alt=""
        class="w-full h-auto"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
        <div className="flex h-full items-center justify-start">
        <div className="text-white">
              <h2 className="mb-6 text-6xl font-semibold  ">We are UoNLaw</h2>
              <h4 className="mb-6 text-xl font-semibold  ">Creators and Innovators</h4>
            </div>
        </div>
      </div>
    </div>
    {/* <div>
      <InfoCard />
      <div class="grid grid-rows-1 grid-flow-col gap-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
    </div> */}
    </div>
    </>
  );
}

export default Home;