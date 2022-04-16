import PropTypes from 'prop-types';
import { FeedbackItem, Feedback } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackItem>
      {options.map(option => (
        <li key={option}>
          <Feedback type='button' onClick={() => onLeaveFeedback(option)}>{option}</Feedback>
        </li>
      ))}
    </FeedbackItem>
  );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}