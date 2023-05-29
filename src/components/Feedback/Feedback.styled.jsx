import styled from '@emotion/styled';

export const List = styled.ul`
  /* display: flex;
  align-items: center;
  justify-content: center; */

  /* background-color: ${props => props.theme.colors.white}; */
  /* border-radius: 0 0 ${props => props.theme.spacing(3)}; */

  /* padding: ${props => props.theme.spacing(3)} ${props =>
    props.theme.spacing(5)}; */

  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); */
  /* column-gap: ${props => props.theme.spacing(2)}; */
  row-gap: ${props => props.theme.spacing(2)};
`;

export const Item = styled.li`
  /* display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(4)}; */
  width: 100%;

  padding: ${props => props.theme.spacing(6)};
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
