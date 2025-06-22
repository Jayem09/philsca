import React, { useState, useEffect } from 'react';

function AtmosphericPropertiesCalculator() {
  const [altitude, setAltitude] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [airDensity, setAirDensity] = useState(0);
  const [airPressure, setAirPressure] = useState(0);
  const [speedOfSound, setSpeedOfSound] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [aircraftPosition, setAircraftPosition] = useState(0);
  const [buildingHeight, setBuildingHeight] = useState({ count: 0, type: '' });

  const calculateTemperature = (altitude) => {
    const lapseRate = 6.5; // °C/km
    const T0 = 15; // °C (temperature at sea level)
    return T0 - (lapseRate * altitude / 1000);
  };

  const calculateAirDensity = (altitude, temperature) => {
    const P0 = 101325; // Pa (pressure at sea level)
    const R = 287.05; // J/kg·K (gas constant)
    const T = temperature + 273.15; // K (temperature in Kelvin)
    return P0 / (R * T) * (1 - (0.0000225577 * altitude));
  };

  const calculateAirPressure = (altitude) => {
    const P0 = 101325; // Pa (pressure at sea level)
    const lapseRate = 6.5; // °C/km
    const T0 = 15; // °C (temperature at sea level)
    const g = 9.81; // m/s² (acceleration due to gravity)
    const M = 0.0289645; // kg/mol (molar mass of air)
    const R = 287.05; // J/kg·K (gas constant)
    return P0 * (1 - (lapseRate * altitude / (T0 + 273.15))) ** (g * M / (R * lapseRate / 1000));
  };

  const calculateSpeedOfSound = (altitude, temperature) => {
    const gamma = 1.4; // adiabatic index
    const R = 287.05; // J/kg·K (gas constant)
    const T = temperature + 273.15; // K (temperature in Kelvin)
    return Math.sqrt(gamma * R * T);
  };

  const calculateWindSpeed = (altitude) => {
    // Simplified wind speed model based on altitude
    const baseWind = 5; // m/s at ground level
    const windGradient = 0.003; // increase per meter
    const gustFactor = Math.sin(altitude * 0.001) * 2; // some variation
    return Math.max(0, baseWind + (altitude * windGradient) + gustFactor);
  };

  const calculateBuildingHeight = (altitude) => {
    if (altitude < 3) return { count: 0, type: 'Ground Level' };
    if (altitude < 10) return { count: Math.floor(altitude / 3), type: '1-storey houses' };
    if (altitude < 30) return { count: Math.floor(altitude / 3), type: '2-storey houses' };
    if (altitude < 100) return { count: Math.floor(altitude / 10), type: '10-storey buildings' };
    if (altitude < 300) return { count: Math.floor(altitude / 30), type: '30-storey skyscrapers' };
    return { count: Math.floor(altitude / 100), type: '100-storey towers' };
  };

  const updateCalculations = (newAltitude) => {
    const newTemperature = calculateTemperature(newAltitude);
    setTemperature(newTemperature);
    setAirDensity(calculateAirDensity(newAltitude, newTemperature));
    setAirPressure(calculateAirPressure(newAltitude));
    setSpeedOfSound(calculateSpeedOfSound(newAltitude, newTemperature));
    setWindSpeed(calculateWindSpeed(newAltitude));
    setBuildingHeight(calculateBuildingHeight(newAltitude));
    
    // Update aircraft position (scale altitude to fit simulator height)
    const maxSimulatorHeight = 300; // pixels
    const maxAltitude = 2000; // meters
    setAircraftPosition(Math.min((newAltitude / maxAltitude) * maxSimulatorHeight, maxSimulatorHeight));
  };

  const handleAltitudeChange = (event) => {
    const newAltitude = parseFloat(event.target.value) || 0;
    setAltitude(newAltitude);
    updateCalculations(newAltitude);
  };

  const handleSimulatorClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickY = event.clientY - rect.top;
    const simulatorHeight = 300;
    const relativeY = simulatorHeight - clickY; // Invert Y axis
    const newAltitude = Math.max(0, (relativeY / simulatorHeight) * 2000);
    setAltitude(Math.round(newAltitude));
    updateCalculations(newAltitude);
  };

  // Initialize calculations on mount
  useEffect(() => {
    updateCalculations(0);
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 50%, #f3e8ff 100%)',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const cardStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    backdropFilter: 'blur(10px)'
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px'
  };

  const subtitleStyle = {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '1.1rem',
    marginBottom: '40px'
  };

  const mainGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gap: '40px',
    marginBottom: '40px'
  };

  const inputContainerStyle = {
    marginBottom: '30px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '12px'
  };

  const inputWrapperStyle = {
    position: 'relative'
  };

  const inputStyle = {
    width: '100%',
    padding: '16px 60px 16px 24px',
    fontSize: '18px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    outline: 'none',
    transition: 'all 0.2s',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxSizing: 'border-box',
    color: '#1f2937'
  };

  const unitStyle = {
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    fontWeight: '500'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  };

  const simulatorStyle = {
    position: 'relative',
    width: '100%',
    height: '300px',
    background: 'linear-gradient(to bottom, #87CEEB 0%, #98D8E8 50%, #90EE90 100%)',
    borderRadius: '16px',
    border: '2px solid #e5e7eb',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)'
  };

  const buildingStyle = (height, left, color) => ({
    position: 'absolute',
    bottom: '0',
    left: `${left}%`,
    width: '40px',
    height: `${height}px`,
    backgroundColor: color,
    borderRadius: '2px 2px 0 0',
    border: '1px solid rgba(0,0,0,0.2)'
  });

  const aircraftStyle = {
    position: 'absolute',
    bottom: `${aircraftPosition}px`,
    right: '20px',
    fontSize: '24px',
    transition: 'bottom 0.3s ease',
    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
  };

  const altitudeIndicatorStyle = {
    position: 'absolute',
    right: '10px',
    top: '10px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#1f2937'
  };

  const windIndicatorStyle = {
    position: 'absolute',
    left: '10px',
    top: '10px',
    backgroundColor: 'rgba(59, 130, 246, 0.9)',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold'
  };

  const buildingInfoStyle = {
    position: 'absolute',
    left: '10px',
    bottom: '10px',
    backgroundColor: 'rgba(16, 185, 129, 0.9)',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: 'bold',
    maxWidth: '200px'
  };

  const createCardStyle = (gradient) => ({
    background: gradient,
    padding: '20px',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  });

  const cardHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px'
  };

  const dotStyle = (color) => ({
    width: '12px',
    height: '12px',
    backgroundColor: color,
    borderRadius: '50%',
    marginRight: '12px'
  });

  const cardTitleStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1f2937'
  };

  const valueStyle = (color) => ({
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: color,
    marginBottom: '4px'
  });

  const unitTextStyle = {
    fontSize: '12px',
    color: '#6b7280'
  };

  const subValueStyle = {
    fontSize: '11px',
    color: '#9ca3af',
    marginTop: '4px'
  };

  const infoBoxStyle = {
    padding: '16px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    marginTop: '30px'
  };

  const infoTitleStyle = {
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '8px'
  };

  const infoTextStyle = {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '1.5'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div>
          <h1 style={titleStyle}>
            Atmospheric Properties Calculator
          </h1>
          <p style={subtitleStyle}>
            Calculate atmospheric conditions and fly through different altitudes
          </p>
        </div>

        <div style={mainGridStyle}>
          <div>
            <div style={inputContainerStyle}>
              <label style={labelStyle}>
                Altitude (meters)
              </label>
              <div style={inputWrapperStyle}>
                <input
                  type="number"
                  value={altitude}
                  onChange={handleAltitudeChange}
                  placeholder="Enter altitude in meters"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
                <div style={unitStyle}>m</div>
              </div>
              <div style={{ marginTop: '8px', fontSize: '14px', color: '#6b7280' }}>
                Range: 0 - 20,000 meters (troposphere)
              </div>
            </div>

            <div style={gridStyle}>
              <div style={createCardStyle('linear-gradient(135deg, #fef2f2, #fef7e0)')}>
                <div style={cardHeaderStyle}>
                  <div style={dotStyle('#ef4444')}></div>
                  <h3 style={cardTitleStyle}>Temperature</h3>
                </div>
                <div style={valueStyle('#dc2626')}>
                  {temperature.toFixed(2)}
                </div>
                <div style={unitTextStyle}>degrees Celsius</div>
              </div>

              <div style={createCardStyle('linear-gradient(135deg, #eff6ff, #f0fdfa)')}>
                <div style={cardHeaderStyle}>
                  <div style={dotStyle('#3b82f6')}></div>
                  <h3 style={cardTitleStyle}>Air Density</h3>
                </div>
                <div style={valueStyle('#2563eb')}>
                  {airDensity.toFixed(4)}
                </div>
                <div style={unitTextStyle}>kg/m³</div>
              </div>

              <div style={createCardStyle('linear-gradient(135deg, #f0fdf4, #ecfdf5)')}>
                <div style={cardHeaderStyle}>
                  <div style={dotStyle('#10b981')}></div>
                  <h3 style={cardTitleStyle}>Air Pressure</h3>
                </div>
                <div style={valueStyle('#059669')}>
                  {airPressure.toFixed(0)}
                </div>
                <div style={unitTextStyle}>Pascal</div>
                <div style={subValueStyle}>
                  {(airPressure / 101325 * 100).toFixed(1)}% of sea level
                </div>
              </div>

              <div style={createCardStyle('linear-gradient(135deg, #faf5ff, #fdf2f8)')}>
                <div style={cardHeaderStyle}>
                  <div style={dotStyle('#8b5cf6')}></div>
                  <h3 style={cardTitleStyle}>Speed of Sound</h3>
                </div>
                <div style={valueStyle('#7c3aed')}>
                  {speedOfSound.toFixed(1)}
                </div>
                <div style={unitTextStyle}>m/s</div>
                <div style={subValueStyle}>
                  {(speedOfSound * 3.6).toFixed(1)} km/h
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>
              Flight Altitude Simulator
            </h3>
            <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
              Click anywhere in the sky to move the aircraft to that altitude
            </p>
            
            <div style={simulatorStyle} onClick={handleSimulatorClick}>
              {/* Buildings */}
              <div style={buildingStyle(20, 5, '#8B4513')}></div>
              <div style={buildingStyle(35, 15, '#A0522D')}></div>
              <div style={buildingStyle(60, 25, '#696969')}></div>
              <div style={buildingStyle(45, 35, '#778899')}></div>
              <div style={buildingStyle(80, 45, '#2F4F4F')}></div>
              <div style={buildingStyle(25, 55, '#8B4513')}></div>
              <div style={buildingStyle(100, 65, '#1C1C1C')}></div>
              <div style={buildingStyle(30, 75, '#A0522D')}></div>
              <div style={buildingStyle(55, 85, '#696969')}></div>

              {/* Aircraft */}
              <div style={aircraftStyle}>✈️</div>

              {/* Indicators */}
              <div style={altitudeIndicatorStyle}>
                {altitude.toFixed(0)}m
              </div>
              
              <div style={windIndicatorStyle}>
                Wind: {windSpeed.toFixed(1)} m/s
              </div>

              <div style={buildingInfoStyle}>
                {buildingHeight.count > 0 ? 
                  `${buildingHeight.count}x ${buildingHeight.type} tall` : 
                  buildingHeight.type
                }
              </div>
            </div>

            <div style={{ marginTop: '16px', fontSize: '12px', color: '#6b7280', textAlign: 'center' }}>
              💡 Tip: Watch how wind speed increases with altitude!
            </div>
          </div>
        </div>

        <div style={infoBoxStyle}>
          <h4 style={infoTitleStyle}>About the Flight Simulator</h4>
          <p style={infoTextStyle}>
            This interactive simulator shows how atmospheric conditions change with altitude. 
            The wind speed calculation uses a simplified model where wind generally increases with height due to reduced ground friction. 
            Building height comparisons help visualize altitude in familiar terms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AtmosphericPropertiesCalculator;