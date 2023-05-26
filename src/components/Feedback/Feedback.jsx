import PropTypes from 'prop-types';
import { Button, Card, CardHeader, CardTitle } from 'components/UiComponents';
import { List, Item } from './Feedback.styled';

export const Feedback = ({ title, friendList }) => {
  return (
    <Card>
      <CardHeader>{title && <CardTitle>{title}</CardTitle>}</CardHeader>

      <List>
        <Item>
          <Button onClick={() => console.log('Good')}>Good</Button>
          <Button onClick={() => console.log('Netural')}>Netural</Button>
          <Button onClick={() => console.log('Bad')}>Bad</Button>
        </Item>
      </List>
    </Card>
  );
};

Feedback.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
