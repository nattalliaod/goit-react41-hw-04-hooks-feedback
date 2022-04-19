import React, { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const countTotalFeedback = () => {
   return  good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good*100/countTotalFeedback())
  }

  const onLeaveFeedback = value => {
   switch (value) {
      case "good":
        setGood(state => state + 1);
        break;
      case "neutral":
        setNeutral(state => state + 1);
        break;
      case "bad":
        setBad(state => state + 1);
       break;
     
     default:
       return;
    }
  }

    const keys = { good, neutral, bad };
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title='Statistics'>
          {total > 0 ? (<Statistics options={keys} total={total} positivePercentage={positivePercentage} />)
            : <Notification message="There is no feedback" />}
        </Section>
      </>
    );
};
   