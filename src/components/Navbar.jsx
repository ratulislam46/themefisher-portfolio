import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import Profile from './Profile';

const Navbar = () => {
    return (
        <section className='flex'>

            <div>
                <Profile />
            </div>

            <div className='flex mx-2 justify-between w-full border p-4 bg-[#121414]'>
                <div>
                    <div className='flex items-center gap-2'>
                        <IoHomeOutline size={40} className='p-2 bg-gradient-to-l from-[#F89222] to-[#F5BD4D] rounded' /> Home
                    </div>
                </div>
                <div>
                    <button className='border border-[#F5BD4D] text-[#F5BD4D] px-4 py-2 rounded-2xl hover:bg-[#F89222] hover:text-white'>Talk To Me</button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;