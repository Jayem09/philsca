import React, { useState, useEffect } from 'react';

function AtmosphericPropertiesCalculator() {
  const [altitude, setAltitude] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [airDensity, setAirDensity] = useState(0);
  const [airPressure, setAirPressure] = useState(0);
  const [speedOfSound, setSpeedOfSound] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [aircraftPosition, setAircraftPosition] = useState(0);
  const [buildingHeight, setBuildingHeight] = useState({ count: 0, type: '' });

  const calculateTemperature = (altitude) => {
    // altitude in meters
    const lapseRate = 0.0065; // K/m (client uses 0.0065)
    const T0 = 288.2; // K (client's base temp)
    return T0 - lapseRate * altitude;
  };

  const calculateAirPressure = (altitude) => {
    // Using client exponent 5.26, simplified pressure formula
    const P0 = 101325; // Pa sea level
    const temperature = calculateTemperature(altitude);
    return P0 * Math.pow(temperature / 288.2, 5.26);
  };

  const calculateAirDensity = (altitude) => {
    // Standard ISA formula for air density
    const temperature = calculateTemperature(altitude);
    const pressure = calculateAirPressure(altitude);
    const R_spec = 287; // Specific gas constant for air (J/kg·K)
    return pressure / (R_spec * temperature);
  };

  const calculateSpeedOfSound = (altitude) => {
    const gamma = 1.4;
    const R_spec = 287; // J/kg·K (client value)
    const temperature = calculateTemperature(altitude);
    return Math.sqrt(gamma * R_spec * temperature);
  };

  // Bonus: your wind speed function untouched (cause it's cool)
  const calculateWindSpeed = (altitude) => {
    const baseWind = 5; // m/s at ground level
    const windGradient = 0.003; // increase per meter
    const gustFactor = Math.sin(altitude * 0.001) * 2; // some variation
    return Math.max(0, baseWind + altitude * windGradient + gustFactor);
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
    const newPressure = calculateAirPressure(newAltitude);
    const newAirDensity = calculateAirDensity(newAltitude);
    const newSpeedOfSound = calculateSpeedOfSound(newAltitude);
    const newWindSpeed = calculateWindSpeed(newAltitude);
    const newBuildingHeight = calculateBuildingHeight(newAltitude);

    setTemperature(newTemperature);
    setAirPressure(newPressure);
    setAirDensity(newAirDensity);
    setSpeedOfSound(newSpeedOfSound);
    setWindSpeed(newWindSpeed);
    setBuildingHeight(newBuildingHeight);

    const maxSimulatorHeight = 300;
    const maxAltitude = 2000;
    setAircraftPosition(Math.min((newAltitude / maxAltitude) * maxSimulatorHeight, maxSimulatorHeight));
  };


  const handleAltitudeChange = (event) => {
    const newAltitude = parseFloat(event.target.value) || 0;
    setAltitude(event.target.value);
    updateCalculations(newAltitude);
  };

  const handleSimulatorClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickY = event.clientY - rect.top;
    const simulatorHeight = rect.height;
    const relativeY = simulatorHeight - clickY;
    const newAltitude = Math.max(0, (relativeY / simulatorHeight) * 2000);
    setAltitude(Math.round(newAltitude).toString());
    updateCalculations(newAltitude);
  };

  useEffect(() => {
    updateCalculations(0);
    setAltitude('');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 font-sans">
      <div className="max-w-7xl mx-auto bg-white/95 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 backdrop-blur-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 leading-tight">
            Atmospheric Properties Calculator
          </h1>
          <p className="text-gray-600 text-lg">
            Calculate atmospheric conditions and fly through different altitudes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Altitude (meters)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={altitude}
                  onChange={handleAltitudeChange}
                  placeholder="Enter altitude in meters"
                  className="w-full p-4 pr-12 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none bg-white/80 text-gray-900"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                  m
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Range: 0 - 20,000 meters (troposphere)
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <h3 className="text-base font-semibold text-gray-900">Temperature</h3>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">
                  {temperature.toFixed(3)}
                </div>
                <div className="text-xs text-gray-600 mb-1">Kelvin</div>
                <div className="text-xs text-gray-500">
                  {(temperature - 273.15).toFixed(3)}°C
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h3 className="text-base font-semibold text-gray-900">Air Density</h3>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  {airDensity.toFixed(6)}
                </div>
                <div className="text-xs text-gray-600">kg/m³</div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h3 className="text-base font-semibold text-gray-900">Air Pressure</h3>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
                  {airPressure.toFixed(4)}
                </div>
                <div className="text-xs text-gray-600 mb-1">Pascal</div>
                <div className="text-xs text-gray-500">
                  {(airPressure / 101325 * 100).toFixed(1)}% of sea level
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <h3 className="text-base font-semibold text-gray-900">Speed of Sound</h3>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
                  {speedOfSound.toFixed(4)}
                </div>
                <div className="text-xs text-gray-600 mb-1">m/s</div>
                <div className="text-xs text-gray-500">
                  {(speedOfSound * 3.6).toFixed(1)} km/h
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Flight Altitude Simulator
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Click anywhere in the sky to move the aircraft to that altitude
            </p>

            <div
              className="simulator relative w-full h-64 md:h-80 bg-gradient-to-b from-sky-300 via-sky-200 to-green-300 rounded-2xl border-2 border-gray-200 overflow-hidden cursor-pointer shadow-inner"
              onClick={handleSimulatorClick}
            >
              {/* Buildings */}
              <div className="building absolute bottom-0" style={{
                left: '5%',
                width: '30px',
                height: '20px',
                backgroundColor: '#8B4513'
              }}></div>
              <div className="building absolute bottom-0" style={{
                left: '15%',
                width: '30px',
                height: '35px',
                backgroundColor: '#A0522D'
              }}></div>
              <div className="building absolute bottom-0" style={{
                left: '25%',
                width: '30px',
                height: '60px',
                backgroundColor: '#696969'
              }}></div>
              <div className="building absolute bottom-0" style={{
                left: '35%',
                width: '30px',
                height: '45px',
                backgroundColor: '#778899'
              }}></div>
              <div className="building absolute bottom-0" style={{
                left: '45%',
                width: '30px',
                height: '80px',
                backgroundColor: '#2F4F4F'
              }}></div>
              <div className="building absolute bottom-0" style={{
                left: '55%',
                width: '30px',
                height: '25px',
                backgroundColor: '#8B4513'
              }}></div>
              <div className="building absolute bottom-0" style={{
                left: '65%',
                width: '30px',
                height: '100px',
                backgroundColor: '#1C1C1C'
              }}></div>
              <div className="building absolute bottom-0" style={{
                left: '75%',
                width: '30px',
                height: '30px',
                backgroundColor: '#A0522D'
              }}></div>
              <div className="building absolute bottom-0" style={{
                left: '85%',
                width: '30px',
                height: '55px',
                backgroundColor: '#696969'
              }}></div>

              {/* Aircraft */}
              <div
                className="aircraft absolute right-4 text-2xl transition-all duration-300 ease-out"
                style={{ bottom: `${aircraftPosition}px` }}
              >
                <img src="../assets/aircraft.png" alt="aircraft" className='w-18 h-12' />
              </div>

              {/* Indicators */}
              <div className="altitude-indicator absolute right-2 top-2 bg-white/95 px-2 py-1 rounded-lg text-xs font-bold text-gray-900">
                {altitude || 0}m
              </div>

              <div className="wind-indicator absolute left-2 top-2 bg-blue-600/90 text-white px-2 py-1 rounded-lg text-xs font-bold">
                Wind: {windSpeed.toFixed(1)} m/s
              </div>

              <div className="building-info absolute left-2 bottom-2 bg-green-600/90 text-white px-2 py-1 rounded-lg text-xs font-bold max-w-40 leading-tight">
                {buildingHeight.count > 0 ?
                  `${buildingHeight.count}x ${buildingHeight.type} tall` :
                  buildingHeight.type
                }
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-600 text-center leading-relaxed">
              💡 Tip: Watch how wind speed increases with altitude!
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2">About the Flight Simulator</h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            This interactive simulator shows how atmospheric conditions change with altitude using the International Standard Atmosphere (ISA) model.
            At sea level (0m): Temperature = 288.2K (15.05°C), Air Density = 1.225 kg/m³, Pressure = 101,325 Pa.
            The calculations use proper thermodynamic equations to accurately model atmospheric properties.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AtmosphericPropertiesCalculator;