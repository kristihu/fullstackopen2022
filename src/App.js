import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  console.log(value, "value");
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  );
};

const Statistics = ({ good, neutral, bad, total }) => {
  const positive = (good / total) * 100;
  const avarage = (good - bad) / total;
  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine text={"good"} value={good} />
        </tr>
        <tr>
          <StatisticLine text={"bad"} value={bad} />
        </tr>
        <tr>
          <StatisticLine text={"neutral"} value={neutral} />
        </tr>
        <tr>
          <StatisticLine text={"positive"} value={positive} />
        </tr>
        <tr>
          <StatisticLine text={"avarage"} value={avarage} />
        </tr>
      </tbody>
    </table>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <div>
        <h2>Give feedback</h2>
        <Button handleClick={() => handleGood()} text="Good" />
        <Button handleClick={() => handleBad()} text="Bad" />
        <Button handleClick={() => handleNeutral()} text="Neutral" />
      </div>

      <h2>Statistics</h2>

      {total !== 0 && (
        <Statistics good={good} bad={bad} total={total} neutral={neutral} />
      )}

      {total === 0 && <p>No feedback yet</p>}
    </div>
  );
};

export default App;
