"use client";
import React, { useEffect, useState } from 'react';
import css from'./Second-style.module.css';

function Counter({ val, time, word }) {
    const [curVal, setCurrVal ] = useState(0);

    useEffect(() => {
        curVal !== val && setTimeout(setCurrVal, time, curVal + 1);
    }, [curVal])
    return (
        <div>
            {curVal}+
            <span>{word}</span>
        </div>
    )
}

const Counters = [
    { val: 20, time: 25, word: 'Experts'},
    { val: 25, time: 20, word: 'Verticals'},
    { val: 50, time: 15, word: 'Regular customers'},
    { val: 110, time: 10, word: 'Completed projects'},
];

const Second = () => {
    return (
        <div className={css.second}>
            <div className={css.container}>
                {Counters.map(n => <Counter {...n}/>)}
            </div>
        </div>
    );
};

export default Second;