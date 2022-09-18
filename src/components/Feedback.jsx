import { Component } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = number => {
    this.setState(prevState => {
      const value = prevState[number];
      return {
        [number]: value + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback()
      ? Math.floor((this.state.good * 100) / this.countTotalFeedback())
      : 0;

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>

        {/* <button onClick={() => this.addFeedback('good')}>good</button>
        <button onClick={() => this.addFeedback('neutral')}>neutral</button>
        <button onClick={() => this.addFeedback('bad')}>bad</button> */}

        {/* <ul>
          <li>good {good}</li>
          <li>neutral {neutral}</li>
          <li>bad {bad}</li>
          <li>total {}</li>
          <li>Positive feedback {}</li>
        </ul> */}
      </>
    );
  }
}
