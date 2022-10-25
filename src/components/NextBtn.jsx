import React, { useState } from 'react';
import quotes from '../quotes.json'

const NextBtn = ({ randomQuote }) => {


    return (
        <div>
            <button className='btn' onClick={randomQuote}> <i className="fa-solid fa-chevron-right"></i> </button>
        </div>
    );
};

export default NextBtn;