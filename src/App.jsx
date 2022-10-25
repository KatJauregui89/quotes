import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './quotes.json'
import NextBtn from './components/NextBtn'

function App() {
  let randomNum = Math.floor(Math.random() * quotes.length)
  const [indexNum, setIndexNum] = useState(randomNum)

  const randomQuote = () => {
    let randomNum = Math.floor(Math.random() * quotes.length)
    setIndexNum(randomNum)
  }

  const colors = ['darkcyan', 'lightgreen', 'black', 'lightskyblue', 'lightcoral']
  let randomColorIndex = Math.floor(Math.random() * colors.length)
  let randomColor = colors[randomColorIndex]

  document.body.style = `background: ${randomColor}`


  return (
    <div className="App">
      <div className="card">
        <QuoteBox indexNum={indexNum} randomColor={randomColor} />
        <NextBtn randomQuote={randomQuote} />
      </div>
    </div>
  )
}

export default App
