import React from 'react';
import quotes from '../quotes.json'
import NextBtn from './NextBtn';

const QuoteBox = ({ indexNum }) => {

    return (
        <div>

            <i className="fa-solid fa-quote-left"></i>
            <p className='quote'>{quotes[indexNum].quote}</p>
            <span className='author'>{quotes[indexNum].author} </span>




        </div >
    );
};

export default QuoteBox;