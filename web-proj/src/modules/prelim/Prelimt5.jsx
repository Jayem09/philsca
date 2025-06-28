import React from 'react'

function Prelimt5() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Properties of Air</h2>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    MODULE 3
                </div>
            </div>

            {/* Pressure Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Pressure</h3>
                <p className="text-gray-700 leading-relaxed">
                    Pressure (P) is the force applied perpendicular to the surface of an object per unit area over which that force is distributed. Various units are used to express pressure:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                    <li>SI unit: pascal (Pa) = 1 N/m²</li>
                    <li>Imperial unit: pound-force per square inch (psi)</li>
                    <li>Standard atmospheric pressure (atm) = 101,325 Pa</li>
                    <li>Torr = 1/760 atm</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Manometric units like cmH₂O, mmHg, and inHg express pressure in terms of fluid column height.
                </p>
            </div>

            {/* Density Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Density</h3>
                <p className="text-gray-700 leading-relaxed">
                    Density (ρ) is mass per unit volume:
                </p>
                <div className="my-4 p-4 bg-gray-50 rounded-lg text-center">
                    <p className="font-mono text-lg">ρ = m/V</p>
                    <p className="text-gray-700 mt-2">
                        where ρ = density, m = mass, V = volume
                    </p>
                </div>
            </div>

            {/* Temperature Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Temperature</h3>
                <p className="text-gray-700 leading-relaxed">
                    Temperature measures hotness/coldness and indicates heat flow direction. Common scales:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-bold text-red-800">Celsius (°C)</h4>
                        <p className="text-gray-700">Water freezes at 0°C, boils at 100°C</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-bold text-blue-800">Fahrenheit (°F)</h4>
                        <p className="text-gray-700">Water freezes at 32°F, boils at 212°F</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-bold text-purple-800">Kelvin (K)</h4>
                        <p className="text-gray-700">SI base unit, absolute scale</p>
                    </div>
                </div>
            </div>

            {/* Altitude Effects Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Air Pressure Changes with Altitude</h3>
                <p className="text-gray-700 leading-relaxed">
                    Gravity pulls air down creating air pressure. Our bodies equalize this pressure so we don't feel it. Air density and pressure decrease with altitude.
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">International Standard Atmosphere (ISA)</h4>
                    <p className="text-gray-700">
                        The ICAO Standard Atmosphere provides reference values at mean sea level:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                        <li>Pressure: 1013.2 mb (decreases ~1 mb/30 ft up to 5,000 ft)</li>
                        <li>Temperature: +15°C (decreases 2°C/1,000 ft to tropopause at 36,000 ft)</li>
                        <li>Density: 1.225 kg/m³</li>
                    </ul>
                </div>
            </div>

            {/* Lapse Rate Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Lapse Rate</h3>
                <p className="text-gray-700 leading-relaxed">
                    The rate at which temperature decreases with altitude in the troposphere.
                </p>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Example Calculation</h4>
                    <p className="text-gray-700 font-mono text-sm">
                        Calculate pressure and density at 15,000 m:<br />
                        Given: T = 216.5 K (constant)<br /><br />
                        Pressure:<br />
                        P = P₁₁ e<sup>(-g/RT)(h-11000)</sup><br />
                        P = 22502.7116 Pa e<sup>(-9.8/(287×216.5)(15000-11000)</sup><br />
                        P = 11974.22627 Pa<br /><br />
                        Density:<br />
                        ρ = ρ₁₁ e<sup>(-g/RT)(h-11000)</sup><br />
                        ρ = 0.3622 kg/m³ e<sup>(-9.8/(287×216.5)(15000-11000)</sup><br />
                        ρ = 0.192735206 kg/m³
                    </p>
                </div>
            </div>

            {/* Key Points Summary */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Properties of Air</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-bold text-yellow-800">Pressure</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                            <li>Force per unit area</li>
                            <li>Decreases with altitude</li>
                            <li>Measured in Pa, psi, atm, etc.</li>
                        </ul>
                    </div>
                    <div className="border-l-4 border-teal-500 pl-4">
                        <h4 className="font-bold text-teal-800">Density</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                            <li>Mass per unit volume (ρ = m/V)</li>
                            <li>Affected by temperature and pressure</li>
                            <li>Decreases with altitude</li>
                        </ul>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-bold text-purple-800">Temperature</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                            <li>Measure of thermal energy</li>
                            <li>Decreases with altitude (lapse rate)</li>
                            <li>Measured in °C, °F, or K</li>
                        </ul>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-bold text-blue-800">ISA Standards</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                            <li>1013.2 mb at sea level</li>
                            <li>15°C at sea level</li>
                            <li>1.225 kg/m³ density</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prelimt5