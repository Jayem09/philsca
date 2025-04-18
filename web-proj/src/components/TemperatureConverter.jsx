import { useState } from 'react';

export default function TemperatureConverter() {
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
      setFahrenheit(((celsiusNum * 9/5) + 32).toFixed(1));
      setKelvin((celsiusNum + 273.15).toFixed(1));
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
      setCelsius(((fahrenheitNum - 32) * 5/9).toFixed(1));
      setKelvin(((fahrenheitNum - 32) * 5/9 + 273.15).toFixed(1));
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
      setCelsius((kelvinNum - 273.15).toFixed(1));
      setFahrenheit(((kelvinNum - 273.15) * 9/5 + 32).toFixed(1));
    }
  };

  const handleClose = () => {
    console.log("Close button clicked");

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
          />
          <span className="unit-label">K</span>
        </div>
      </div>
    </div>
  );
}
}