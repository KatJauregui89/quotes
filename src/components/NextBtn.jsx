import React, { useState } from 'react';
import quotes from '../quotes.json'

const NextBtn = ({ randomQuote, randomColor }) => {


    return (
        <div>
            <button className='btn' style={{ background: randomColor }} onClick={randomQuote}> <i className="fa-solid fa-chevron-right"></i> </button>
        </div>
    );
};

export default NextBtn;