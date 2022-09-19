import styled from 'styled-components';

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
