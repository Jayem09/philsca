import React from 'react';

const BernoulliEquationContent = () => {
    return (
        <div className="bernoulli-equation-content">
            <div className="container max-w-4xl mx-auto p-6">
                <div className="header text-center">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        MIDTERMS • MODULE 1 • TOPIC 4
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Bernoulli's Equation</h1>
                    <p className="text-xl text-gray-600 mb-6">Conservation of Energy in Flowing Fluids</p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mb-8">
                        Named after Daniel Bernoulli, an 18th century mathematician and physicist.<br />
                        (Fundamental principle relating pressure, velocity, and energy in fluid flow)
                    </div>
                </div>

                <div className="content-body space-y-8">
                    <div className="intro-section">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Bernoulli's Equation is a statement of the conservation of energy principle appropriate for flowing fluids. The qualitative behavior that is usually labeled with the term "Bernoulli effect" is the lowering of fluid pressure in regions where the flow velocity is increased. This lowering of pressure in a constriction of a flow path may seem counterintuitive but seems less so when you consider pressure to be energy density. In the high velocity flow through the constriction, kinetic energy must increase at the expense of pressure energy.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                            <strong className="text-blue-800">Bernoulli Effect:</strong>
                            <ul className="mt-2 space-y-1 text-blue-700">
                                <li>• Increase in velocity leads to decrease in pressure</li>
                                <li>• Energy conservation in fluid flow</li>
                                <li>• Kinetic energy ↔ Pressure energy exchange</li>
                                <li>• Foundation of aerodynamics and fluid mechanics</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Bernoulli's Equation Formulas</h2>
                        <p className="text-gray-700 mb-4">The equation varies based on flow compressibility:</p>

                        <div className="grid gap-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Incompressible Flow</h3>
                                <div className="text-center mb-4">
                                    <div className="text-2xl font-bold text-gray-800 mb-4">P₁ + ρV₁²/2 = P₂ + ρV₂²/2</div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-100 p-3 rounded-lg">
                                        <div className="font-bold text-green-800">ρ = constant</div>
                                        <div className="text-green-700">Density remains unchanged</div>
                                    </div>
                                    <div className="bg-green-100 p-3 rounded-lg">
                                        <div className="font-bold text-green-800">Typical for</div>
                                        <div className="text-green-700">Liquids, low-speed gas flow</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-orange-800 mb-4">Compressible Flow</h3>
                                <div className="text-center mb-4">
                                    <div className="text-2xl font-bold text-gray-800 mb-4">P₁ + ρ₁V₁²/2 = P₂ + ρ₂V₂²/2</div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-orange-100 p-3 rounded-lg">
                                        <div className="font-bold text-orange-800">ρ₁ ≠ ρ₂</div>
                                        <div className="text-orange-700">Density varies with pressure</div>
                                    </div>
                                    <div className="bg-orange-100 p-3 rounded-lg">
                                        <div className="font-bold text-orange-800">Typical for</div>
                                        <div className="text-orange-700">High-speed gas flow</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
                            <h4 className="text-lg font-bold text-gray-800 mb-4">Variable Definitions</h4>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <div className="font-bold text-red-800">P</div>
                                    <div className="text-red-700">Pressure<br />(Pa or N/m²)</div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <div className="font-bold text-blue-800">ρ</div>
                                    <div className="text-blue-700">Density<br />(kg/m³)</div>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <div className="font-bold text-green-800">V</div>
                                    <div className="text-green-700">Velocity<br />(m/s)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Derived Formulas</h2>
                        <p className="text-gray-700 mb-6">
                            Useful rearrangements for solving different variables:
                        </p>

                        <div className="grid gap-4">
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                <div className="font-bold text-purple-800 mb-2">Solving for Pressure</div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <div className="text-purple-800 font-mono">P₁ = P₂ + ρV₂²/2 - ρV₁²/2</div>
                                    </div>
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <div className="text-purple-800 font-mono">P₂ = P₁ + ρV₁²/2 - ρV₂²/2</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                                <div className="font-bold text-indigo-800 mb-2">Solving for Velocity</div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-indigo-100 p-3 rounded-lg">
                                        <div className="text-indigo-800 font-mono">V₂ = √(2(P₁-P₂)/ρ + V₁²)</div>
                                    </div>
                                    <div className="bg-indigo-100 p-3 rounded-lg">
                                        <div className="text-indigo-800 font-mono">V₁ = √(2(P₂-P₁)/ρ + V₂²)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sample-problem-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Problem</h2>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                            <h4 className="text-lg font-bold text-blue-800 mb-3">Problem Statement</h4>
                            <p className="text-blue-700 mb-3">
                                An aircraft engine duct is designed to gradually slow down the airflow as it moves through. Air enters the duct with a velocity of 150.54 m/s at an inlet pressure of 140,516 Pa. At the duct exit, the flow has a Mach number of 0.5 and a temperature of 277 K. The flow is considered incompressible, with a constant air density of 1.07 kg/m³. Find the pressure at the exit.
                            </p>
                            <div className="mt-3">
                                <strong className="text-blue-800">Given:</strong>
                                <div className="text-blue-700">
                                    <div>• V₁ = 150.54 m/s</div>
                                    <div>• P₁ = 140,516 Pa</div>
                                    <div>• M₂ = 0.5</div>
                                    <div>• T₂ = 277 K</div>
                                    <div>• ρ = 1.07 kg/m³</div>
                                    <div>• P₂ = ?</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h4 className="text-lg font-bold text-gray-800 mb-4">Solution</h4>

                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <strong className="text-gray-800">Step 1:</strong> Calculate speed of sound
                                    <div className="mt-2">
                                        <div>Using the formula: a = √γRT</div>
                                        <div>Where γ = 1.4, R = 287 J/(kg·K), T = 277 K</div>
                                        <div>a = √(1.4 × 287 × 277)</div>
                                        <div>a = √111,461.8 = 333.61 m/s</div>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-4 rounded-lg">
                                    <strong className="text-green-800">Step 2:</strong> Calculate exit velocity using Mach number
                                    <div className="mt-2">
                                        <div>M = V/a, therefore V = M × a</div>
                                        <div>V₂ = M₂ × a = 0.5 × 333.61</div>
                                        <div>V₂ = 166.81 m/s</div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <strong className="text-blue-800">Step 3:</strong> Apply Bernoulli's equation
                                    <div className="mt-2">
                                        <div>P₂ = P₁ + ρV₁²/2 - ρV₂²/2</div>
                                        <div>P₂ = 140,516 + (1.07×150.54²)/2 - (1.07×166.81²)/2</div>
                                        <div>P₂ = 140,516 + 12,124.3 - 14,892.0</div>
                                        <div>P₂ = 137,748.3 Pa</div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <strong className="text-yellow-800">Final Answer:</strong>
                                    <span className="text-yellow-700"> The exit pressure is 137,748.3 Pa</span>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <strong className="text-green-800">Physical Interpretation:</strong>
                                    <span className="text-green-700"> As velocity increased from 150.54 m/s to 166.81 m/s, pressure decreased from 140,516 Pa to 137,748.3 Pa, demonstrating the Bernoulli effect.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="applications-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Practical Applications</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-blue-800 mb-3">✈️ Aircraft Wings</h4>
                                <p className="text-blue-700">
                                    Explains lift generation through differential airflow velocities over wing surfaces creating pressure differences.
                                </p>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-red-800 mb-3">🌪️ Venturi Effect</h4>
                                <p className="text-red-700">
                                    Applied in carburetors, flow meters, and HVAC systems where fluid acceleration creates pressure drops.
                                </p>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-purple-800 mb-3">🚁 Rotor Systems</h4>
                                <p className="text-purple-700">
                                    Critical for helicopter rotor design and analysis, explaining thrust generation and power requirements.
                                </p>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-green-800 mb-3">⚡ Engine Design</h4>
                                <p className="text-green-700">
                                    Essential for jet engine nozzle design, compressor analysis, and turbine performance optimization.
                                </p>
                            </div>
                        </div>

                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mt-6">
                            <strong className="text-orange-800">Important Limitation:</strong>
                            <span className="text-orange-700"> Bernoulli's equation assumes steady, inviscid, incompressible flow along a streamline. Real-world applications often require corrections for viscosity and compressibility effects.</span>
                        </div>
                    </div>

                    <div className="key-concepts-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Concepts to Remember</h2>

                        <div className="grid gap-4">
                            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-center">
                                <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">1</div>
                                <div>
                                    <div className="font-bold text-emerald-800">Energy Conservation</div>
                                    <div className="text-emerald-700">Total energy along a streamline remains constant</div>
                                </div>
                            </div>

                            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 flex items-center">
                                <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">2</div>
                                <div>
                                    <div className="font-bold text-cyan-800">Inverse Relationship</div>
                                    <div className="text-cyan-700">Higher velocity always means lower pressure</div>
                                </div>
                            </div>

                            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 flex items-center">
                                <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">3</div>
                                <div>
                                    <div className="font-bold text-teal-800">Assumptions</div>
                                    <div className="text-teal-700">Steady flow, no viscosity, incompressible (for basic form)</div>
                                </div>
                            </div>

                            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 flex items-center">
                                <div className="bg-sky-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">4</div>
                                <div>
                                    <div className="font-bold text-sky-800">Energy Exchange</div>
                                    <div className="text-sky-700">Kinetic energy ↔ Pressure energy transformation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BernoulliEquationContent;