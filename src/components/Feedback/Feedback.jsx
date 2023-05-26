import PropTypes from 'prop-types';
import { Button } from 'components/UiComponents';
import { List, Item } from './Feedback.styled';

export const Feedback = ({ onLeaveFeedback }) => {
  return (
    <List>
      <Item>
        <Button onClick={() => onLeaveFeedback('good')}>Good</Button>
        <Button onClick={() => onLeaveFeedback('neutral')}>Neutral</Button>
        <Button onClick={() => onLeaveFeedback('bad')}>Bad</Button>
      </Item>
    </List>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
