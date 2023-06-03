import { useState } from 'react'

const Display = props => <div>{props.text}: {props.value}</div>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h2>Statistics</h2>
      <Display text={"Good"}value={good}/>
      <Display text={"Neutral"}value={neutral}/>
      <Display text={"Bad"}value={bad}/>
    </div>
  )
}

export default App