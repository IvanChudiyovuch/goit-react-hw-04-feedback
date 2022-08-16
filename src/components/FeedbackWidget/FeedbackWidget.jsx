import React from 'react';

export class FeedbackWidget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>

        <button
          type="button"
          onClick={() => {
            this.handleIncrementGood();
          }}
        >
          Good
        </button>

        <button
          type="button"
          onClick={() => {
            this.handleIncrementNeutral();
          }}
        >
          Neutral
        </button>

        <button
          type="button"
          onClick={() => {
            this.handleIncrementBad();
          }}
        >
          Bad
        </button>

        <h2>Statistics</h2>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad: {this.state.bad}</span>
      </div>
    );
  }
}
