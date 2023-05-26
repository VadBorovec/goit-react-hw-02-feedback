import PropTypes from 'prop-types';
import { Button, Card, CardHeader, CardTitle } from 'components/UiComponents';
import { List, Item } from './Feedback.styled';

export const Feedback = ({ title, onFeedback }) => {
  return (
    <Card>
      <CardHeader>{title && <CardTitle>{title}</CardTitle>}</CardHeader>
      <List>
        <Item>
          <Button onClick={() => onFeedback('good')}>Good</Button>
          <Button onClick={() => onFeedback('neutral')}>Neutral</Button>
          <Button onClick={() => onFeedback('bad')}>Bad</Button>
        </Item>
      </List>
    </Card>
  );
};

Feedback.propTypes = {
  title: PropTypes.string,
  onFeedback: PropTypes.func.isRequired,
};
