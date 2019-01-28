import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = (props) => {
  return (
    <div className="error-message">
      <div className="error ui compact message">
        {props.errorMessage}
      </div>
    </div>
  );
};

export default ErrorMessage;