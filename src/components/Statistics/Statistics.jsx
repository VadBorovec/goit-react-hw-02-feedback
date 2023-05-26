import PropTypes from 'prop-types';
import { Card, CardHeader, CardTitle } from 'components/UiComponents';
import { List, Item, Label, Value } from './Statistics.styled';
import { getRandomColor } from 'helpers';

export const Statistics = ({ title, stats, id, label, percentage }) => {
  return (
    <Card>
      <CardHeader>{title && <CardTitle>{title}</CardTitle>}</CardHeader>

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ backgroundColor: getRandomColor() }}>
            <Label>{label}</Label>
            <Value>{percentage}%</Value>
          </Item>
        ))}
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
