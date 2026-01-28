import React from 'react';
import { IoCall, IoHomeOutline } from 'react-icons/io5';
import { GoPerson } from "react-icons/go";
import { RiMailSettingsLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Image from "next/image";
import { CiFacebook, CiLinkedin, CiInstagram, CiTwitter } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";

const Profile = () => {
    return (
        <section className='border'>
            {/* nav  */}
            <div className='mx-2 w-full mb-10 p-4 bg-[#121414]'>
                <h2 className='font-bold text-2xl flex gap-1'>Daryl <span className='text-[#F89222]'>Smith</span></h2>
                <p className='text-gray-400'>UI/UX design</p>
            </div>

            {/* hero  */}
            <div className='flex items-center justify-between'>
                {/* Icons  */}
                <div className='space-y-8 px-8'>
                    <IoHomeOutline size={20} className='text-gray-500 hover:text-[#F89222] cursor-pointer' />
                    <GoPerson size={20} className='text-gray-500 hover:text-[#F89222] cursor-pointer' />
                    <RiMailSettingsLine size={20} className='text-gray-500 hover:text-[#F89222] cursor-pointer' />
                    <FaRegEdit size={20} className='text-gray-500 hover:text-[#F89222] cursor-pointer' />
                    <IoCall size={20} className='text-gray-500 hover:text-[#F89222] cursor-pointer' />
                </div>

                {/* Profile Image  */}
                <div>
                    <div className="relative w-[368px] h-[504px] bg-black  overflow-hidden">
                        <Image
                            src="/image/profile.png"
                            alt="Profile Picture"
                            fill
                            className="object-cover"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-200/10 via-transparent to-transparent"></div>
                    </div>

                    <div className='flex justify-center gap-3 py-4 bg-black'>
                        <CiFacebook size={24} className='bg-gray-800 rounded-full p-1 cursor-pointer' />
                        <CiLinkedin size={24} className='bg-gray-800 rounded-full p-1 cursor-pointer' />
                        <FaPinterest size={24} className='bg-gray-800 rounded-full p-1 cursor-pointer' />
                        <CiInstagram size={24} className='bg-gray-800 rounded-full p-1 cursor-pointer' />
                        <CiTwitter size={24} className='bg-gray-800 rounded-full p-1 cursor-pointer' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;