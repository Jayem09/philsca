import React from 'react';

const MachNumberContent = () => {
    return (
        <div className="mach-number-content">
            <div className="container max-w-4xl mx-auto p-6">
                <div className="header text-center">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        MIDTERMS • MODULE 1 • TOPIC 3
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Mach Number</h1>
                    <p className="text-xl text-gray-600 mb-6">The Ratio of Aircraft Speed to Sound Speed</p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mb-8">
                        Named after Ernst Mach, a late 19th century physicist who studied gas dynamics.<br />
                        (Determines the magnitude of compressibility effects in flight)
                    </div>
                </div>

                <div className="content-body space-y-8">
                    <div className="intro-section">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The ratio of the speed of the aircraft to the speed of sound in the gas determines the magnitude of many of the compressibility effects. Because of the importance of this speed ratio, aerodynamicists have designated it with a special parameter called the Mach number in honor of Ernst Mach, a late 19th century physicist who studied gas dynamics. The Mach number M allows us to define flight regimes in which compressibility effects vary.
                        </p>

                        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                            <strong className="text-purple-800">Key Concept:</strong>
                            <ul className="mt-2 space-y-1 text-purple-700">
                                <li>• Determines compressibility effects magnitude</li>
                                <li>• Defines different flight regimes</li>
                                <li>• Critical parameter in aerodynamics</li>
                                <li>• Dimensionless ratio</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mach Number Formula</h2>
                        <p className="text-gray-700 mb-4">The Mach number is expressed as:</p>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-800 mb-6">M = V/a</div>
                                <div className="grid md:grid-cols-3 gap-4 text-left">
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <div className="font-bold text-red-800">M</div>
                                        <div className="text-red-700">Mach Number<br />(Dimensionless)</div>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <div className="font-bold text-blue-800">V</div>
                                        <div className="text-blue-700">Velocity of the object<br />(m/s or ft/s)</div>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <div className="font-bold text-green-800">a</div>
                                        <div className="text-green-700">Speed of sound<br />(m/s or ft/s)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Mach Number Flight Regimes</h2>
                        <p className="text-gray-700 mb-6">
                            Different Mach number ranges define distinct flight regimes with varying compressibility effects:
                        </p>

                        <div className="grid gap-4">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-green-800">Subsonic</div>
                                    <div className="text-green-700">Low compressibility effects</div>
                                </div>
                                <div className="bg-green-100 px-3 py-1 rounded-full text-green-800 font-bold">
                                    0 - 0.8
                                </div>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-yellow-800">Transonic</div>
                                    <div className="text-yellow-700">Mixed subsonic/supersonic flow</div>
                                </div>
                                <div className="bg-yellow-100 px-3 py-1 rounded-full text-yellow-800 font-bold">
                                    0.81 - 1.2
                                </div>
                            </div>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-orange-800">Sonic</div>
                                    <div className="text-orange-700">Speed equals sound speed</div>
                                </div>
                                <div className="bg-orange-100 px-3 py-1 rounded-full text-orange-800 font-bold">
                                    1.0
                                </div>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-red-800">Supersonic</div>
                                    <div className="text-red-700">Shock waves present</div>
                                </div>
                                <div className="bg-red-100 px-3 py-1 rounded-full text-red-800 font-bold">
                                    1.21 - 5.0
                                </div>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-purple-800">Hypersonic</div>
                                    <div className="text-purple-700">Extreme heating effects</div>
                                </div>
                                <div className="bg-purple-100 px-3 py-1 rounded-full text-purple-800 font-bold">
                                    5.1 - 25.0
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-gray-800">Ultrasonic</div>
                                    <div className="text-gray-700">Theoretical regime</div>
                                </div>
                                <div className="bg-gray-100 px-3 py-1 rounded-full text-gray-800 font-bold">
                                    &gt; 25.1
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sample-problem-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Problem</h2>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                            <h4 className="text-lg font-bold text-blue-800 mb-3">Problem Statement</h4>
                            <p className="text-blue-700 mb-3">
                                An aircraft is cruising at an altitude of 4000 meters with a velocity of 217.30 m/s. As part of an aircraft performance analysis, the pilot wants to determine the Mach number of the aircraft at this altitude.
                            </p>
                            <div className="mt-3">
                                <strong className="text-blue-800">Given:</strong>
                                <div className="text-blue-700">
                                    <div>• h = 4000 m</div>
                                    <div>• V = 217.30 m/s</div>
                                    <div>• M = ?</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h4 className="text-lg font-bold text-gray-800 mb-4">Solution</h4>

                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <strong className="text-gray-800">Step 1:</strong> Calculate temperature at 4000 m altitude
                                    <div className="mt-2">
                                        <div>Using standard atmosphere model:</div>
                                        <div>T = T₀ - (lapse rate × altitude)</div>
                                        <div>T = 288.15 K - (0.0065 K/m × 4000 m)</div>
                                        <div>T = 288.15 K - 26 K = 262.15 K</div>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-4 rounded-lg">
                                    <strong className="text-green-800">Step 2:</strong> Calculate speed of sound using the formula
                                    <div className="mt-2">
                                        <div>a = √γRT</div>
                                        <div>a = √(1.4 × 287 × 262.15)</div>
                                        <div>a = √(105,334.43)</div>
                                        <div>a = 324.58 m/s</div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <strong className="text-blue-800">Step 3:</strong> Calculate Mach Number using the formula
                                    <div className="mt-2">
                                        <div>M = V/a</div>
                                        <div>M = 217.30 m/s / 324.58 m/s</div>
                                        <div>M = 0.67</div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <strong className="text-yellow-800">Final Answer:</strong>
                                    <span className="text-yellow-700"> The Mach Number at 4000 m with a velocity of 217.30 m/s is 0.67 (Subsonic)</span>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <strong className="text-green-800">Flight Regime Classification:</strong>
                                    <span className="text-green-700"> Since M = 0.67 falls within 0 - 0.8, this aircraft is operating in the subsonic regime with low compressibility effects.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="applications-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Practical Applications</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-blue-800 mb-3">✈️ Aircraft Design</h4>
                                <p className="text-blue-700">
                                    Determines wing design, engine placement, and structural requirements based on intended flight regime.
                                </p>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-red-800 mb-3">⚡ Performance Analysis</h4>
                                <p className="text-red-700">
                                    Critical for fuel efficiency calculations, range determination, and flight planning optimization.
                                </p>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-purple-800 mb-3">🚀 Supersonic Flight</h4>
                                <p className="text-purple-700">
                                    Essential for managing shock waves, sonic booms, and thermal effects in high-speed aircraft.
                                </p>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-green-800 mb-3">🎯 Flight Safety</h4>
                                <p className="text-green-700">
                                    Helps pilots understand flight envelope limitations and avoid dangerous flight conditions.
                                </p>
                            </div>
                        </div>

                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mt-6">
                            <strong className="text-orange-800">Critical Note:</strong>
                            <span className="text-orange-700"> Compressibility effects become significant at M &gt; 0.3, requiring special consideration in aerodynamic analysis and aircraft design.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MachNumberContent;