import { useState } from 'react';

// Utility conversion functions
const celsiusToFahrenheit = (c) => (c * 9/5) + 32;
const fahrenheitToCelsius = (f) => (f - 32) * 5/9;
const celsiusToKelvin = (c) => c + 273.15;

export default function TemperatureConverter({ onClose }) {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    
    if (value === '' || isNaN(value)) {
      setFahrenheit('');
      setKelvin('');
    } else {
      const celsiusNum = parseFloat(value);
      setFahrenheit(celsiusToFahrenheit(celsiusNum).toFixed(1));
      setKelvin(celsiusToKelvin(celsiusNum).toFixed(1));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    
    if (value === '' || isNaN(value)) {
      setCelsius('');
      setKelvin('');
    } else {
      const fahrenheitNum = parseFloat(value);
      const celsiusVal = fahrenheitToCelsius(fahrenheitNum);
      setCelsius(celsiusVal.toFixed(1));
      setKelvin(celsiusToKelvin(celsiusVal).toFixed(1));
    }
  };

  const handleKelvinChange = (e) => {
    const value = e.target.value;
    setKelvin(value);
    
    if (value === '' || isNaN(value)) {
      setCelsius('');
      setFahrenheit('');
    } else {
      const kelvinNum = parseFloat(value);
      const celsiusVal = kelvinNum - 273.15;
      setCelsius(celsiusVal.toFixed(1));
      setFahrenheit(celsiusToFahrenheit(celsiusVal).toFixed(1));
    }
  };

  const handleClose = () => {
    // Reset all fields
    setCelsius('');
    setFahrenheit('');
    setKelvin('');
    // Call parent's close handler
    if (onClose) onClose();
  };

  return (
    <div className="calculator-container">
      <button className="closebtn" onClick={handleClose}>×</button>
      <h1 className="calculator-title">Temperature Converter</h1>
      
      <div className="field-group">
        <label className="field-label" htmlFor="celsius">
          Celsius
        </label>
        <div className="input-container">
          <input
            id="celsius"
            className="input-field"
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="0"
          />
          <span className="unit-label">°C</span>
        </div>
      </div>
      
      <div className="field-group">
        <label className="field-label" htmlFor="fahrenheit">
          Fahrenheit
        </label>
        <div className="input-container">
          <input
            id="fahrenheit"
            className="input-field"
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="32"
          />
          <span className="unit-label">°F</span>
        </div>
      </div>
      
      <div className="field-group">
        <label className="field-label" htmlFor="kelvin">
          Kelvin
        </label>
        <div className="input-container">
          <input
            id="kelvin"
            className="input-field"
            type="number"
            value={kelvin}
            onChange={handleKelvinChange}
            placeholder="273.15"
            min="0"
          />
          <span className="unit-label">K</span>
        </div>
      </div>
    </div>
  );
}