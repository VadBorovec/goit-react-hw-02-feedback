import PropTypes from 'prop-types';
import { Card, CardHeader, CardTitle } from 'components/UiComponents';
import { List, Item } from './Statistics.styled';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Card>
      <CardHeader>{title && <CardTitle>{title}</CardTitle>}</CardHeader>

      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {total}</Item>
        <Item>Positive Feedback: {positivePercentage}%</Item>
      </List>
    </Card>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
