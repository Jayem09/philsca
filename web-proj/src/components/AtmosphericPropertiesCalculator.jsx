import React, { useState, useEffect } from 'react';
import aircraft from '../../public/assets/aircraft.png';
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
    const T0 = 288.15; // K (temperature at sea level in Kelvin)
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

    const maxSimulatorHeight = 300;
    const maxAltitude = 2000;
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
    const simulatorHeight = rect.height;
    const relativeY = simulatorHeight - clickY;
    const newAltitude = Math.max(0, (relativeY / simulatorHeight) * 2000);
    setAltitude(Math.round(newAltitude));
    updateCalculations(newAltitude);
  };

  useEffect(() => {
    updateCalculations(0);
  }, []);

  return (
    <div className="app-container">
      <style jsx>{`
        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 50%, #f3e8ff 100%);
          padding: 1rem;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .main-card {
          max-width: 1400px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .title {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          font-weight: bold;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .subtitle {
          color: #6b7280;
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          margin-bottom: 0;
        }

        .main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .input-section {
          order: 2;
        }

        .simulator-section {
          order: 1;
        }

        .input-container {
          margin-bottom: 1.5rem;
        }

        .input-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .input-wrapper {
          position: relative;
        }

        .altitude-input {
          width: 100%;
          padding: 1rem 3rem 1rem 1rem;
          font-size: 1.125rem;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          outline: none;
          transition: border-color 0.2s;
          background: rgba(255, 255, 255, 0.8);
          box-sizing: border-box;
          color: #1f2937;
        }P

        .altitude-input:focus {
          border-color: #3b82f6;
        }

        .input-unit {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          font-weight: 500;
        }

        .range-text {
          margin-top: 0.5rem;
          font-size: 0.875rem;
          color: #6b7280;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .metric-card {
          padding: 1.25rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-height: 120px;
        }

        .metric-card.temperature {
          background: linear-gradient(135deg, #fef2f2, #fef7e0);
        }

        .metric-card.density {
          background: linear-gradient(135deg, #eff6ff, #f0fdfa);
        }

        .metric-card.pressure {
          background: linear-gradient(135deg, #f0fdf4, #ecfdf5);
        }

        .metric-card.sound {
          background: linear-gradient(135deg, #faf5ff, #fdf2f8);
        }

        .metric-header {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .metric-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 0.75rem;
          flex-shrink: 0;
        }

        .metric-dot.red { background-color: #ef4444; }
        .metric-dot.blue { background-color: #3b82f6; }
        .metric-dot.green { background-color: #10b981; }
        .metric-dot.purple { background-color: #8b5cf6; }

        .metric-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          line-height: 1.2;
        }

        .metric-value {
          font-size: clamp(1.25rem, 4vw, 1.75rem);
          font-weight: bold;
          margin-bottom: 0.25rem;
          line-height: 1.1;
        }

        .metric-value.red { color: #dc2626; }
        .metric-value.blue { color: #2563eb; }
        .metric-value.green { color: #059669; }
        .metric-value.purple { color: #7c3aed; }

        .metric-unit {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .metric-sub {
          font-size: 0.6875rem;
          color: #9ca3af;
          margin-top: 0.25rem;
          line-height: 1.2;
        }

        .simulator-title {
          font-size: clamp(1.125rem, 3vw, 1.25rem);
          font-weight: bold;
          margin-bottom: 0.75rem;
          color: #1f2937;
        }

        .simulator-desc {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .simulator {
          position: relative;
          width: 100%;
          height: 250px;
          background: linear-gradient(to bottom, #87CEEB 0%, #98D8E8 50%, #90EE90 100%);
          border-radius: 16px;
          border: 2px solid #e5e7eb;
          overflow: hidden;
          cursor: pointer;
          box-shadow: inset 0 2px 10px rgba(0,0,0,0.1);
          touch-action: manipulation;
        }

        .building {
          position: absolute;
          bottom: 0;
          border-radius: 2px 2px 0 0;
          border: 1px solid rgba(0,0,0,0.2);
        }

        .aircraft {
          position: absolute;
          right: 15px;
          font-size: 20px;
          transition: bottom 0.3s ease;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
        }

        .altitude-indicator {
          position: absolute;
          right: 8px;
          top: 8px;
          background: rgba(255,255,255,0.95);
          padding: 0.5rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: bold;
          color: #1f2937;
        }

        .wind-indicator {
          position: absolute;
          left: 8px;
          top: 8px;
          background: rgba(59, 130, 246, 0.9);
          color: white;
          padding: 0.5rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: bold;
        }

        .building-info {
          position: absolute;
          left: 8px;
          bottom: 8px;
          background: rgba(16, 185, 129, 0.9);
          color: white;
          padding: 0.5rem;
          border-radius: 8px;
          font-size: 0.6875rem;
          font-weight: bold;
          max-width: 160px;
          line-height: 1.2;
        }

        .tip {
          margin-top: 1rem;
          font-size: 0.75rem;
          color: #6b7280;
          text-align: center;
          line-height: 1.3;
        }

        .info-box {
          padding: 1rem;
          background: #f9fafb;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          margin-top: 2rem;
        }

        .info-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .info-text {
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.5;
          margin: 0;
        }

        /* Tablet styles */
        @media (min-width: 640px) {
          .main-card {
            padding: 2rem;
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }

          .simulator {
            height: 300px;
          }

          .aircraft {
            font-size: 24px;
            right: 20px;
          }

          .building-info {
            max-width: 200px;
          }
        }

        /* Desktop styles */
        @media (min-width: 1024px) {
          .main-card {
            padding: 2.5rem;
          }

          .main-grid {
            grid-template-columns: 1fr 400px;
            gap: 2.5rem;
          }

          .input-section {
            order: 1;
          }

          .simulator-section {
            order: 2;
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .simulator {
            height: 350px;
          }
        }

        /* Large desktop styles */
        @media (min-width: 1200px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
      `}</style>

      <div className="main-card">
        <div className="header">
          <h1 className="title">
            Atmospheric Properties Calculator
          </h1>
          <p className="subtitle">
            Calculate atmospheric conditions and fly through different altitudes
          </p>
        </div>

        <div className="main-grid">
          <div className="input-section">
            <div className="input-container">
              <label className="input-label">
                Altitude (meters)
              </label>
              <div className="input-wrapper">
                <input
                  type="number"
                  value={altitude}
                  onChange={handleAltitudeChange}
                  placeholder="Enter altitude in meters"
                  className="altitude-input"
                />
                <div className="input-unit">m</div>
              </div>
              <div className="range-text">
                Range: 0 - 20,000 meters (troposphere)
              </div>
            </div>

            <div className="metrics-grid">
              <div className="metric-card temperature">
                <div className="metric-header">
                  <div className="metric-dot red"></div>
                  <h3 className="metric-title">Temperature</h3>
                </div>
                <div className="metric-value red">
                  {temperature.toFixed(2)}
                </div>
                <div className="metric-unit">Kelvin</div>
              </div>

              <div className="metric-card density">
                <div className="metric-header">
                  <div className="metric-dot blue"></div>
                  <h3 className="metric-title">Air Density</h3>
                </div>
                <div className="metric-value blue">
                  {airDensity.toFixed(4)}
                </div>
                <div className="metric-unit">kg/m³</div>
              </div>

              <div className="metric-card pressure">
                <div className="metric-header">
                  <div className="metric-dot green"></div>
                  <h3 className="metric-title">Air Pressure</h3>
                </div>
                <div className="metric-value green">
                  {airPressure.toFixed(0)}
                </div>
                <div className="metric-unit">Pascal</div>
                <div className="metric-sub">
                  {(airPressure / 101325 * 100).toFixed(1)}% of sea level
                </div>
              </div>

              <div className="metric-card sound">
                <div className="metric-header">
                  <div className="metric-dot purple"></div>
                  <h3 className="metric-title">Speed of Sound</h3>
                </div>
                <div className="metric-value purple">
                  {speedOfSound.toFixed(1)}
                </div>
                <div className="metric-unit">m/s</div>
                <div className="metric-sub">
                  {(speedOfSound * 3.6).toFixed(1)} km/h
                </div>
              </div>
            </div>
          </div>

          <div className="simulator-section">
            <h3 className="simulator-title">
              Flight Altitude Simulator
            </h3>
            <p className="simulator-desc">
              Click anywhere in the sky to move the aircraft to that altitude
            </p>

            <div className="simulator" onClick={handleSimulatorClick}>
              {/* Buildings */}
              <div className="building" style={{
                left: '5%',
                width: '30px',
                height: '20px',
                backgroundColor: '#8B4513'
              }}></div>
              <div className="building" style={{
                left: '15%',
                width: '30px',
                height: '35px',
                backgroundColor: '#A0522D'
              }}></div>
              <div className="building" style={{
                left: '25%',
                width: '30px',
                height: '60px',
                backgroundColor: '#696969'
              }}></div>
              <div className="building" style={{
                left: '35%',
                width: '30px',
                height: '45px',
                backgroundColor: '#778899'
              }}></div>
              <div className="building" style={{
                left: '45%',
                width: '30px',
                height: '80px',
                backgroundColor: '#2F4F4F'
              }}></div>
              <div className="building" style={{
                left: '55%',
                width: '30px',
                height: '25px',
                backgroundColor: '#8B4513'
              }}></div>
              <div className="building" style={{
                left: '65%',
                width: '30px',
                height: '100px',
                backgroundColor: '#1C1C1C'
              }}></div>
              <div className="building" style={{
                left: '75%',
                width: '30px',
                height: '30px',
                backgroundColor: '#A0522D'
              }}></div>
              <div className="building" style={{
                left: '85%',
                width: '30px',
                height: '55px',
                backgroundColor: '#696969'
              }}></div>
              {/* Aircraft */}
              <div className="aircraft" style={{ bottom: `${aircraftPosition}px` }}>
                <img src={aircraft} alt="Aircraft" style={{ width: '100px', height: 'auto' }} />
              </div>



              {/* Indicators */}
              <div className="altitude-indicator">
                {altitude.toFixed(0)}m
              </div>

              <div className="wind-indicator">
                Wind: {windSpeed.toFixed(1)} m/s
              </div>

              <div className="building-info">
                {buildingHeight.count > 0 ?
                  `${buildingHeight.count}x ${buildingHeight.type} tall` :
                  buildingHeight.type
                }
              </div>
            </div>

            <div className="tip">
              💡 Tip: Watch how wind speed increases with altitude!
            </div>
          </div>
        </div>

        <div className="info-box">
          <h4 className="info-title">About the Flight Simulator</h4>
          <p className="info-text">
            This interactive simulator shows how atmospheric conditions change with altitude.
            The wind speed calculation uses a simplified model where wind generally increases with height due to reduced ground friction.
            Building height comparisons help visualize altitude in familiar terms.
          </p>x
        </div>
      </div>
    </div>
  );
}

export default AtmosphericPropertiesCalculator;