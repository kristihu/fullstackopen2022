import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(7));
  const [winner, setWinner] = useState(null);

  const random = () => {
    const newAnecdote = Math.floor(Math.random() * anecdotes.length);

    setSelected(newAnecdote);
  };

  const vote = () => {
    const points = [...votes];
    points[selected] += 1;
    setVotes(points);
    console.log(votes);
    const max = points.indexOf(Math.max(...points));
    setWinner(max);
    console.log(max, "max");
  };

  return (
    <div>
      {anecdotes[selected]}
      <br />
      votes: {votes[selected]}
      <br></br>
      <button onClick={random}>Random line</button>
      <button onClick={vote}>Vote</button>
      <h2>The most voted</h2>
      <p>{anecdotes[winner]}</p>
    </div>
  );
};

export default App;
