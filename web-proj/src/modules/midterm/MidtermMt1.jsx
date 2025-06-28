import React from 'react';

const WindTunnelContent = () => {
    return (
        <div className="wind-tunnel-content">
            <div className="container max-w-4xl mx-auto p-6">
                <div className="header text-center">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        MIDTERMS • MODULE 2 • TOPIC 1
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Wind Tunnel</h1>
                    <p className="text-xl text-gray-600 mb-6">Aerodynamic Testing and Flow Analysis</p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mb-8">
                        Large tubes with controlled airflow used to simulate flight conditions.<br />
                        (Essential tools for aircraft design, testing, and aerodynamic research)
                    </div>
                </div>

                <div className="content-body space-y-8">
                    <div className="intro-section">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Wind tunnels are large tubes with air moving inside, used to copy the actions of an object in flight. Researchers use wind tunnels to learn more about how an aircraft will fly. NASA uses wind tunnels to test scale models of aircraft and spacecraft. Some wind tunnels are big enough to hold full-size versions of vehicles. The wind tunnel moves air around an object, making it seem like the object is really flying.
                        </p>

                        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                            <strong className="text-green-800">Key Features:</strong>
                            <ul className="mt-2 space-y-1 text-green-700">
                                <li>• Object is fastened and stationary during testing</li>
                                <li>• Can test models, components, or full-size vehicles</li>
                                <li>• Made of steel or aluminum with sensors and instruments</li>
                                <li>• Measures forces: lift, drag, side force, and moments</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of Wind Tunnels</h2>
                        <p className="text-gray-700 mb-6">
                            Wind tunnels are classified based on their operating speed ranges and flow characteristics:
                        </p>

                        <div className="grid gap-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-blue-800 mb-4">1. Low-Speed Wind Tunnel</h3>
                                <div className="mb-4">
                                    <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 font-bold inline-block mb-3">
                                        M &lt; 0.3 (Subsonic)
                                    </div>
                                    <p className="text-blue-700 mb-4">
                                        Designed for airflow speeds significantly slower than sound. Smooth laminar flow with negligible compressibility effects. Focus on lift, drag, and moment measurements.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white border border-blue-200 rounded-lg p-4">
                                        <h4 className="font-bold text-blue-800 mb-2">a. Open-Circuit</h4>
                                        <p className="text-blue-700 text-sm">
                                            Air drawn from environment and expelled to atmosphere. No recirculation - fresh air continuously replaced.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-blue-200 rounded-lg p-4">
                                        <h4 className="font-bold text-blue-800 mb-2">b. Closed-Circuit (Eiffel/NPL)</h4>
                                        <p className="text-blue-700 text-sm">
                                            Air recirculates continuously through contraction, test section, diffuser, and fan with minimal air exchange.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-yellow-800 mb-4">2. Transonic Wind Tunnel</h3>
                                <div className="bg-yellow-100 px-3 py-1 rounded-full text-yellow-800 font-bold inline-block mb-3">
                                    M ≈ 1.0 (Near Sound Speed)
                                </div>
                                <p className="text-yellow-700">
                                    Achieves speeds close to sound speed with highest velocity in test section. Additional challenges from shock wave reflections off tunnel walls.
                                </p>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-red-800 mb-4">3. Supersonic Wind Tunnel</h3>
                                <div className="bg-red-100 px-3 py-1 rounded-full text-red-800 font-bold inline-block mb-3">
                                    1.0 &lt; M ≤ 5.0
                                </div>
                                <p className="text-red-700">
                                    Produces supersonic speeds using convergent-divergent nozzle design. Flow accelerates supersonically when sonic speed is reached at throat.
                                </p>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-800 mb-4">4. Hypersonic Wind Tunnel</h3>
                                <div className="bg-purple-100 px-3 py-1 rounded-full text-purple-800 font-bold inline-block mb-3">
                                    5.0 &lt; M ≤ 15.0
                                </div>
                                <p className="text-purple-700">
                                    Generates hypersonic flow fields with very high pressure ratios. Must run intermittently due to extreme operating conditions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Wind Tunnel Analysis</h2>
                        <p className="text-gray-700 mb-6">
                            Wind tunnel analysis uses Bernoulli's equation applied to three key sections: inlet, test section, and exit.
                        </p>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Three-Section Bernoulli Equation</h3>
                            <div className="text-center mb-4">
                                <div className="text-2xl font-bold text-gray-800 mb-4">P₁ + ρ₁V₁²/2 = P₂ + ρ₂V₂²/2 = P₃ + ρ₃V₃²/2</div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-red-50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-red-800 mb-2">Section 1: Inlet</div>
                                    <div className="text-red-700 text-sm">
                                        P₁, ρ₁, V₁<br />
                                        (Entry conditions)
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-blue-800 mb-2">Section 2: Test</div>
                                    <div className="text-blue-700 text-sm">
                                        P₂, ρ₂, V₂<br />
                                        (Model location)
                                    </div>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-green-800 mb-2">Section 3: Exit</div>
                                    <div className="text-green-700 text-sm">
                                        P₃, ρ₃, V₃<br />
                                        (Discharge conditions)
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                            <strong className="text-indigo-800">Conservation of Mass:</strong>
                            <div className="mt-2 text-indigo-700">
                                At every point in the tunnel: <strong>ṁ = ρAV = constant</strong>
                                <br />
                                This relates local speed to cross-sectional area throughout the tunnel.
                            </div>
                        </div>
                    </div>

                    <div className="sample-problem-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Problem</h2>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                            <h4 className="text-lg font-bold text-blue-800 mb-3">Problem Statement</h4>
                            <p className="text-blue-700 mb-3">
                                Analyze compressible airflow in a wind tunnel with measurements at different sections. The intake area to test section area ratio is 0.73, and the exit area is 3/4 the size of the intake area.
                            </p>
                            <div className="mt-3">
                                <strong className="text-blue-800">Given:</strong>
                                <div className="grid md:grid-cols-2 gap-4 mt-2">
                                    <div className="text-blue-700">
                                        <div>• ρ₁ = 0.98 kg/m³</div>
                                        <div>• P₁ = 320,153 Pa</div>
                                        <div>• V₁ = 0.11 m/s</div>
                                        <div>• ṁ = 0.72 kg/s</div>
                                    </div>
                                    <div className="text-blue-700">
                                        <div>• ρ₂ = 0.55 kg/m³</div>
                                        <div>• P₃ = 288,420.56 Pa</div>
                                        <div>• A₁/A₂ = 0.73</div>
                                        <div>• A₃ = (3/4)A₁</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h4 className="text-lg font-bold text-gray-800 mb-4">Solution</h4>

                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <strong className="text-gray-800">Step 1-2:</strong> Find inlet area using mass flow rate
                                    <div className="mt-2">
                                        <div>ṁ = ρ₁A₁V₁ → A₁ = ṁ/(ρ₁V₁)</div>
                                        <div>A₁ = 0.72/(0.98 × 0.11) = 6.679 m²</div>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-4 rounded-lg">
                                    <strong className="text-green-800">Step 3-4:</strong> Calculate test section area
                                    <div className="mt-2">
                                        <div>A₂ = (A₂/A₁) × A₁ = 0.73 × 6.679</div>
                                        <div>A₂ = 4.876 m²</div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <strong className="text-blue-800">Step 5:</strong> Calculate exit area
                                    <div className="mt-2">
                                        <div>A₃ = (3/4) × A₁ = 0.75 × 6.679</div>
                                        <div>A₃ = 5.009 m²</div>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <strong className="text-purple-800">Step 6-7:</strong> Find velocity at test section
                                    <div className="mt-2">
                                        <div>V₂ = ṁ/(ρ₂A₂) = 0.72/(0.55 × 4.876)</div>
                                        <div>V₂ = 0.268 m/s</div>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <strong className="text-orange-800">Step 8-9:</strong> Apply Bernoulli's equation for P₂
                                    <div className="mt-2">
                                        <div>P₂ = P₁ + (ρ₁V₁²/2) - (ρ₂V₂²/2)</div>
                                        <div>P₂ = 320,153 + (0.98×0.11²/2) - (0.55×0.268²/2)</div>
                                        <div>P₂ = 320,153.0 Pa</div>
                                    </div>
                                </div>

                                <div className="bg-red-50 p-4 rounded-lg">
                                    <strong className="text-red-800">Step 10-15:</strong> Calculate exit conditions
                                    <div className="mt-2">
                                        <div>Using standard atmosphere relations and mass continuity:</div>
                                        <div>• Temperature and density calculations at exit</div>
                                        <div>• V₃ = ṁ/(ρ₃A₃) = 0.050 m/s</div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <strong className="text-yellow-800">Key Results:</strong>
                                    <div className="text-yellow-700 mt-2">
                                        <div>• A₁ = 6.679 m², A₂ = 4.876 m², A₃ = 5.009 m²</div>
                                        <div>• V₂ = 0.268 m/s, V₃ = 0.050 m/s</div>
                                        <div>• P₂ = 320,153 Pa (approximately equal to P₁)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="applications-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Wind Tunnel Applications</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-blue-800 mb-3">✈️ Aircraft Development</h4>
                                <p className="text-blue-700">
                                    Test scale models and full-size aircraft to predict aerodynamic performance, optimize design, and ensure safety before first flight.
                                </p>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-red-800 mb-3">🚗 Automotive Testing</h4>
                                <p className="text-red-700">
                                    Evaluate vehicle aerodynamics for fuel efficiency, stability, and noise reduction through controlled airflow studies.
                                </p>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-purple-800 mb-3">🏢 Building Design</h4>
                                <p className="text-purple-700">
                                    Study wind loads on structures, optimize building shapes, and design for wind resistance and ventilation.
                                </p>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-green-800 mb-3">⚡ Research & Development</h4>
                                <p className="text-green-700">
                                    Fundamental aerodynamic research, new technology validation, and educational training for engineers.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="measurement-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Forces and Moments Measured</h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                                    <div className="font-bold text-emerald-800">Forces</div>
                                    <div className="text-emerald-700 text-sm mt-1">
                                        • Lift (upward force)<br />
                                        • Drag (resistance force)<br />
                                        • Side force (lateral force)
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                                    <div className="font-bold text-cyan-800">Moments</div>
                                    <div className="text-cyan-700 text-sm mt-1">
                                        • Pitching moment (nose up/down)<br />
                                        • Yawing moment (nose left/right)<br />
                                        • Rolling moment (wing rotation)
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mt-6">
                            <strong className="text-orange-800">Design Advantage:</strong>
                            <span className="text-orange-700"> Wind tunnels allow controlled testing of flow conditions that would be impossible or dangerous to achieve in actual flight, enabling safer and more efficient aircraft development.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WindTunnelContent;