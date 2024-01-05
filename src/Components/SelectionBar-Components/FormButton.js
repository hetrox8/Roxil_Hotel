import React from 'react';

const FormButton = ({ onClick, disabled, buttonText, type, classname }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classname}>
      {buttonText}
    </button>
  );
};

export default FormButton;