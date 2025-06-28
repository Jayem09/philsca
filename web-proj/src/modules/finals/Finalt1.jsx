import React from 'react';

const AirfoilsContent = () => {
    return (
        <div className="airfoils-content">
            <div className="container max-w-4xl mx-auto p-6">
                <div className="header text-center">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        FINALS • MODULE 1 • FUNDAMENTALS OF AERODYNAMICS
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Airfoils</h1>
                    <p className="text-xl text-gray-600 mb-6">Streamlined Bodies for Aerodynamic Force Generation</p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mb-8">
                        Cross-sectional shapes designed to produce lift while minimizing drag.<br />
                        (Foundation of aircraft wing design and aerodynamic performance)
                    </div>
                </div>

                <div className="content-body space-y-8">
                    <div className="intro-section">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                            <h2 className="text-2xl font-bold text-blue-800 mb-4">What is an Airfoil?</h2>
                            <p className="text-blue-700 leading-relaxed mb-4">
                                An airfoil or section is the streamlined body which when set at a suitable angle of attack, produces more lift than drag while also producing a manageable pitching moment. It is a solid body designed to move through gaseous medium and obtain useful force reactions other than drag.
                            </p>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <strong className="text-blue-800">Key Characteristics:</strong>
                                <ul className="mt-2 space-y-1 text-blue-700">
                                    <li>• Streamlined cross-sectional shape</li>
                                    <li>• Generates lift force when at appropriate angle of attack</li>
                                    <li>• Produces manageable pitching moments</li>
                                    <li>• Minimizes drag while maximizing useful forces</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Examples of Airfoil Applications</h2>

                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 text-center">
                                <div className="text-3xl mb-2">✈️</div>
                                <div className="font-bold text-sky-800 mb-1">Aircraft Components</div>
                                <div className="text-sky-700 text-sm">Wings, control surfaces, fins</div>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                                <div className="text-3xl mb-2">⚡</div>
                                <div className="font-bold text-green-800 mb-1">Energy Systems</div>
                                <div className="text-green-700 text-sm">Turbine blades, windmill blades</div>
                            </div>

                            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 text-center">
                                <div className="text-3xl mb-2">⛵</div>
                                <div className="font-bold text-cyan-800 mb-1">Marine Applications</div>
                                <div className="text-cyan-700 text-sm">Sails, marine propellers</div>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <strong className="text-gray-800">Common Applications:</strong>
                            <div className="text-gray-700 text-sm mt-2 grid md:grid-cols-2 gap-2">
                                <div>• Aircraft wings</div>
                                <div>• Turbine blades</div>
                                <div>• Control surfaces</div>
                                <div>• Windmill blades</div>
                                <div>• Fins and stabilizers</div>
                                <div>• Sails</div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of Airfoils</h2>
                        <p className="text-gray-700 mb-6">
                            Airfoils are classified into two main categories based on their geometric shape and camber characteristics:
                        </p>

                        <div className="grid gap-6">
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-orange-800 mb-4">1. Symmetrical Airfoil</h3>

                                <div className="mb-6">
                                    <p className="text-orange-700 mb-4">
                                        The upper and lower camber are equal in shape. Both surfaces have identical curvature, creating a symmetric profile about the chord line.
                                    </p>
                                </div>

                                <div className="bg-white border border-orange-200 rounded-lg p-4 mb-4">


                                    <img src="../../assets/Airfoil.png" alt="airfoil" />


                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-orange-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-orange-800 mb-2">Characteristics</h4>
                                        <ul className="text-orange-700 text-sm space-y-1">
                                            <li>• Zero lift at zero angle of attack</li>
                                            <li>• Equal pressure distribution when level</li>
                                            <li>• Predictable stall characteristics</li>
                                            <li>• Center of pressure remains relatively stable</li>
                                        </ul>
                                    </div>
                                    <div className="bg-orange-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-orange-800 mb-2">Applications</h4>
                                        <ul className="text-orange-700 text-sm space-y-1">
                                            <li>• Aerobatic aircraft</li>
                                            <li>• Control surfaces (rudder, elevators)</li>
                                            <li>• Vertical stabilizers</li>
                                            <li>• Some helicopter rotor blades</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-emerald-800 mb-4">2. Asymmetrical Airfoil</h3>

                                <div className="mb-6">
                                    <p className="text-emerald-700 mb-4">
                                        The upper and lower cambers are not equal in shape. The upper camber has a greater curvature than the lower camber, creating an asymmetric profile.
                                    </p>
                                </div>

                                <div className="bg-white border border-orange-200 rounded-lg p-4 mb-4">


                                    <img src="../../assets/Airfoil1.png" alt="airfoil" />

                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-emerald-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-emerald-800 mb-2">Characteristics</h4>
                                        <ul className="text-emerald-700 text-sm space-y-1">
                                            <li>• Produces lift even at zero angle of attack</li>
                                            <li>• Higher lift coefficients achievable</li>
                                            <li>• More efficient for normal flight operations</li>
                                            <li>• Camber creates pressure differential</li>
                                        </ul>
                                    </div>
                                    <div className="bg-emerald-100 p-4 rounded-lg">
                                        <h4 className="font-bold text-emerald-800 mb-2">Applications</h4>
                                        <ul className="text-emerald-700 text-sm space-y-1">
                                            <li>• Commercial aircraft wings</li>
                                            <li>• General aviation aircraft</li>
                                            <li>• Transport aircraft</li>
                                            <li>• Most fixed-wing aircraft</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Airfoil Geometry and Terminology</h2>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Key Geometric Elements</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <h4 className="font-bold text-blue-800 mb-2">Chord Line</h4>
                                        <p className="text-blue-700 text-sm">Straight line connecting the leading edge to the trailing edge of the airfoil.</p>
                                    </div>

                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                        <h4 className="font-bold text-green-800 mb-2">Camber Line</h4>
                                        <p className="text-green-700 text-sm">Curved line equidistant from the upper and lower surfaces of the airfoil.</p>
                                    </div>

                                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                        <h4 className="font-bold text-purple-800 mb-2">Leading Edge</h4>
                                        <p className="text-purple-700 text-sm">Forward-most point of the airfoil where airflow first encounters the surface.</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                        <h4 className="font-bold text-orange-800 mb-2">Trailing Edge</h4>
                                        <p className="text-orange-700 text-sm">Rearmost point of the airfoil where upper and lower surface flows merge.</p>
                                    </div>

                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                        <h4 className="font-bold text-red-800 mb-2">Thickness</h4>
                                        <p className="text-red-700 text-sm">Maximum distance between upper and lower surfaces, perpendicular to chord line.</p>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                        <h4 className="font-bold text-yellow-800 mb-2">Camber</h4>
                                        <p className="text-yellow-700 text-sm">Maximum distance between chord line and camber line, indicating airfoil curvature.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Comparison: Symmetrical vs Asymmetrical</h2>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">Characteristic</th>
                                        <th className="border border-gray-300 p-4 text-left font-bold text-orange-800">Symmetrical Airfoil</th>
                                        <th className="border border-gray-300 p-4 text-left font-bold text-emerald-800">Asymmetrical Airfoil</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 p-4 font-medium text-gray-800">Lift at α = 0°</td>
                                        <td className="border border-gray-300 p-4 text-orange-700">Zero lift</td>
                                        <td className="border border-gray-300 p-4 text-emerald-700">Positive lift</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 p-4 font-medium text-gray-800">Stall Characteristics</td>
                                        <td className="border border-gray-300 p-4 text-orange-700">Predictable, gentle</td>
                                        <td className="border border-gray-300 p-4 text-emerald-700">Variable depending on design</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 p-4 font-medium text-gray-800">Pitching Moment</td>
                                        <td className="border border-gray-300 p-4 text-orange-700">Zero at α = 0°</td>
                                        <td className="border border-gray-300 p-4 text-emerald-700">Nose-down moment</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 p-4 font-medium text-gray-800">Maximum Lift</td>
                                        <td className="border border-gray-300 p-4 text-orange-700">Lower C<sub>L max</sub></td>
                                        <td className="border border-gray-300 p-4 text-emerald-700">Higher C<sub>L max</sub></td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 p-4 font-medium text-gray-800">Best Use</td>
                                        <td className="border border-gray-300 p-4 text-orange-700">Aerobatics, control surfaces</td>
                                        <td className="border border-gray-300 p-4 text-emerald-700">Efficient cruise flight</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="applications-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Design Considerations</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-blue-800 mb-3">⚖️ Performance Trade-offs</h4>
                                <p className="text-blue-700 mb-3">
                                    Airfoil selection involves balancing lift generation, drag minimization, stall characteristics, and structural requirements.
                                </p>
                                <ul className="text-blue-700 text-sm space-y-1">
                                    <li>• Lift-to-drag ratio optimization</li>
                                    <li>• Stall speed requirements</li>
                                    <li>• Operating speed range</li>
                                    <li>• Structural load considerations</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-red-800 mb-3">🎯 Mission Requirements</h4>
                                <p className="text-red-700 mb-3">
                                    Different aircraft missions require specific airfoil characteristics for optimal performance and safety.
                                </p>
                                <ul className="text-red-700 text-sm space-y-1">
                                    <li>• High-speed cruise efficiency</li>
                                    <li>• Low-speed handling qualities</li>
                                    <li>• Maneuverability requirements</li>
                                    <li>• Environmental operating conditions</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-purple-800 mb-3">🔬 Advanced Design</h4>
                                <p className="text-purple-700 mb-3">
                                    Modern airfoil design uses computational methods and wind tunnel testing for optimization.
                                </p>
                                <ul className="text-purple-700 text-sm space-y-1">
                                    <li>• Computational Fluid Dynamics (CFD)</li>
                                    <li>• Wind tunnel validation</li>
                                    <li>• Multi-point optimization</li>
                                    <li>• Adaptive airfoil concepts</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-green-800 mb-3">📐 Manufacturing</h4>
                                <p className="text-green-700 mb-3">
                                    Airfoil shape must be manufacturable while maintaining aerodynamic precision and structural integrity.
                                </p>
                                <ul className="text-green-700 text-sm space-y-1">
                                    <li>• Manufacturing tolerances</li>
                                    <li>• Surface finish requirements</li>
                                    <li>• Material considerations</li>
                                    <li>• Cost-effectiveness</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mt-6">
                            <strong className="text-indigo-800">Fundamental Principle:</strong>
                            <span className="text-indigo-700"> Airfoil design is the foundation of all aerodynamic surfaces. Understanding the basic differences between symmetrical and asymmetrical airfoils is crucial for aircraft design, performance analysis, and flight operations.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AirfoilsContent;