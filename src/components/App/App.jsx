import React from 'react';
import { Container, Section, Heading } from 'components/UiComponents';
import { Statistics, Feedback } from 'components';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedback = state => {
    this.setState(prevState => ({
      [state]: (prevState[state] += 1),
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
    const options = Object.keys(this.state);
    return (
      <Section>
        <Container>
          <Heading marginTop="50px" marginBottom="50px" textAlign="center">
            Please leave feedback
          </Heading>
          <Feedback
            title="Feedback"
            friendList={friends}
            options={options}
            onLeaveFeedback={this.onFeedback}
          />
          <Heading marginTop="50px" marginBottom="50px" textAlign="center">
            Statistics
          </Heading>
          <Statistics
            title="Statistics"
            stats={data}
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Container>
      </Section>
    );
  }
}
