import styled from '@emotion/styled';

export const Heading = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.dark};
  text-shadow: 1px 1px 2px ${props => props.theme.colors.gray};

  text-align: center;
  margin-top: ${props => props.theme.spacing(12.5)};
  margin-bottom: ${props => props.theme.spacing(12.5)};

  position: relative;

  &:after {
    display: block;
    content: '';

    position: absolute;
    left: 50%;
    bottom: -${props => props.theme.spacing(4)};
    transform: translateX(-50%);

    width: 50%;
    height: ${props => props.theme.spacing(0.5)};
    border-radius: 1px;
    background-color: ${props => props.theme.colors.gray};
  }
`;
