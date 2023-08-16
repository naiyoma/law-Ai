import { useState } from "react";

export default function CoverImage() {
    return (
        <div className="bg-cover relative">
        <img
          src={require('../assets/coverimage.jpg')}
          alt=""
          class="w-full h-auto"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-fixed">
          <div className="flex h-full items-center justify-start">
          <div className="text-white">
                <h2 className="mb-6 text-6xl font-semibold">We are UoNLaw</h2>
                <h4 className="mb-6 text-xl font-semibold">Creators and Innovators</h4>
              </div>
          </div>
        </div>
      </div>
        );
}