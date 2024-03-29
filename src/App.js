import "./App.css";
import Feedback from "./Components/Feedback/Feedback.jsx";
import { useState } from "react";
import Statistics from "./Components/statistics/Statistics";
import Section from "./Components/Section/Section";
const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
const {good,neutral,bad} = state
  const countFeedback = (e) => {
    const target = e.target.id;
    setState((prevState) => ({...prevState ,[target]: prevState[target] + 1 }));
  };
  const countTotalFeedback = () => Object.values(state).reduce((acc, el) => acc + Number(el), 0);

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Number(good * 100) / Number(countTotalFeedback()) : 0;
  };

  const totalFeedback = countTotalFeedback();
  return (
    <Section title="please leave your feedback">
      <Feedback countFeedback={countFeedback} options={Object.keys(state)} />
      {totalFeedback ? (
        <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={countPositiveFeedbackPercentage} />
      ) : (
        <Section title={"There is no feedback"} />
      )}
    </Section>
  );
};

export default App;
