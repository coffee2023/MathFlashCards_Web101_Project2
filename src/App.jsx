import { use, useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'


function App() {
  const cards = [
    {
      question: <Card text = "1 + 1"  color = "pink"/>,
      answer: <Card text = "2" color = "pink"/>
    },
    {
      question: <Card text = "2 * 2"  color = "blue"/>,
      answer: <Card text = "4" color = "blue"/>
    },
    {
      question: <Card text = "10 / 2"  color = "purple"/>,
      answer: <Card text = "5" color = "purple"/>
    },
    {
      question: <Card text = "24 - 2"  color = "green"/>,
      answer: <Card text = "22" color = "green"/>
    },
    {
      question: <Card text = "16 + 2"  color = "pink"/>,
      answer: <Card text = "18" color = "pink"/>
    }
  ];


  //----------CARD & FLIP USESTATES ----------
  const [card, setCard] = useState(0);//index will start at 0 for the cards array
  const [flip, setFlip] = useState(false);//originally sets flip to false
  
  const prevCard =()=>{
    setCard(card-1);//will decrease the index of the cardsList array so that the previous card is displayed
    setFlip(false);//resets to the front of card everytime prev btn clicked
  }

  const nextCard = () =>{
    setCard(card+1);//next card in array
    setFlip(false);//reset so front of next card shows
  }

  return (
    <div>
      <h1>Math Flashcards</h1>
      <h2>Try solving these easy math problems</h2>
      <h2>Number of Cards: {cards.length}</h2>
      <div className="card-container">
        
        <div onClick={ ()=> setFlip(!flip)} className="card">
          {flip ? cards[card].answer : cards[card].question}
        </div>

        <button onClick={prevCard}>Previous Card</button>
        <button onClick={nextCard}>Next Card</button>
      </div>
      <br></br><br></br>
    </div>
  )
}

export default App
