import React from 'react';
import s from './Preloader.module.css'
import preloader from '../../../Assets/preloader.svg';

let Preloader = (props) => {
    return <div className={s.container}>
        <div className={s.preloader}>
            <img src={preloader} alt="" />
        </div>
    </div>
}

export default Preloader;