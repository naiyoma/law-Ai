import React from 'react';
import { useState } from "react";


export default function Guide() {
    return ( 
        <div className="h-screen">
            
        <div className="grid grid-rows-2 h-screen">
                <div className="bg-cyan-800 md:h-96 pt-28 pr-2">
                <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-none tracking-tight text-gray-900 text-center text-white dark:text-white">
                        Learn more about the TALN Guidelines.
                </h1>
                </div>
                    <div class="flex flex-col mx-14 items-center bg-white border border-gray-200  shadow md:flex-col md:max-w-6xl hover:bg-gray-100 h-fit pb-4">
                            <p class="text-left text-gray-500 dark:text-gray-400 pl-2">1. <span class="italic text-slate-600">Formation and Membership:</span> Establish the Tech AI Law Network as a recognized organization, open to students and professionals from diverse
                                disciplines, inviting membership from Kenyan universities and beyond.</p>
                            <p class="text-left text-gray-500 dark:text-gray-400 pl-2">2. <span class="italic text-slate-600">Awareness Campaigns:</span>Conduct targeted awareness campaigns within Africa , utilizing social media, posters, flyers, and presentations to inform
                                students and professionals about the mission, objectives, and benefits of the Tech AI Law Network.</p>
                            <p class="text-left text-gray-500 dark:text-gray-400 pl-2">3. <span class="italic text-slate-600">Guest Speaker Series:</span>Organize regular guest speaker sessions featuring industry professionals, legal experts, and scholars to share knowledge
                                and insights on technology, artificial intelligence, and the law. Invite both national and international experts to provide diverse perspectives.</p>
                            <p class="text-left text-gray-500 dark:text-gray-400 pl-2">4. <span class="italic text-slate-600">Workshops and Seminars:</span> Host interactive workshops and seminars focused on specific legal topics related to technology, artificial intelligence,
                                and machine learning. Encourage active participation, facilitate discussions, and provide practical insights to participants.</p>
                            <p class="text-left text-gray-500 dark:text-gray-400 pl-2">5. <span class="italic text-slate-600">Research and Publications:</span> Foster a culture of research by encouraging students and professionals to engage in projects and publish papers or
                                articles on topics at the intersection of technology, artificial intelligence, and the law. Provide a platform to showcase their work and share findings
                                with the wider academic community.</p>
                            <p class="text-left text-gray-500 dark:text-gray-400 pl-2">6. <span class="italic text-slate-600">Collaborative Initiatives:</span>Foster collaborations with other student societies, organizations, and institutions within Kenya and across Africa that
                                share similar objectives. Explore opportunities for joint events, knowledge exchange, and collaborative research projects.</p>
                            <p class="text-left text-gray-500 dark:text-gray-400 pl-2">7. <span class="italic text-slate-600">Outreach and Partnerships</span> Engage relevant stakeholders such as government agencies, technology companies, legal firms, and non-profit
                                organizations to establish partnerships and explore avenues for internships, mentorship programs, and career opportunities for Tech AI Law
                                Network members.</p>
                            <p class="text-left text-gray-500 dark:text-gray-400 pl-2">8. <span class="italic text-slate-600">Resource Development:</span> Develop an online repository or website as a comprehensive resource hub, offering articles, legal frameworks, case
                                studies, relevant legislation, and practical tools related to technology, artificial intelligence, and the law. Regularly update and expand the
                                repository to ensure its ongoing value.</p>
                            <p class="text-left text-gray-500 dark:text-gray-400 pl-2">9. <span class="italic text-slate-600">Evaluation and Growth</span>: Conduct regular evaluations and seek feedback from members to assess the impact and effectiveness of the Tech AI Law
                                Network. Use insights gained to refine strategies, identify areas for improvement, and ensure continual growth and relevance.</p>
                    </div>
                <div className="bg-white h-5/6"></div>
            </div>      
        </div>
    );
}
