import React from 'react';
import css from './Eight-style.module.css';
import broski from '../../../public/eight/broski.jpg';
import broskiTwo from '../../../public/eight/broskiTwo.jpg';
import Image from 'next/image';

const Eight = () => {
    return (
        <div className={css.eight}>
            <div className={css.container}>
                <h2 className='main__title'>What our clients <span className='orange-text'>say about us</span></h2>
                <div className={css.eight__content}>
                    <div className={css.eight__wrapper}>
                        <Image className={css.eight__broski} src={broski} alt="woman in black dress" />
                        <Image className={css.eight__broski} src={broski} alt="woman in black dress" />
                        <Image className={css.eight__broski} src={broski} alt="woman in black dress" />
                        <Image className={css.eight__broski_two} src={broskiTwo} alt="the man in a suit" />
                    </div>
                    <div className={css.eight__info}>
                        <h2>James Taylor</h2>
                        <h4>SEO Company </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Sed eget id odio accumsan in. Pellentesque nunc amet cras vitae. Euismod justo non etiam auctor. Sapien quis feugiat porttitor quis nullam et venenatis sed. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eight;