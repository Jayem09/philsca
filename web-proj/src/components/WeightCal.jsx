import React, { useState, useEffect } from 'react';
import './WeightCal.css';

const WeightCal = ({ onClose }) => {
  const [amount, setAmount] = useState('1');
  const [result, setResult] = useState('1000');

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);

    if (value === '' || isNaN(value)) {
      setResult('');
    } else {
      const calculatedResult = parseFloat(value) * 1000; // Fixed syntax here
      setResult(calculatedResult.toLocaleString('en-US', {
        maximumFractionDigits: 2
      }));
    }
  };

  useEffect(() => {
    const firstInput = document.querySelector('.input-field');
    if (firstInput) {
      firstInput.focus();
    }
  }, []);

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <div className="calculator-container">
      <button className="closebtn" onClick={handleClose}>×</button>
      <h1 className="calculator-title">Weight Converter</h1>
      <div className="conversion-calculator">
        <div className="field-group">
          <label className="field-label">Amount</label>
          <div className="input-container">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="input-field"
              placeholder="Enter value"
            />
          </div>
        </div>

        <div className="field-group">
          <label className="field-label">From</label>
          <div className="input-container">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="input-field"
              placeholder="Enter kilograms"
            />
            <span className="unit-label">KG</span>
          </div>
          <div className="field-group">
            <label className="field-label">Result</label>
            <div className="input-container">
              <input
                type="text"
                value={result}
                readOnly
                className="input-field"
                placeholder="Result in grams"
              />
              <span className="unit-label">G</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightCal;