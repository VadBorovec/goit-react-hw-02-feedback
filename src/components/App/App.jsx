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

  render() {
    return (
      <Section>
        <Container>
          <Heading marginTop="50px" marginBottom="50px" textAlign="center">
            Please leave feedback
          </Heading>
          <Feedback title="Feedback" friendList={friends} />
          <Heading marginTop="50px" marginBottom="50px" textAlign="center">
            Statistics
          </Heading>
          <Statistics title="Statistics" stats={data} />
        </Container>
      </Section>
    );
  }
}
