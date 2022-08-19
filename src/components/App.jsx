import React, { Component } from 'react';
import { Section } from './FeedbackWidget/Section';
import { Statistics } from './FeedbackWidget/Statistics';
import { FeedbackOptions } from './FeedbackWidget/FeedbackOptions ';
import { Notification } from './FeedbackWidget/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (this.state.good * 100) / this.countTotalFeedback();
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage =
      Math.round(this.countPositiveFeedbackPercentage()) > 0
        ? Math.round(this.countPositiveFeedbackPercentage())
        : 0;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification massage="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
