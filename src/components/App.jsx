import { useState } from 'react';
import { Section } from './FeedbackWidget/Section';
import { Statistics } from './FeedbackWidget/Statistics';
import { FeedbackOptions } from './FeedbackWidget/FeedbackOptions ';
import { Notification } from './FeedbackWidget/Notification';

export const App = () => {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = option => {
    setState(prevState => ({
      ...prevState,
      [option]: state[option] + 1,
    }));
  };

  // const onLeaveFeedbackGood = () => {
  //   setGood(prevState => prevState + 1);
  // };

  // const onLeaveFeedbackNeutral = () => {
  //   setNeutral(prevState => prevState + 1);
  // };

  // const onLeaveFeedbackBad = () => {
  //   setBad(prevState => prevState + 1);
  // };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  console.log('total', countTotalFeedback());

  const countPositiveFeedbackPercentage = () => {
    return (state.good * 100) / countTotalFeedback();
  };

  console.log('positiv', countPositiveFeedbackPercentage());

  const options = Object.keys(state);
  const total = countTotalFeedback();
  const positivePercentage =
    Math.round(countPositiveFeedbackPercentage()) > 0
      ? Math.round(countPositiveFeedbackPercentage())
      : 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {console.log(countTotalFeedback()) ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification massage="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
