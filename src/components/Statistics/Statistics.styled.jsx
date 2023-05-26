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

  padding: ${props => props.theme.spacing(5)};
`;

export const Label = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.gray};
  margin-bottom: 0;
`;

export const Value = styled.span`
  font-size: ${props => props.theme.spacing(8)};
  font-weight: 700;
  color: ${props => props.theme.colors.white};
`;
