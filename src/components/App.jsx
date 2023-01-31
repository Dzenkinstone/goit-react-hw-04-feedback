import { useState } from 'react';

import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';

import { Section } from './Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const allFeedback = ['good', 'neutral', 'bad'];

  const onFeedbackChange = type => {
    switch (type) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        console.error('error');
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = (good, total) => {
    return `${((good * 100) / total()).toFixed(0)}%`;
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        allFeedback={allFeedback}
        onLeaveFeedback={onFeedbackChange}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </Section>
  );
};
