import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
   return  good + neutral + bad
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good*100/this.countTotalFeedback())
  }

  onLeaveFeedback = (value) => {
    this.setState( prevState  =>({
      [value]: prevState[value] + 1
    }))
  }

  render() {
    const options = Object.keys(this.state);
    const keys = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title='Statistics'>
          {total > 0 ? (<Statistics options={keys} total={total} positivePercentage={positivePercentage} />)
            : <Notification message="There is no feedback" />}
        </Section>
      </>
    );
  }
};
   