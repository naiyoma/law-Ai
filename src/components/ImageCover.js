import { useState } from "react";
import AboutSvg from "../assets/about-img.svg";
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [showModal, setShowModal] = useState(false);
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
            <a href="#" className="inline-flex items-center text-base md:text-lg text-blue-600 dark:text-blue-500 hover:underline" onClick={() => setShowModal(true)}>
              Read more
              <svg className="w-3 h-3.5 md:w-3.5 md:h-3.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
          <div className="md:flex md:items-center md:justify-center p-4">
            <img src={AboutSvg} alt="Logo" className="max-w-full h-auto" />
          </div>
          {showModal ? (
  <>
    {/* Background overlay */}
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-opacity-50 bg-black">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* Modal header */}
          <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h4 className="text-xl font-semibold text-gray-500">
              Objectives:
            </h4>
            <button
                  type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
          </div>

          {/* Modal body */}
          <div className="relative p-6 flex-auto">
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              1. Awareness and Education: Raise awareness among students and professionals about the legal implications and challenges posed by technology,
              artificial intelligence, and machine learning through educational resources, workshops, seminars, and lectures.
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
            2. Collaboration and Networking: Connect students, industry professionals, legal experts, and scholars to foster cross-disciplinary collaboration,
            meaningful discussions, and exchange of ideas on technology and AI law.
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
            3. Knowledge Sharing and Research: Become a central repository of knowledge and resources related to technology, artificial intelligence, and the
            law in Africa. Promote knowledge sharing through publications, research projects, and conferences/symposiums to contribute to the development
            of legal frameworks.
            </p>
            {/* Add more content here */}
          </div>

          {/* Focus Area */}
          <div className="p-5 border-b border-solid border-slate-200 rounded-t">
            <h4 className="text-xl font-semibold text-gray-500">Focus Area:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center text-gray-500">
                <span className="mr-2">&#8226;</span>
                Privacy laws relating to tech
                <span className="mr-2">&#8226;</span>
                Privacy laws relating to tech
              </div>
              {/* Add more focus areas here */}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Background overlay */}
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
) : null}

        </div>
      </div>
    );
}
