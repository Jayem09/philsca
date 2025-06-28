import React from 'react';

const ViscousFlowContent = () => {
    return (
        <div className="viscous-flow-content">
            <div className="container max-w-4xl mx-auto p-6">
                <div className="header text-center">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        FINALS • MODULE 2 • FUNDAMENTALS OF AERODYNAMICS
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Introduction to Viscous Flow</h1>
                    <p className="text-xl text-gray-600 mb-6">Understanding Fluid Resistance and Internal Friction</p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mb-8">
                        Study of real-world fluid behavior considering viscosity effects.<br />
                        (Essential for understanding aerodynamic drag and boundary layer phenomena)
                    </div>
                </div>

                <div className="content-body space-y-8">
                    <div className="intro-section">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                            <h2 className="text-2xl font-bold text-blue-800 mb-4">What is Viscosity?</h2>
                            <p className="text-blue-700 leading-relaxed mb-4">
                                Viscosity refers to a fluid's resistance to deformation and internal friction when in motion. While an ideal fluid is often assumed to be inviscid (having no viscosity) for simplification in some theoretical models, real-world fluids, such as air and water, always exhibit viscosity, making the study of viscous flow essential in aerodynamics.
                            </p>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <strong className="text-blue-800">Key Concepts:</strong>
                                <ul className="mt-2 space-y-1 text-blue-700">
                                    <li>• Resistance to deformation in moving fluids</li>
                                    <li>• Internal friction between fluid layers</li>
                                    <li>• All real fluids exhibit viscosity</li>
                                    <li>• Critical for understanding aerodynamic behavior</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Flow Comparison: Ideal vs Real</h2>
                        <p className="text-gray-700 mb-6">
                            Understanding the differences between theoretical frictionless flow and real viscous flow is fundamental to aerodynamic analysis:
                        </p>

                        <div className="grid gap-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-4">🌊 Frictionless Flow (Ideal)</h3>

                                <div className="mb-6">
                                    <p className="text-green-700 mb-4">
                                        The study of ideal frictionless flow around a sphere provides valuable theoretical insights into fluid dynamics, though it deviates significantly from reality.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-green-800 mb-2">Assumptions</h4>
                                        <ul className="text-green-700 text-sm space-y-1">
                                            <li>• Symmetrical streamlines</li>
                                            <li>• No boundary layer formation</li>
                                            <li>• No flow separation occurs</li>
                                            <li>• Zero drag force</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-green-800 mb-2">Benefits</h4>
                                        <ul className="text-green-700 text-sm space-y-1">
                                            <li>• Simplified calculations</li>
                                            <li>• Fundamental principle establishment</li>
                                            <li>• Theoretical framework development</li>
                                            <li>• Mathematical model baseline</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-red-800 mb-4">🌪️ Real Flow (Viscous)</h3>

                                <div className="mb-6">
                                    <p className="text-red-700 mb-4">
                                        In real-world fluid dynamics, viscosity significantly alters the flow around a sphere by introducing frictional effects that create complex flow phenomena.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-red-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-red-800 mb-2">Flow Characteristics</h4>
                                        <ul className="text-red-700 text-sm space-y-1">
                                            <li>• Boundary layer development</li>
                                            <li>• No-slip condition at surface</li>
                                            <li>• Flow separation and wake formation</li>
                                            <li>• Adverse pressure gradients</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-red-800 mb-2">Drag Components</h4>
                                        <ul className="text-red-700 text-sm space-y-1">
                                            <li>• Skin friction drag</li>
                                            <li>• Pressure drag from wake</li>
                                            <li>• Shear stress effects</li>
                                            <li>• Turbulent wake formation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Boundary Layer Theory</h2>

                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-bold text-orange-800 mb-4">Definition and Characteristics</h3>
                            <p className="text-orange-700 mb-4">
                                The boundary layer is the region of viscous flow which has been retarded owing to friction at the surface. A flow field can be split into two regions: one where friction is important (boundary layer), and another region of frictionless flow outside the boundary layer.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-orange-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-orange-800 mb-2">Boundary Layer Region</h4>
                                        <ul className="text-orange-700 text-sm space-y-1">
                                            <li>• Friction effects dominate</li>
                                            <li>• Velocity varies from zero to free-stream</li>
                                            <li>• Thickness grows along surface</li>
                                            <li>• Shear stress generation</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-orange-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-orange-800 mb-2">External Flow Region</h4>
                                        <ul className="text-orange-700 text-sm space-y-1">
                                            <li>• Potential flow behavior</li>
                                            <li>• Negligible friction effects</li>
                                            <li>• Uniform velocity distribution</li>
                                            <li>• Theoretical flow patterns</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                            <h4 className="text-lg font-bold text-yellow-800 mb-3">🔍 Key Boundary Layer Effects</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-yellow-700 mb-2"><strong>Growing Thickness:</strong></p>
                                    <p className="text-yellow-700 text-sm">More flow becomes affected by friction as distance along the surface increases</p>
                                </div>
                                <div>
                                    <p className="text-yellow-700 mb-2"><strong>Skin Friction Drag:</strong></p>
                                    <p className="text-yellow-700 text-sm">Shear stress acts tangentially to surface, creating drag force</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Absolute Coefficient of Viscosity</h2>

                        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-bold text-indigo-800 mb-4">Temperature Effects on Viscosity</h3>
                            
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-indigo-100 p-4 rounded-lg">
                                    <h4 className="font-bold text-indigo-800 mb-2">💧 Liquids</h4>
                                    <p className="text-indigo-700 text-sm mb-2">
                                        μ decreases as temperature increases
                                    </p>
                                    <p className="text-indigo-600 text-xs italic">
                                        Example: Oil gets thinner when heated
                                    </p>
                                </div>
                                <div className="bg-indigo-100 p-4 rounded-lg">
                                    <h4 className="font-bold text-indigo-800 mb-2">💨 Gases</h4>
                                    <p className="text-indigo-700 text-sm mb-2">
                                        μ increases as temperature increases
                                    </p>
                                    <p className="text-indigo-600 text-xs italic">
                                        Example: Air gets thicker when heated
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white border border-indigo-200 rounded-lg p-4">
                                <h4 className="font-bold text-indigo-800 mb-3">Standard Sea-Level Values for Air</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-indigo-50 p-3 rounded">
                                        <h5 className="font-bold text-indigo-800 mb-2">SI Units</h5>
                                        <p className="text-indigo-700 font-mono text-sm">
                                            μ = 1.7894 × 10⁻⁵ kg/(m·s)
                                        </p>
                                    </div>
                                    <div className="bg-indigo-50 p-3 rounded">
                                        <h5 className="font-bold text-indigo-800 mb-2">English Units</h5>
                                        <p className="text-indigo-700 font-mono text-sm">
                                            μ = 3.7373 × 10⁻⁷ slugs/(ft·s)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Applications and Importance</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-purple-800 mb-3">🛩️ Aerodynamic Design</h4>
                                <p className="text-purple-700 mb-3">
                                    Viscous flow effects are crucial for designing efficient aircraft and understanding performance characteristics.
                                </p>
                                <ul className="text-purple-700 text-sm space-y-1">
                                    <li>• Wing shape optimization</li>
                                    <li>• Drag reduction strategies</li>
                                    <li>• Control surface effectiveness</li>
                                    <li>• Fuel efficiency improvements</li>
                                </ul>
                            </div>

                            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-cyan-800 mb-3">🏎️ Vehicle Design</h4>
                                <p className="text-cyan-700 mb-3">
                                    Understanding viscous effects helps optimize automotive and sports equipment for better performance.
                                </p>
                                <ul className="text-cyan-700 text-sm space-y-1">
                                    <li>• Automotive aerodynamics</li>
                                    <li>• Sports equipment design</li>
                                    <li>• Wind resistance minimization</li>
                                    <li>• Performance optimization</li>
                                </ul>
                            </div>

                            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-teal-800 mb-3">🔬 Engineering Analysis</h4>
                                <p className="text-teal-700 mb-3">
                                    Viscous flow theory provides the foundation for computational fluid dynamics and experimental validation.
                                </p>
                                <ul className="text-teal-700 text-sm space-y-1">
                                    <li>• CFD modeling accuracy</li>
                                    <li>• Wind tunnel testing</li>
                                    <li>• Performance prediction</li>
                                    <li>• Design validation</li>
                                </ul>
                            </div>

                            <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-rose-800 mb-3">⚙️ Industrial Applications</h4>
                                <p className="text-rose-700 mb-3">
                                    Viscous flow principles apply to various industrial processes and equipment design.
                                </p>
                                <ul className="text-rose-700 text-sm space-y-1">
                                    <li>• Turbomachinery design</li>
                                    <li>• Heat exchanger efficiency</li>
                                    <li>• Pipeline flow analysis</li>
                                    <li>• Process optimization</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mt-6">
                            <strong className="text-indigo-800">Fundamental Principle:</strong>
                            <span className="text-indigo-700"> Understanding viscous flow is essential for real-world aerodynamic applications. While ideal flow provides theoretical foundations, viscous effects determine actual performance, drag characteristics, and design requirements in practical engineering applications.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViscousFlowContent;