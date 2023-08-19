// import { useState } from "react";

// export default function CoverImage() {
//     return (
//     <div className="t">
//       <h1>Wow</h1>
//           {/* <h1 class="mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">We invest in the world’s potential</h1>
//           <p class="text-base sm:text-lg md:text-xl  font-normal text-gray-500 sm:px-8 md:px-16 lg:px-8 text-center dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
//           <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
//             Learn more
//             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//           </a> */}
//       </div>
//         );
// }



import { useState } from "react";
import AboutSvg from "../assets/about-img.svg";

export default function HomePage() {
    return (
        <div className="">
        <div className="grid md:grid-cols-2 gap-4 p-4 md:p-8">
          <div className="p-4">
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
          <div className="md:flex md:items-center md:justify-center p-4">
            <img src={AboutSvg} alt="Logo" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    );
}