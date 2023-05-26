import styled from '@emotion/styled';

export const Text = styled.h2`
  font-size: ${props => props.theme.fontSizes.xlarge};
  color: ${props => props.theme.colors.dark};
  text-shadow: 1px 1px 2px ${props => props.theme.colors.gray};

  text-align: center;
  padding: ${props => props.theme.spacing(12.5)};
`;
