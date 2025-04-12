import React, { useState } from 'react';

const ConversionCalculator = () => {
  const [kilograms, setKilograms] = useState('');
  const [grams, setGrams] = useState('');

  const handleKilogramsChange = (e) => {
    const value = e.target.value; 
    console.log("Kilograms input value:", value); // Log the input value
    console.log("Kilograms input value:", value); // Log the input value
    setKilograms(value); 
    console.log("Kilograms state after change:", value); // Log the state after change
    setGrams(value ? value * 1000 : ''); // Convert kg to grams
  };

  return (
    <div className="conversion-calculator">
      <h2>Weight Conversion</h2>
      {console.log("ConversionCalculator component rendered")} {/* Log to confirm rendering */}
      <div>
        <label>
          Amount (kg):
          <input
            type="number"
            value={kilograms}
            onChange={handleKilogramsChange}
            placeholder="Enter amount in kg"
          />
        </label>
      </div>
      <div>
        <label>
          Converted (g):
          <input
            type="number"
            value={grams}
            readOnly
            placeholder="Converted value in grams"
          />
        </label>
      </div>
    </div>
  );
};

export default ConversionCalculator;
