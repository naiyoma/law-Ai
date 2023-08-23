import { useState } from "react";
import AboutSvg from "../assets/about-img.svg";

export default function ProgramsContent() {
    return (
      <div className="h-fit">
        <h1 className="text-2xl font-bold text-center mt-8">Guiding Plan</h1>  
        <div className="grid md:grid-cols-2 gap-1 p-2 md:p-8 pb-8">
          <div className="p-4">
          {/* <h2 className="text-2xl md:text-4xl font-extrabold dark:text-white">
              Guiding Plan
            </h2> */}
            <p className="my-2 md:my-4 text-base md:text-lg text-gray-500">
            1. Formation and Membership: Establish the Tech AI Law Network as a recognized organization, open to students and professionals from diverse
            disciplines, inviting membership from Kenyan universities and beyond.            </p>
            <p className="mb-2 md:mb-4 text-base md:text-lg font-normal text-gray-500 dark:text-gray-400">
            2. Awareness Campaigns: Conduct targeted awareness campaigns within Africa , utilizing social media, posters, flyers, and presentations to inform
            students and professionals about the mission, objectives, and benefits of the Tech AI Law Network.</p>
          </div>
          <div className="p-4">
          <p className="my-2 md:my-4 text-base md:text-lg text-gray-500">
            </p>
            <p className="my-2 md:my-4 text-base md:text-lg text-gray-500">
            3. Guest Speaker Series: Organize regular guest speaker sessions featuring industry professionals, legal experts, and scholars to share knowledge
            and insights on technology, artificial intelligence, and the law. Invite both national and international experts to provide diverse perspectives.            </p>
            <p className="mb-2 md:mb-4 text-base md:text-lg font-normal text-gray-500 dark:text-gray-400">
            4. Workshops and Seminars: Host interactive workshops and seminars focused on specific legal topics related to technology, artificial intelligence,
            and machine learning. Encourage active participation, facilitate discussions, and provide practical insights to participants.            </p>
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