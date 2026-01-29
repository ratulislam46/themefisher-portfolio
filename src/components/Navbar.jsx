import React from 'react';
import Profile from './Profile';
import Introduction from './Introduction';

const Navbar = () => {
    return (
        <section className='container mx-auto lg:flex gap-1'>

            <div>
                <Profile />
            </div>

            <div className='w-full'>
                <Introduction />
            </div>

        </section>
    );
};

export default Navbar;