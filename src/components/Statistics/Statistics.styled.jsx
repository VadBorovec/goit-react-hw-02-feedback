import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  font-size: ${props => props.theme.fontSizes.small};

  padding: ${props => props.theme.spacing(10)};
`;
