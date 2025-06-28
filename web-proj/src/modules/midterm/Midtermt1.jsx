import React from 'react';

const ContinuityEquationContent = () => {
    return (
        <div className="continuity-content">
            <div className="container max-w-4xl mx-auto p-6">
                <div className="header text-center">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        MIDTERMS • MODULE 1 • TOPIC 1
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Continuity Equation</h1>
                    <p className="text-xl text-gray-600 mb-6">Mass Conservation in Fluid Dynamics</p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mb-8">
                        The continuity equation demonstrates how fluid velocity and cross-sectional area are inversely related to maintain constant mass flow rate.<br />
                        (Fundamental principle of fluid mechanics and conservation of mass)
                    </div>
                </div>

                <div className="content-body space-y-8">
                    <div className="intro-section">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The principle of mass conservation in fluid dynamics is governed by the continuity equation. This fundamental principle in fluid mechanics expresses the conservation of mass in a flow system, stating that for a fluid moving through a pipe, duct, or any control volume, the mass flow rate remains constant between any two points, assuming there are no leaks or additional mass sources.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                            <strong className="text-blue-800">Key Concept:</strong>
                            <p className="mt-2 text-blue-700">
                                Mass flow rate (ṁ) represents the amount of mass passing through a given cross-section per unit time and must remain constant throughout the system.
                            </p>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mass Flow Rate Formula</h2>
                        <p className="text-gray-700 mb-4">The mass flow rate is defined as:</p>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-800 mb-4">ṁ = ρ A V</div>
                                <div className="grid md:grid-cols-3 gap-4 text-left">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <div className="font-bold text-green-800">ρ (rho)</div>
                                        <div className="text-green-700">Density of the fluid</div>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <div className="font-bold text-blue-800">A</div>
                                        <div className="text-blue-700">Cross-sectional area</div>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <div className="font-bold text-purple-800">V</div>
                                        <div className="text-purple-700">Velocity of the fluid</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Conservation Principle</h2>
                        <p className="text-gray-700 mb-6">
                            Since mass must be conserved, the mass flow rate at one point must equal the mass flow rate at another point:
                        </p>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
                            <div className="text-center text-2xl font-bold text-gray-800 mb-4">ṁ₁ = ṁ₂</div>
                            <p className="text-gray-700 text-center">
                                This is the continuity equation for steady one-dimensional flow with one inlet and one outlet.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-3">For Incompressible Flow</h4>
                                <p className="text-gray-700 mb-4">
                                    When density remains constant (ρ₁ = ρ₂), the equation simplifies to:
                                </p>
                                <div className="bg-green-50 p-4 rounded-lg text-center mb-4">
                                    <div className="text-xl font-bold text-green-800">V₁A₁ = V₂A₂</div>
                                </div>
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <strong className="text-yellow-800">Key Relationship:</strong>
                                    <ul className="mt-2 space-y-1 text-yellow-700">
                                        <li>• If cross-sectional area decreases → velocity increases</li>
                                        <li>• If cross-sectional area increases → velocity decreases</li>
                                        <li>• Flow ≤ 100 m/s (328.084 ft/s) is considered incompressible</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-3">For Compressible Flow</h4>
                                <p className="text-gray-700 mb-4">
                                    When density can change from point to point, the full equation must be used:
                                </p>
                                <div className="bg-orange-50 p-4 rounded-lg text-center">
                                    <div className="text-xl font-bold text-orange-800">ρ₁V₁A₁ = ρ₂V₂A₂</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sample-problem-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Problem</h2>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                            <h4 className="text-lg font-bold text-blue-800 mb-3">Problem Statement</h4>
                            <p className="text-blue-700">
                                Consider a compressible convergent duct with an inlet area of 7 m² and an exit area of 3 m².
                                The air enters the duct with a velocity of 500 m/s and a density of 0.001 kg/m³.
                                The air leaves the duct at a velocity of 1000 m/s. What is the density at the exit?
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h4 className="text-lg font-bold text-gray-800 mb-4">Solution</h4>

                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <strong className="text-gray-800">Given:</strong>
                                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                                        <div>
                                            <div>ρ₁ = 0.001 kg/m³</div>
                                            <div>V₁ = 500 m/s</div>
                                            <div>A₁ = 7 m²</div>
                                        </div>
                                        <div>
                                            <div>V₂ = 1000 m/s</div>
                                            <div>A₂ = 3 m²</div>
                                            <div>ρ₂ = ?</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-4 rounded-lg">
                                    <strong className="text-green-800">Step 1:</strong> Rearrange the continuity equation
                                    <div className="text-center mt-2 text-lg">
                                        ρ₁V₁A₁ = ρ₂V₂A₂ → ρ₂ = (ρ₁V₁A₁)/(V₂A₂)
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <strong className="text-blue-800">Step 2:</strong> Substitute the values
                                    <div className="text-center mt-2 text-lg">
                                        ρ₂ = (0.001)(500)(7) / (1000)(3)
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <strong className="text-purple-800">Step 3:</strong> Calculate
                                    <div className="text-center mt-2">
                                        <div>ρ₂ = 3.5 / 3000</div>
                                        <div className="text-lg font-bold mt-2">ρ₂ = 0.001167 kg/m³</div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <strong className="text-yellow-800">Answer:</strong>
                                    <span className="text-yellow-700"> The density at the exit (ρ₂) is approximately 0.001167 kg/m³</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="applications-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Real-World Applications</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-green-800 mb-3">🚰 Pipe Flow Systems</h4>
                                <p className="text-green-700">
                                    Used in designing water distribution systems, where pipe diameter changes affect flow velocity to maintain constant flow rate.
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-blue-800 mb-3">✈️ Aerospace Engineering</h4>
                                <p className="text-blue-700">
                                    Critical for designing aircraft engines, nozzles, and understanding airflow over wings and through jet engines.
                                </p>
                            </div>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-orange-800 mb-3">🏭 Industrial Processes</h4>
                                <p className="text-orange-700">
                                    Applied in chemical processing plants, HVAC systems, and any industrial application involving fluid transport.
                                </p>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-purple-800 mb-3">🩸 Biomedical Engineering</h4>
                                <p className="text-purple-700">
                                    Used to understand blood flow through arteries and veins, especially in areas of stenosis or dilation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContinuityEquationContent;