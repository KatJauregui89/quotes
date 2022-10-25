import React from 'react';
import quotes from '../quotes.json'
import NextBtn from './NextBtn';

const QuoteBox = ({ indexNum }) => {
    // let randomNum = Math.floor(Math.random() * quotes.length)
    // console.log(randomNum);
    // const [indexNum, setIndexNum] = useState(randomNum)

    // let randomNum = Math.floor(Math.random() * quotes.length)
    // const [indexNum, setIndexNum] = useState(randomNum)

    // const changeIndex = () => {
    //     let random = Math.floor(Math.random() * quotes.length)
    //     setIndexNum(random)
    // }
    console.log(quotes[indexNum].quote);

    return (
        <div>
            <div className="card">
                <i className="fa-solid fa-quote-left"></i>
                <p className='quote'>{quotes[indexNum].quote}</p>
                <span className='author'> {quotes[indexNum].author} </span>


            </div>

        </div >
    );
};

export default QuoteBox;