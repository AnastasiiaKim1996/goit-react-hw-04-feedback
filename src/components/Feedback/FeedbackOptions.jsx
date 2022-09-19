import PropTypes from 'prop-types';
import { WrapperBtn, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <WrapperBtn>
    {options.map(option => (
      <Button
        key={option}
        type="button"
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </Button>
    ))}
  </WrapperBtn>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
