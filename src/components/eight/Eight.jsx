import React from 'react';
import './Eight-style.css';
import broski from '../../../public/eight/broski.jpg';
import broskiTwo from '../../../public/eight/broskiTwo.jpg';
import Image from 'next/image';

const Eight = () => {
    return (
        <div className='Eighth'>
            <h2 className='main__title'>What our clients <span className='orange-text'>say about us</span></h2>
            <div className='Eighth__cont'>
                <div className='Eighth__img-wrapper'>
                    <Image className='Eighth__broski' src={broski} alt="" />
                    <Image className='Eighth__broski' src={broski} alt="" />
                    <Image className='Eighth__broski' src={broski} alt="" />
                    <Image className='Eighth__broskiTwo' src={broskiTwo} alt="" />
                </div>
                <div className='Eight__info'>
                    <h2>James Taylor</h2>
                    <h4>SEO Company </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Sed eget id odio accumsan in. Pellentesque nunc amet cras vitae. Euismod justo non etiam auctor. Sapien quis feugiat porttitor quis nullam et venenatis sed. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Eight;