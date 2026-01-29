import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

const Introduction = () => {
    return (
        <section>
            <div className='flex justify-between w-full px-2 lg:px-4 py-6 bg-[#121414]'>
                <div>
                    <div className='flex items-center gap-2'>
                        <IoHomeOutline size={40} className='p-2 bg-gradient-to-l from-[#F89222] to-[#F5BD4D] rounded' /> Home
                    </div>
                </div>
                <div>
                    <button className='border border-[#F5BD4D] text-[#F5BD4D] px-4 py-2 rounded-2xl hover:bg-[#F89222] hover:text-white'>Talk To Me</button>
                </div>
            </div>

            <div className="space-y-8">
                {/* Introduction Label */}
                <p className='text-[#F89222] font-bold'>INTRODUCTION</p>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                    I'm a Creative Developer & UI/UX Design Expert
                </h1>

                {/* Info Tags */}
                <p className='font-bold'>24 years   /   Robert Smith   /   UK London</p>

                {/* Description */}
                <p className='text-gray-400 font-medium'>Prolific, full stack web developer with a passion for metrics and beating former
                    "best-yets. Prototyped 25 new product features per year for Flexor, Inc.
                    Decreased rework by 22% and costs by 15%. Consistently receive high
                    user experience scores for all web development projects, including a
                    55% increase for Flexor, Inc. Passionate about building world class web
                    applications. One of my sites received a 2020 Webby for Best
                    Navigation and Structure.
                </p>
                <button className='flex gap-2 items-center px-4 py-2 rounded-2xl bg-gradient-to-l from-[#F89222] to-[#F5BD4D]'>Download CV <FiDownload size={24}/></button>
            </div>
        </section>
    );
};

export default Introduction;