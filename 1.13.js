import { useState } from 'react'

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  
  const handleClick = () => {
    setSelected(getRndInteger(0,7))
  };

//points for all 8 anegdots

  const handleVote = () => {
    
  const copy = [...points];
  // increment the value in position 2 by one
  copy[selected] += 1;

  setPoints(copy);
  };

  return (
    <div>
      {anecdotes[selected]}
      <p>This anecdote has {points[selected]} votes.</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default App