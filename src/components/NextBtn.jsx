import React, { useState } from 'react';
import quotes from '../quotes.json'

const NextBtn = ({ randomQuote }) => {

    // let randomNum = Math.floor(Math.random() * quotes.length)
    // const [indexNum, setIndexNum] = useState(randomNum)

    // const changeIndex = () => {
    //     let random = Math.floor(Math.random() * quotes.length)
    //     setIndexNum(random)
    // }


    return (
        <div>
            <button className='btn' onClick={randomQuote}> <i className="fa-solid fa-chevron-right"></i> </button>
        </div>
    );
};

export default NextBtn;