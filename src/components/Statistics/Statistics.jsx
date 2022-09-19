import PropTypes from 'prop-types';
import { StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul>
    <StatisticsItem>
      <p>Good: {good}</p>
    </StatisticsItem>

    <StatisticsItem>
      <p>Neutral: {neutral}</p>
    </StatisticsItem>

    <StatisticsItem>
      <p>Bad: {bad}</p>
    </StatisticsItem>

    <StatisticsItem>
      <p>Total: {total}</p>
    </StatisticsItem>

    <StatisticsItem>
      <p>Positive Feedback: {positivePercentage}%</p>
    </StatisticsItem>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}.isRequired;
