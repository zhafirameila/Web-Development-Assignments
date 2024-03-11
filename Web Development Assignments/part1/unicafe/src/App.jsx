import { useState } from 'react';
import './App.css';

const Button = (props) => {
  return (
      <button type="button" onClick={props.method}>
          {props.text}
      </button>
  )
}

const StatisticsLine = (props) => {
  if (props.text === "positive") {
      return (
          <tr><th>{props.text}</th> <th>{props.value}%</th></tr>
        );
  } else {
      return (
          <tr><th>{props.text}</th> <th>{props.value}</th></tr>
        );
  }
}

const Statistics = (props) => {

  const total = props.g + props.n + props.b;
  const score = (props.g - props.b) / total;
  const pos = props.g / total * 100;

  if (props.g === 0 && props.n === 0 && props.b === 0) {
    return <div><p>no feedbacks given</p></div>;
  } else {
    return (
      <div>
      <table>
        <tbody>
        <StatisticsLine text="good" value={props.g} />
        <StatisticsLine text="neutral" value={props.n} />
        <StatisticsLine text="bad" value={props.b} />
        <StatisticsLine text="all" value={total} />
        <StatisticsLine text="average" value={score.toFixed(1)} />
        <StatisticsLine text="positive" value={pos.toFixed(1)} />
        </tbody>
      </table>
      </div>
    );
  }
}

function App() {
  // saves the clicks
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood(good + 1);
  };

  const incrementNeutral = () => {
    setNeutral(neutral + 1);
  };

  const incrementBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" method={incrementGood} />
      <Button text="neutral" method={incrementNeutral} />
      <Button text="bad" method={incrementBad} />

      <h1>statistics</h1>
      <Statistics g={good} n={neutral} b={bad} />
    </div>
  );
}

export default App;