import { useState } from "react";
import AboutSvg from "../assets/about-img.svg";

export default function ProgramsContent() {
    return (
        <div className="h-fit">
        <div className="grid md:grid-cols-2 gap-4 p-4 md:p-8">
          <div className="md:flex md:items-center md:justify-center p-4">
            <img src={AboutSvg} alt="Logo" className="max-w-full h-auto" />
          </div>
          <div className="pt-4 md:pt-0">
            <h2 className="text-2xl md:text-4xl font-extrabold dark:text-white">
              Payments tool for companies
            </h2>
            <p className="my-2 md:my-4 text-base md:text-lg text-gray-500">
              Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.
            </p>
            <p className="mb-2 md:mb-4 text-base md:text-lg font-normal text-gray-500 dark:text-gray-400">
              Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
            </p>
            <a href="#" className="inline-flex items-center text-base md:text-lg text-blue-600 dark:text-blue-500 hover:underline">
              Read more
              <svg className="w-3 h-3.5 md:w-3.5 md:h-3.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
}