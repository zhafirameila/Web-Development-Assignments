import { useState } from 'react';

import './App.css';

const GenerateButton = (props) => {
  return (
    <button type="button" onClick={props.method}>{props.text}</button>
  );
};

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.'
  ];

  const initialVotes = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(initialVotes);
  const [selected, setSelected] = useState(0);

  const setAnecdote = () => {
    const newIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(newIndex);
  };

  const voteAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const maxVote = () => {
    return votes.indexOf(Math.max(...votes));
  };

  const showMax = () => {
    if (votes[maxVote()] > 0) {
      return (
        <div>
          <div>
            <h1>Anecdote with most votes</h1>
          </div>
          <div>
            <div>{anecdotes[maxVote()]}</div>
          </div>
          <div>
            <p>has {votes[maxVote()]} votes</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        <div>
          <h1>Anecdote of the day</h1>
        </div>
        <div>{anecdotes[selected]}</div>
        <div>
          <p>has {votes[selected]} votes</p>
        </div>
        <div>
          <GenerateButton method={voteAnecdote} text="vote anecdote" />
          <GenerateButton method={setAnecdote} text="next anecdote" />
        </div>
      </div>

      <div>
        {showMax()}
      </div>
    </div>
  );
}

export default App;