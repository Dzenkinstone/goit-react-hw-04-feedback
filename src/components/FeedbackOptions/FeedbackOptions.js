import PropTypes from 'prop-types';

import { ButtonWrapper, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ allFeedback, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {allFeedback.map(feedback => {
        return (
          <Button key={feedback} onClick={() => onLeaveFeedback(feedback)}>
            {feedback.charAt(0).toUpperCase() + feedback.slice(1)}
          </Button>
        );
      })}
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  allFeedback: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
