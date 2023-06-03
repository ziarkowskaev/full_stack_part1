import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const StatisticLine = props => (
  <tr>
    <td>{props.text} </td>
    <td>{props.value}{props.sign}</td>
  </tr>
)

const Statistics = props => {
  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / all;
  const positive = (props.good * 100) / all;

  if(all!==0){
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text={"Good"} value={props.good} />
            <StatisticLine text={"Neutral"} value={props.neutral} />
            <StatisticLine text={"Bad"} value={props.bad} />
            <StatisticLine text={"All"} value={all} />
            <StatisticLine text={"Average"} value={average} />
            <StatisticLine text={"Positive"} value={positive} sign={"%"} />
          </tbody>
        </table>
      </div>
    );
  }else{
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

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
      <Button handleClick={ () => handleGood()} text={"good"} />
      <Button handleClick={ () => handleNeutral()} text={"neutral"} />
      <Button handleClick={ () => handleBad()} text={"bad"} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
      <button onClick={zero}>Zero out the Statistics</button>
    </div>
  )
}

export default App