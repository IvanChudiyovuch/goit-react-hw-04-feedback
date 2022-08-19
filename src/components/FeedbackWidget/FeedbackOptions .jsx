import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <li key={option}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
