import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.backgroundColor};
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 14px;
`;

export const Image = styled.Image`
  flex: 1;
  min-width: 120px;
  min-height: 120px;
  margin: 4px;
  border-radius: 4px;
`;
