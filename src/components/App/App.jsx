import React from 'react';
import { Container, Section, Heading } from 'components/UiComponents';
import { Feedback, Statistics, Notification } from 'components';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Section>
        <Container>
          <Heading>Feedback</Heading>
          <Feedback
            title="Please leave feedback"
            onFeedback={this.onFeedback}
          />
          <Heading>Statistics</Heading>
          {totalFeedback > 0 ? (
            <Statistics
              title="Statistics"
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Container>
      </Section>
    );
  }
}
