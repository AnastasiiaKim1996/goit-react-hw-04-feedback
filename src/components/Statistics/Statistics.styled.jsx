import styled from 'styled-components';

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 18px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  & p {
    margin-left: 15px;
  }
`;
