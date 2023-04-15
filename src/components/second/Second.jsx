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
    { val: 20, time: 30, word: 'Experts'},
    { val: 25, time: 25, word: 'Verticals'},
    { val: 50, time: 20, word: 'Regular customers'},
    { val: 110, time: 15, word: 'Completed projects'},
];

const initialCounters = [
    { val: 0, word: 'Experts'},
    { val: 0, word: 'Verticals'},
    { val: 0, word: 'Regular customers'},
    { val: 0, word: 'Completed projects'},
];

const Second = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
      };

      React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <div className={css.second}>
            <div className={css.container}>
                { initialCounters.map(count => {
                    return (
                        <div className={scroll > 0 ? "none" : ""}>
                            {count.val}+
                            <span>{count.word}</span>
                        </div>
                    )
                })}
                {scroll > 0 ? Counters.map(n => <Counter {...n}/>) : ""}
            </div>
        </div>
    );
};

export default Second;