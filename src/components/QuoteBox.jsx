import React from 'react';
import quotes from '../quotes.json'

const QuoteBox = () => {
    return (
        <div>
            <div className="card">
                <p className='quote'>{quotes[0].quote}</p>
                <span className='author'></span>
            </div>
        </div>
    );
};

export default QuoteBox;