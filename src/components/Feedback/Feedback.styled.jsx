import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: 100%;

  padding: ${props => props.theme.spacing(4)};
  overflow: hidden;

  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;

  background-color: ${props => props.theme.colors.white};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;
