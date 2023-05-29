import PropTypes from 'prop-types';
import { Card, CardHeader, CardTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Card>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      {children}
    </Card>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
