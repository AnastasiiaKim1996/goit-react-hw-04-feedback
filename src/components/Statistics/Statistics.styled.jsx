import styled from 'styled-components';

export const StatisticsList = styled.ul`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.36;
  letter-spacing: 0.2em;

  color: #ff0000;
  background-color: transparent;
  border: none;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  & p {
    margin-left: 15px;
  }
`;
