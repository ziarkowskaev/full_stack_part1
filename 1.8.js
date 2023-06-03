import { useState } from 'react'

const Display = props => <div>{props.text}: {props.value}{props.sign}</div>

const Statistics = props => {
  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / all;
  const positive = (props.good * 100) / all;

  return (
    <div>
      <h2>Statistics</h2>
      <Display text={"Good"} value={props.good} />
      <Display text={"Neutral"} value={props.neutral} />
      <Display text={"Bad"} value={props.bad} />
      <Display text={"All"} value={all} />
      <Display text={"Average"} value={average} />
      <Display text={"Positive"} value={positive} sign={"%"} />
    </div>
  );
};

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

  const zero = ()=> {
    setBad(0)
    setGood(0)
    setNeutral(0)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
      <button onClick={zero}>Zero the Statistics</button>
    </div>
  )
}

export default App