import React from 'react';

const FlowContent = () => {
    return (
        <div className="flow-content">
            <div className="container max-w-4xl mx-auto p-6">
                <div className="header text-center">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        FINALS • MODULE 2 • FUNDAMENTALS OF AERODYNAMICS
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Flow Types & Reynolds Number</h1>
                    <p className="text-xl text-gray-600 mb-6">Understanding Laminar and Turbulent Flow Characteristics</p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mb-8">
                        Flow behavior classification based on fluid motion patterns and Reynolds number analysis.<br />
                        (Critical for aerodynamic design and boundary layer prediction)
                    </div>
                </div>

                <div className="content-body space-y-8">
                    <div className="intro-section">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                            <h2 className="text-2xl font-bold text-blue-800 mb-4">Flow Classification</h2>
                            <p className="text-blue-700 leading-relaxed mb-4">
                                Fluid flow can be classified into two distinct types based on the behavior of streamlines and fluid particle motion. Understanding these flow types is essential for predicting aerodynamic performance and designing efficient aircraft surfaces.
                            </p>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <strong className="text-blue-800">Key Factors:</strong>
                                <ul className="mt-2 space-y-1 text-blue-700">
                                    <li>• Streamline behavior and regularity</li>
                                    <li>• Fluid particle motion patterns</li>
                                    <li>• Reynolds number magnitude</li>
                                    <li>• Viscous vs inertial force dominance</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of Flow</h2>
                        <p className="text-gray-700 mb-6">
                            Flow types are distinguished by their streamline characteristics and the Reynolds number, which determines the transition between different flow regimes.
                        </p>

                        <div className="grid gap-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Laminar Flow</h3>

                                <div className="mb-6">
                                    <p className="text-green-700 mb-4">
                                        Flow in which the streamlines are smooth and regular, and the fluid element moves smoothly along the streamline. Characterized by orderly, parallel layers of fluid motion.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-green-800 mb-2">Characteristics</h4>
                                        <ul className="text-green-700 text-sm space-y-1">
                                            <li>• Smooth and regular streamlines</li>
                                            <li>• Orderly fluid particle motion</li>
                                            <li>• Low mixing between fluid layers</li>
                                            <li>• Reynolds number Re &lt; 500,000</li>
                                            <li>• Viscous forces dominate</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-green-800 mb-2">Flow Properties</h4>
                                        <ul className="text-green-700 text-sm space-y-1">
                                            <li>• Predictable flow patterns</li>
                                            <li>• Lower skin friction at low speeds</li>
                                            <li>• Smooth velocity profiles</li>
                                            <li>• Less heat and mass transfer</li>
                                            <li>• Stable flow behavior</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-red-800 mb-4">Turbulent Flow</h3>

                                <div className="mb-6">
                                    <p className="text-red-700 mb-4">
                                        Flow in which the streamlines break up and fluid elements move in a random, irregular, and tortuous fashion. Characterized by chaotic, mixing motion with rapid fluctuations.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-red-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-red-800 mb-2">Characteristics</h4>
                                        <ul className="text-red-700 text-sm space-y-1">
                                            <li>• Irregular, chaotic streamlines</li>
                                            <li>• Random fluid particle motion</li>
                                            <li>• High mixing between fluid layers</li>
                                            <li>• Reynolds number Re &gt; 500,000</li>
                                            <li>• Inertial forces dominate</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-red-800 mb-2">Flow Properties</h4>
                                        <ul className="text-red-700 text-sm space-y-1">
                                            <li>• Unpredictable fluctuations</li>
                                            <li>• Higher skin friction</li>
                                            <li>• Enhanced heat and mass transfer</li>
                                            <li>• Increased pressure losses</li>
                                            <li>• Better mixing properties</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Reynolds Number</h2>

                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-bold text-purple-800 mb-4">Named after Osborne Reynolds (1842-1912)</h3>
                            <p className="text-purple-700 leading-relaxed mb-4">
                                A dimensionless number of critical importance in aerodynamics, equal in significance to the Mach number. It represents the ratio of inertial forces to viscous forces and serves as a similarity parameter for determining flow behavior.
                            </p>

                            <div className="bg-white border border-purple-200 rounded-lg p-6 mt-4">
                                <h4 className="text-lg font-bold text-purple-800 mb-3">Reynolds Number Formula</h4>
                                <div className="bg-purple-100 p-4 rounded-lg text-center mb-4">
                                    <div className="text-2xl font-bold text-purple-800 mb-2">Re<sub>x</sub> = ρVx / μ</div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-purple-800">Where:</h5>
                                        <div className="text-purple-700 text-sm space-y-1">
                                            <div><strong>ρ</strong> = Density of fluid (kg/m³)</div>
                                            <div><strong>V</strong> = Velocity relative to object (m/s)</div>
                                            <div><strong>x</strong> = Characteristic length (m)</div>
                                            <div><strong>μ</strong> = Dynamic viscosity (Pa·s)</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-purple-800">Applications:</h5>
                                        <div className="text-purple-700 text-sm space-y-1">
                                            <div>• Flow similarity prediction</div>
                                            <div>• Boundary layer analysis</div>
                                            <div>• Transition point determination</div>
                                            <div>• Scaled model testing</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Problem: Reynolds Number Calculation</h2>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h3 className="text-lg font-bold text-blue-800 mb-4">Problem Setup</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border border-blue-200 rounded-lg p-4">
                                    <h4 className="font-bold text-blue-800 mb-3">Given Values:</h4>
                                    <div className="text-blue-700 space-y-2">
                                        <div>• Chord Length: 5 cm = 0.005 m</div>
                                        <div>• Density (ρ): 1.225 kg/m³</div>
                                        <div>• Velocity (V): 120 m/s</div>
                                        <div>• Viscosity (μ): 1.7894 × 10⁻⁵ Pa·s</div>
                                    </div>
                                </div>

                                <div className="bg-white border border-blue-200 rounded-lg p-4">
                                    <h4 className="font-bold text-blue-800 mb-3">Solution Steps:</h4>
                                    <div className="text-blue-700 space-y-2 text-sm">
                                        <div><strong>Step 1:</strong> Apply formula Re<sub>x</sub> = ρVx/μ</div>
                                        <div><strong>Step 2:</strong> Substitute values</div>
                                        <div><strong>Step 3:</strong> Calculate numerical result</div>
                                        <div><strong>Step 4:</strong> Determine flow type</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-100 p-4 rounded-lg mt-4">
                                <h4 className="font-bold text-blue-800 mb-2">Calculation:</h4>
                                <div className="text-blue-700 text-sm space-y-1">
                                    <div>Re<sub>x</sub> = (1.225 × 120 × 0.005) / (1.7894 × 10⁻⁵)</div>
                                    <div>Re<sub>x</sub> = 0.735 / (1.7894 × 10⁻⁵)</div>
                                    <div><strong>Re<sub>x</sub> = 41,075.22</strong></div>
                                </div>
                            </div>

                            <div className="bg-green-100 p-4 rounded-lg mt-4">
                                <h4 className="font-bold text-green-800 mb-2">Result:</h4>
                                <div className="text-green-700">
                                    <strong>Re<sub>x</sub> = 41,075 &lt; 500,000 → Laminar Flow</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Critical Reynolds Number</h2>

                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                            <h3 className="text-lg font-bold text-orange-800 mb-4">Transition Point Analysis</h3>

                            <p className="text-orange-700 mb-4">
                                The critical Reynolds number marks the onset of transition from laminar to turbulent flow. This transition occurs over a range of values depending on surface conditions and external disturbances.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="bg-orange-100 p-4 rounded-lg">
                                    <h4 className="font-bold text-orange-800 mb-2">Typical Values</h4>
                                    <ul className="text-orange-700 text-sm space-y-1">
                                        <li>• Flat plate: Re<sub>xcr</sub> ≈ 5 × 10⁵</li>
                                        <li>• Airfoil: Re<sub>xcr</sub> ≈ 2-9 × 10⁵</li>
                                        <li>• Cylinder: Re<sub>cr</sub> ≈ 2 × 10⁵</li>
                                        <li>• Sphere: Re<sub>cr</sub> ≈ 3 × 10⁵</li>
                                    </ul>
                                </div>
                                <div className="bg-orange-100 p-4 rounded-lg">
                                    <h4 className="font-bold text-orange-800 mb-2">Influencing Factors</h4>
                                    <ul className="text-orange-700 text-sm space-y-1">
                                        <li>• Surface roughness</li>
                                        <li>• Pressure gradients</li>
                                        <li>• External disturbances</li>
                                        <li>• Free stream turbulence</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white border border-orange-200 rounded-lg p-4">
                                <h4 className="font-bold text-orange-800 mb-3">Critical Reynolds Formula:</h4>
                                <div className="bg-orange-100 p-3 rounded text-center mb-3">
                                    <span className="text-lg font-bold text-orange-800">Re<sub>xcr</sub> = ρVx<sub>cr</sub> / μ</span>
                                </div>
                                <p className="text-orange-700 text-sm">
                                    Where x<sub>cr</sub> is the critical distance from the leading edge where transition begins.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Critical Reynolds Example</h2>

                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                            <h3 className="text-lg font-bold text-amber-800 mb-4">Transition Point Calculation</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border border-amber-200 rounded-lg p-4">
                                    <h4 className="font-bold text-amber-800 mb-3">Given Values:</h4>
                                    <div className="text-amber-700 space-y-2">
                                        <div>• Density (ρ): 1.225 kg/m³</div>
                                        <div>• Velocity (V): 120 m/s</div>
                                        <div>• Viscosity (μ): 1.7894 × 10⁻⁵ Pa·s</div>
                                        <div>• Critical distance (x<sub>cr</sub>): 1 m</div>
                                    </div>
                                </div>

                                <div className="bg-white border border-amber-200 rounded-lg p-4">
                                    <h4 className="font-bold text-amber-800 mb-3">Calculation:</h4>
                                    <div className="text-amber-700 space-y-1 text-sm">
                                        <div>Re<sub>xcr</sub> = (1.225 × 120 × 1)</div>
                                        <div className="ml-8">/ (1.7894 × 10⁻⁵)</div>
                                        <div>Re<sub>xcr</sub> = 147 / (1.7894 × 10⁻⁵)</div>
                                        <div><strong>Re<sub>xcr</sub> = 8,215,042</strong></div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-100 p-4 rounded-lg mt-4">
                                <h4 className="font-bold text-red-800 mb-2">Result:</h4>
                                <div className="text-red-700">
                                    <strong>Re<sub>xcr</sub> = 8,215,042 &gt; 500,000 → Turbulent Flow</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Flow Comparison</h2>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">Characteristic</th>
                                        <th className="border border-gray-300 p-4 text-left font-bold text-green-800">Laminar Flow</th>
                                        <th className="border border-gray-300 p-4 text-left font-bold text-red-800">Turbulent Flow</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 p-4 font-medium text-gray-800">Reynolds Number</td>
                                        <td className="border border-gray-300 p-4 text-green-700">Re &lt; 500,000</td>
                                        <td className="border border-gray-300 p-4 text-red-700">Re &gt; 500,000</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 p-4 font-medium text-gray-800">Streamline Pattern</td>
                                        <td className="border border-gray-300 p-4 text-green-700">Smooth and regular</td>
                                        <td className="border border-gray-300 p-4 text-red-700">Irregular and chaotic</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 p-4 font-medium text-gray-800">Particle Motion</td>
                                        <td className="border border-gray-300 p-4 text-green-700">Orderly, parallel layers</td>
                                        <td className="border border-gray-300 p-4 text-red-700">Random and tortuous</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 p-4 font-medium text-gray-800">Mixing</td>
                                        <td className="border border-gray-300 p-4 text-green-700">Low mixing</td>
                                        <td className="border border-gray-300 p-4 text-red-700">High mixing</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 p-4 font-medium text-gray-800">Dominant Forces</td>
                                        <td className="border border-gray-300 p-4 text-green-700">Viscous forces</td>
                                        <td className="border border-gray-300 p-4 text-red-700">Inertial forces</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 p-4 font-medium text-gray-800">Skin Friction</td>
                                        <td className="border border-gray-300 p-4 text-green-700">Lower (at low speeds)</td>
                                        <td className="border border-gray-300 p-4 text-red-700">Higher</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="applications-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Engineering Applications</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-blue-800 mb-3">🔬 Design Analysis</h4>
                                <p className="text-blue-700 mb-3">
                                    Understanding flow types enables engineers to predict and optimize aerodynamic performance for various flight conditions.
                                </p>
                                <ul className="text-blue-700 text-sm space-y-1">
                                    <li>• Boundary layer design</li>
                                    <li>• Transition control</li>
                                    <li>• Drag optimization</li>
                                    <li>• Performance prediction</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-green-800 mb-3">✈️ Aircraft Applications</h4>
                                <p className="text-green-700 mb-3">
                                    Flow type determination is crucial for wing design, control surface effectiveness, and overall aircraft performance.
                                </p>
                                <ul className="text-green-700 text-sm space-y-1">
                                    <li>• Wing surface optimization</li>
                                    <li>• Control surface design</li>
                                    <li>• Fuel efficiency improvement</li>
                                    <li>• Stability and control</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-purple-800 mb-3">🧪 Testing and Validation</h4>
                                <p className="text-purple-700 mb-3">
                                    Reynolds number similarity allows for scaled model testing and computational validation of full-scale designs.
                                </p>
                                <ul className="text-purple-700 text-sm space-y-1">
                                    <li>• Wind tunnel testing</li>
                                    <li>• Scale model similarity</li>
                                    <li>• CFD validation</li>
                                    <li>• Performance correlation</li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-orange-800 mb-3">⚙️ Flow Control</h4>
                                <p className="text-orange-700 mb-3">
                                    Knowledge of transition points enables implementation of flow control techniques for enhanced performance.
                                </p>
                                <ul className="text-orange-700 text-sm space-y-1">
                                    <li>• Laminar flow maintenance</li>
                                    <li>• Transition delay techniques</li>
                                    <li>• Turbulence management</li>
                                    <li>• Boundary layer control</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mt-6">
                            <strong className="text-indigo-800">Fundamental Principle:</strong>
                            <span className="text-indigo-700"> The Reynolds number serves as the primary criterion for determining flow behavior, enabling engineers to predict transition points, optimize designs, and ensure similarity between model testing and full-scale performance.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlowContent;