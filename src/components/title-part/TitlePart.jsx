import React from 'react';
import './TitlePart-style.css';
import Image from 'next/image';

const TitlePart = ({img}) => {
    return (
        <div className='TitlePart'>
            <Image className='TitlePart__titleImg' src={img} alt="" />
        </div>
    );
};

export default TitlePart;