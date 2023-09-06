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
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h4 className="text-xl font-semibold">
                  Objectives:
                  </h4>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
              <p class="mb-3 text-gray-500 dark:text-gray-400">1. Awareness and Education: Raise awareness among students and professionals about the legal implications and challenges posed by technology,
              artificial intelligence, and machine learning through educational resources, workshops, seminars, and lectures.</p>
              <p class="text-gray-500 dark:text-gray-400">2. Collaboration and Networking: Connect students, industry professionals, legal experts, and scholars to foster cross-disciplinary collaboration,
              meaningful discussions, and exchange of ideas on technology and AI law.</p>
              <p class="mb-3 text-gray-500 dark:text-gray-400">3. Knowledge Sharing and Research: Become a central repository of knowledge and resources related to technology, artificial intelligence, and the
              law in Africa. Promote knowledge sharing through publications, research projects, and conferences/symposiums to contribute to the development
              of legal frameworks.</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
      </div>
    );
}
