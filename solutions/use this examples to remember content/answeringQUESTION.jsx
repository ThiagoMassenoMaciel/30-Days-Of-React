/*
Make a reusable Button component.

Make a reusable InputField component.

Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
*/
const Button = ({ children, onClick, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// InputField.jsx

import React from 'react';

const InputField = ({ type, placeholder, onChange, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;

// AlertBox.jsx

import React from 'react';

const AlertBox = ({ type, message }) => {
  const alertClasses = `alert alert-${type}`;

  return (
    <div className={alertClasses}>
      <p>{message}</p>
    </div>
  );
};

export default AlertBox;

import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';
import AlertBox from './AlertBox';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Example: Validate input and show success/warning alert
    if (inputValue.length > 0) {
      setAlertType('success');
      setAlertMessage('Input valid!');
    } else {
      setAlertType('warning');
      setAlertMessage('Please enter some text.');
    }
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <InputField
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>

      {showAlert && (
        <AlertBox type={alertType} message={alertMessage} />
      )}
    </div>
  );
}

export default App;