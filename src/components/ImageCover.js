import { useState } from "react";
import AboutSvg from "../assets/about-img.svg";
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="">
        <div className="grid md:grid-cols-2 gap-4 p-4 md:p-8">
          <div className="p-4">
          <h4 className="text-base md:text-2xl font-extrabold dark:text-white ">
            TALN Vision and Mission
            </h4>
            <p className="my-2 md:my-4 text-base md:text-lg text-gray-500 ">
            The Tech AI Law Network envisions a future where technology, artificial intelligence, and the law in Africa coexist harmoniously, fostering
            innovation, protecting individual rights, and promoting equitable access to benefits.
            </p>
            <p className="mb-2 md:mb-4 text-base md:text-lg font-normal text-gray-500 dark:text-gray-400">
            The mission of the Tech AI Law Network is to advance the understanding and application of technology and artificial intelligence laws in Africa. We
            strive to raise awareness, facilitate cross-disciplinary collaboration, and promote research and critical analysis at the intersection of technology,
            artificial intelligence, and the law.
            </p>
            <a href="#" className="inline-flex items-center text-base md:text-lg text-blue-600 dark:text-blue-500 hover:underline">
              <Link to="/programs">Read more</Link>
              <svg className="w-3 h-3.5 md:w-3.5 md:h-3.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
          <div className="md:flex md:items-center md:justify-center p-4">
            <img src={AboutSvg} alt="Logo" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    );
}
