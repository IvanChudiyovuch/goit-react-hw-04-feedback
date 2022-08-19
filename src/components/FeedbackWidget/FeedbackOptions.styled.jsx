import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  text-align: center;
  justify-content: flex-start;
  gap: ${p => p.theme.space[3]}px;
  padding: 0;
  margin: 0;
  border-radius: ${p => p.theme.radii.normal};
  list-style-type: none;
`;

export const Button = styled.button`
  cursor: pointer;
`;
