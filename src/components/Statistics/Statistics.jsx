import PropTypes from 'prop-types';
import { Card, CardHeader, CardTitle } from 'components/UiComponents';
import { List, Item, Label, Value } from './Statistics.styled';
import { getRandomColor } from 'helpers';

export const Statistics = ({
  title,
  stats,
  id,
  label,
  percentage,
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
        <Item key={id} style={{ backgroundColor: getRandomColor() }}>
          Good: {good}
        </Item>
        <Item key={id} style={{ backgroundColor: getRandomColor() }}>
          Neutral: {neutral}
        </Item>
        <Item key={id} style={{ backgroundColor: getRandomColor() }}>
          Bad: {bad}
        </Item>
        <Item key={id} style={{ backgroundColor: getRandomColor() }}>
          Total: {total}
        </Item>
        <Item key={id} style={{ backgroundColor: getRandomColor() }}>
          Positive Feedback: {positivePercentage}%
        </Item>
      </List>
    </Card>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
