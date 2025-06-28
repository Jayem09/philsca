import React from 'react';

const SpeedOfSoundContent = () => {
    return (
        <div className="speed-of-sound-content">
            <div className="container max-w-4xl mx-auto p-6">
                <div className="header text-center">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        MIDTERMS • MODULE 1 • TOPIC 2
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Speed of Sound</h1>
                    <p className="text-xl text-gray-600 mb-6">Sound Wave Propagation in Fluids</p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mb-8">
                        Sound waves travel through air at a definite speed determined by the medium's properties, particularly temperature.<br />
                        (The velocity of pressure wave propagation, not particle movement)
                    </div>
                </div>

                <div className="content-body space-y-8">
                    <div className="intro-section">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The sound waves that travel through the air at definite speed is called speed of sound. The speed of sound is the rate at which this disturbance propagates through the medium. It is the velocity at which the pressure wave moves, not the velocity at which the individual particles of the medium move.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                            <strong className="text-blue-800">Key Facts:</strong>
                            <ul className="mt-2 space-y-1 text-blue-700">
                                <li>• Speed depends only on gas temperature (for perfect gas)</li>
                                <li>• Standard sea level: ~1116 ft/s or 340 m/s</li>
                                <li>• Pressure wave velocity ≠ particle velocity</li>
                                <li>• Critical parameter in compressible flow analysis</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Speed of Sound Formula</h2>
                        <p className="text-gray-700 mb-4">The speed of sound in a perfect gas is expressed as:</p>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-800 mb-4">a = √γRT</div>
                                <div className="grid md:grid-cols-3 gap-4 text-left">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <div className="font-bold text-green-800">a</div>
                                        <div className="text-green-700">Speed of sound</div>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <div className="font-bold text-blue-800">γ (gamma)</div>
                                        <div className="text-blue-700">Ratio of specific heats<br />(γ = 1.4 for air)</div>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <div className="font-bold text-purple-800">R</div>
                                        <div className="text-purple-700">Universal Gas Constant<br />(287 J/kg·K or 1716 ft·lb/slug·R)</div>
                                    </div>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg mt-4">
                                    <div className="font-bold text-orange-800">T</div>
                                    <div className="text-orange-700">Absolute temperature (K or °R)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Temperature Dependency</h2>
                        <p className="text-gray-700 mb-6">
                            The speed of sound in a perfect gas depends only on the temperature of the gas, not on pressure or density.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-3">Standard Conditions</h4>
                                <p className="text-gray-700 mb-4">
                                    At standard sea level conditions (15°C or 288.15 K):
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                                        <div className="font-bold text-blue-800">Imperial Units</div>
                                        <div className="text-blue-700">~1116 ft/s</div>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg text-center">
                                        <div className="font-bold text-green-800">Metric Units</div>
                                        <div className="text-green-700">~340 m/s</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-3">Altitude Effects</h4>
                                <p className="text-gray-700 mb-4">
                                    As altitude increases, temperature typically decreases, which reduces the speed of sound.
                                </p>
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <strong className="text-yellow-800">Temperature Gradient:</strong>
                                    <span className="text-yellow-700"> In the troposphere, temperature decreases at approximately 6.5°C per kilometer of altitude.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sample-problem-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Problem</h2>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                            <h4 className="text-lg font-bold text-blue-800 mb-3">Problem Statement</h4>
                            <p className="text-blue-700">
                                Calculate the speed of sound at an altitude of 5 km.
                            </p>
                            <div className="mt-3">
                                <strong className="text-blue-800">Given:</strong>
                                <div className="text-blue-700">h = 5 km</div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h4 className="text-lg font-bold text-gray-800 mb-4">Solution</h4>

                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <strong className="text-gray-800">Step 1:</strong> Convert 5 km to meters
                                    <div className="mt-2">
                                        <div>5 km × (1000 m/1 km) = 5000 m</div>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-4 rounded-lg">
                                    <strong className="text-green-800">Step 2:</strong> Calculate temperature at 5000 m altitude
                                    <div className="mt-2">
                                        <div>Using standard atmosphere model:</div>
                                        <div>T = T₀ - (lapse rate × altitude)</div>
                                        <div>T = 288.15 K - (0.0065 K/m × 5000 m)</div>
                                        <div>T = 288.15 K - 32.5 K = 255.65 K</div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <strong className="text-blue-800">Step 3:</strong> Calculate speed of sound using the formula
                                    <div className="mt-2">
                                        <div>a = √γRT</div>
                                        <div>a = √(1.4 × 287 × 255.65)</div>
                                        <div>a = √(102,738.73)</div>
                                        <div>a = 320.53 m/s</div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <strong className="text-yellow-800">Final Answer:</strong>
                                    <span className="text-yellow-700"> The speed of sound at 5 km altitude is 320.53 m/s</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="applications-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Real-World Applications</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-green-800 mb-3">✈️ Aviation</h4>
                                <p className="text-green-700">
                                    Critical for aircraft design, determining Mach numbers, and understanding compressibility effects on wings and engines.
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-blue-800 mb-3">🔊 Acoustics</h4>
                                <p className="text-blue-700">
                                    Essential for audio engineering, architectural acoustics, and understanding sound transmission through different media.
                                </p>
                            </div>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-orange-800 mb-3">🌤️ Meteorology</h4>
                                <p className="text-orange-700">
                                    Used in weather prediction models, understanding atmospheric wave propagation, and storm system analysis.
                                </p>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-purple-800 mb-3">🚀 Aerospace Engineering</h4>
                                <p className="text-purple-700">
                                    Fundamental for rocket nozzle design, spacecraft reentry calculations, and supersonic flight vehicle development.
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mt-6">
                            <strong className="text-red-800">Mach Number Relationship:</strong>
                            <span className="text-red-700"> The ratio of flow velocity to speed of sound (M = V/a) determines compressibility effects. M &lt; 0.3 is considered incompressible flow.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeedOfSoundContent;