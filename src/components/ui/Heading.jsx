import React from 'react';

const Heading = ({ title }) => {
    return (
        <div>
            <h2 className='font-bold text-3xl lg:text-4xl'>{title}</h2>
        </div>
    );
};

export default Heading;