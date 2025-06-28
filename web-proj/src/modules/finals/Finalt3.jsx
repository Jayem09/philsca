import React from 'react';

const NACAairfoilContent = () => {
    return (
        <div className="naca-airfoil-content">
            <div className="container max-w-4xl mx-auto p-6">
                <div className="header text-center">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        FINALS • MODULE 1 • TOPIC 3
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">NACA Airfoil</h1>
                    <p className="text-xl text-gray-600 mb-6">Standardized Airfoil Design System</p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mb-8">
                        Systematic airfoil series developed by NACA for optimized aerodynamic performance.<br />
                        (Foundation of modern aircraft wing design and aeronautical engineering)
                    </div>
                </div>

                <div className="content-body space-y-8">
                    <div className="intro-section">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                            <h2 className="text-2xl font-bold text-blue-800 mb-4">What is NACA Airfoil?</h2>
                            <p className="text-blue-700 leading-relaxed mb-4">
                                The NACA airfoil series represents a significant advancement in the field of aerodynamics, developed by 
                                the National Advisory Committee for Aeronautics (NACA), the precursor to NASA. These airfoils were 
                                designed to optimize the aerodynamic performance of aircraft wings, contributing to the development 
                                of more efficient and stable flying vehicles.
                            </p>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <strong className="text-blue-800">Key Features:</strong>
                                <ul className="mt-2 space-y-1 text-blue-700">
                                    <li>• Standardized and reliable designs</li>
                                    <li>• Systematic numerical designation system</li>
                                    <li>• Optimized aerodynamic performance</li>
                                    <li>• Relevant to both historical and modern engineering</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">NACA Designation System</h2>
                        <p className="text-gray-700 mb-6">
                            The NACA airfoil shape is described by a series of digits followed by the word NACA. 
                            The designation can be either 4, 5, or 6 digits, each providing specific geometric information.
                        </p>

                        <div className="grid gap-6">
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-orange-800 mb-4">4-Digit Airfoils</h3>
                                
                                <div className="bg-orange-100 p-4 rounded-lg mb-4">
                                    <h4 className="font-bold text-orange-800 mb-2">Digit Breakdown:</h4>
                                    <ul className="text-orange-700 space-y-1">
                                        <li><strong>1st digit:</strong> Maximum camber as percentage of chord</li>
                                        <li><strong>2nd digit:</strong> Position of maximum camber in tenths of chord</li>
                                        <li><strong>Last 2 digits:</strong> Maximum thickness as percentage of chord</li>
                                    </ul>
                                </div>

                                <div className="bg-white border border-orange-300 rounded-lg p-4">
                                    <h4 className="font-bold text-orange-800 mb-3">Example: NACA 4412</h4>
                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div className="bg-orange-50 p-3 rounded">
                                            <div className="font-bold text-orange-800">4</div>
                                            <div className="text-orange-700">Maximum camber = 0.04 (chord)</div>
                                        </div>
                                        <div className="bg-orange-50 p-3 rounded">
                                            <div className="font-bold text-orange-800">4</div>
                                            <div className="text-orange-700">Position = 0.4 (chord) from L.E</div>
                                        </div>
                                        <div className="bg-orange-50 p-3 rounded">
                                            <div className="font-bold text-orange-800">12</div>
                                            <div className="text-orange-700">Maximum thickness = 0.12 (chord)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-emerald-800 mb-4">5-Digit Airfoils</h3>
                                
                                <div className="bg-emerald-100 p-4 rounded-lg mb-4">
                                    <h4 className="font-bold text-emerald-800 mb-2">Digit Breakdown:</h4>
                                    <ul className="text-emerald-700 space-y-1">
                                        <li><strong>1st digit:</strong> Maximum camber as percentage of chord</li>
                                        <li><strong>2nd & 3rd digits:</strong> Position of camber in percentage divided by 2</li>
                                        <li><strong>Last 2 digits:</strong> Maximum thickness as percentage of chord</li>
                                    </ul>
                                </div>

                                <div className="bg-white border border-emerald-300 rounded-lg p-4">
                                    <h4 className="font-bold text-emerald-800 mb-3">Example: NACA 23012</h4>
                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div className="bg-emerald-50 p-3 rounded">
                                            <div className="font-bold text-emerald-800">2</div>
                                            <div className="text-emerald-700">Maximum camber = 0.02 (chord)</div>
                                        </div>
                                        <div className="bg-emerald-50 p-3 rounded">
                                            <div className="font-bold text-emerald-800">30</div>
                                            <div className="text-emerald-700">Position = (0.30/2) = 0.15 (chord) from L.E</div>
                                        </div>
                                        <div className="bg-emerald-50 p-3 rounded">
                                            <div className="font-bold text-emerald-800">12</div>
                                            <div className="text-emerald-700">Maximum thickness = 0.12 (chord)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Wing Geometry Formulas</h2>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Basic Wing Parameters</h3>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <h4 className="font-bold text-blue-800 mb-2">Symbols</h4>
                                    <ul className="text-blue-700 text-sm space-y-1">
                                        <li><strong>b</strong> = wingspan</li>
                                        <li><strong>c</strong> = chord</li>
                                        <li><strong>s</strong> = wing area</li>
                                        <li><strong>AR</strong> = aspect ratio</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <h4 className="font-bold text-green-800 mb-2">Area & Chord</h4>
                                    <ul className="text-green-700 text-sm space-y-1">
                                        <li><strong>c = s/b</strong> (chord)</li>
                                        <li><strong>s = bc</strong> (wing area)</li>
                                        <li><strong>b = s/c</strong> (wingspan)</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                    <h4 className="font-bold text-purple-800 mb-2">Aspect Ratio</h4>
                                    <ul className="text-purple-700 text-sm space-y-1">
                                        <li><strong>AR = b/c</strong></li>
                                        <li><strong>AR = b²/s</strong></li>
                                        <li>(dimensionless)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Worked Examples</h2>

                        <div className="space-y-6">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-yellow-800 mb-4">Example 1: NACA 4-Digit Analysis</h3>
                                
                                <div className="bg-yellow-100 p-4 rounded-lg mb-4">
                                    <strong className="text-yellow-800">Given:</strong> NACA 3112, Chord (C) = 2m
                                </div>

                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-white border border-yellow-300 rounded-lg p-4">
                                        <h4 className="font-bold text-yellow-800">Maximum Camber</h4>
                                        <p className="text-yellow-700 text-sm mt-2">
                                            Cam<sub>max</sub> = 3/100 = 0.03 × 2 = <strong>0.06m</strong>
                                        </p>
                                    </div>
                                    <div className="bg-white border border-yellow-300 rounded-lg p-4">
                                        <h4 className="font-bold text-yellow-800">Location of Max Camber</h4>
                                        <p className="text-yellow-700 text-sm mt-2">
                                            LocCam<sub>max</sub> = 1/10 = 0.1 × 2 = <strong>0.2m away from L.E</strong>
                                        </p>
                                    </div>
                                    <div className="bg-white border border-yellow-300 rounded-lg p-4">
                                        <h4 className="font-bold text-yellow-800">Maximum Thickness</h4>
                                        <p className="text-yellow-700 text-sm mt-2">
                                            M.T = 12/100 = 0.12 × 2 = <strong>0.24m</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-cyan-800 mb-4">Example 2: NACA 5-Digit Analysis</h3>
                                
                                <div className="bg-cyan-100 p-4 rounded-lg mb-4">
                                    <strong className="text-cyan-800">Given:</strong> NACA 33122, Chord = 0.7m
                                </div>

                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-white border border-cyan-300 rounded-lg p-4">
                                        <h4 className="font-bold text-cyan-800">Maximum Camber</h4>
                                        <p className="text-cyan-700 text-sm mt-2">
                                            Cam<sub>max</sub> = 3/100 = 0.03 × 0.7 = <strong>0.021m</strong>
                                        </p>
                                    </div>
                                    <div className="bg-white border border-cyan-300 rounded-lg p-4">
                                        <h4 className="font-bold text-cyan-800">Location of Max Camber</h4>
                                        <p className="text-cyan-700 text-sm mt-2">
                                            LocCam<sub>max</sub> = 31/100 ÷ 2 = 0.155 × 0.7 = <strong>0.1085m away from L.E</strong>
                                        </p>
                                    </div>
                                    <div className="bg-white border border-cyan-300 rounded-lg p-4">
                                        <h4 className="font-bold text-cyan-800">Maximum Thickness</h4>
                                        <p className="text-cyan-700 text-sm mt-2">
                                            M.T = 22/100 = 0.22 × 0.7 = <strong>0.154m</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Aerodynamic Forces</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-red-800 mb-4">Drag Force</h3>
                                <p className="text-red-700 mb-4">
                                    The component of aerodynamic force parallel to the relative wind.
                                </p>
                                
                                <div className="bg-red-100 p-4 rounded-lg mb-4">
                                    <div className="text-center text-lg font-bold text-red-800">
                                        D = ½ρsv²C<sub>D</sub>
                                    </div>
                                </div>

                                <div className="bg-white border border-red-300 rounded-lg p-4">
                                    <h4 className="font-bold text-red-800 mb-2">Where:</h4>
                                    <ul className="text-red-700 text-sm space-y-1">
                                        <li><strong>D</strong> = Drag force (N or lbf)</li>
                                        <li><strong>C<sub>D</sub></strong> = Coefficient of drag (unitless)</li>
                                        <li><strong>ρ</strong> = Density (kg/m³ or slugs/ft³)</li>
                                        <li><strong>s</strong> = Wing area (ft² or m²)</li>
                                        <li><strong>v</strong> = Velocity (fps or mps)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Lift Force</h3>
                                <p className="text-green-700 mb-4">
                                    The component of aerodynamic force perpendicular to the relative wind.
                                </p>
                                
                                <div className="bg-green-100 p-4 rounded-lg mb-4">
                                    <div className="text-center text-lg font-bold text-green-800">
                                        L = ½ρsv²C<sub>L</sub>
                                    </div>
                                </div>

                                <div className="bg-white border border-green-300 rounded-lg p-4">
                                    <h4 className="font-bold text-green-800 mb-2">Where:</h4>
                                    <ul className="text-green-700 text-sm space-y-1">
                                        <li><strong>L</strong> = Lift force (N or lbf)</li>
                                        <li><strong>C<sub>L</sub></strong> = Coefficient of lift (unitless)</li>
                                        <li><strong>ρ</strong> = Density (kg/m³ or slugs/ft³)</li>
                                        <li><strong>s</strong> = Wing area (ft² or m²)</li>
                                        <li><strong>v</strong> = Velocity (fps or mps)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Drag Calculation Example</h2>

                        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                            <h3 className="text-lg font-bold text-indigo-800 mb-4">Complete Drag Force Calculation</h3>
                            
                            <div className="bg-indigo-100 p-4 rounded-lg mb-4">
                                <strong className="text-indigo-800">Given:</strong>
                                <ul className="text-indigo-700 mt-2 space-y-1">
                                    <li>Height (h) = 1.8 km → 1800m</li>
                                    <li>Coefficient of drag (C<sub>D</sub>) = 0.14</li>
                                    <li>Wing area (s) = 144 m²</li>
                                    <li>Velocity (v) = 100 m/s</li>
                                </ul>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border border-indigo-300 rounded-lg p-4">
                                    <h4 className="font-bold text-indigo-800 mb-2">Step 1: Find Temperature</h4>
                                    <p className="text-indigo-700 text-sm">
                                        T = T₀ + ah<br />
                                        T = 288.2 + (-0.0065)(1800)<br />
                                        <strong>T = 276.5 K</strong>
                                    </p>
                                </div>

                                <div className="bg-white border border-indigo-300 rounded-lg p-4">
                                    <h4 className="font-bold text-indigo-800 mb-2">Step 2: Find Density</h4>
                                    <p className="text-indigo-700 text-sm">
                                        ρ = 1.225(276.5/288.2)^4.26<br />
                                        <strong>ρ = 1.0267 kg/m³</strong>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white border border-indigo-300 rounded-lg p-4 mt-4">
                                <h4 className="font-bold text-indigo-800 mb-2">Step 3: Calculate Drag</h4>
                                <p className="text-indigo-700">
                                    D = ½ρsv²C<sub>D</sub><br />
                                    D = ½(1.0267)(144)(100)²(0.14)<br />
                                    <strong className="text-lg">D = 103,491.36 N</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="applications-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">NACA System Advantages</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-blue-800 mb-3">🎯 Standardization</h4>
                                <p className="text-blue-700 mb-3">
                                    Provides a systematic approach to airfoil design with predictable characteristics 
                                    and standardized nomenclature for easy identification.
                                </p>
                                <ul className="text-blue-700 text-sm space-y-1">
                                    <li>• Universal designation system</li>
                                    <li>• Predictable performance characteristics</li>
                                    <li>• Extensive wind tunnel data available</li>
                                    <li>• Industry-wide acceptance</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-red-800 mb-3">📊 Engineering Benefits</h4>
                                <p className="text-red-700 mb-3">
                                    Enables precise geometric definition and performance prediction through 
                                    mathematical relationships and experimental data.
                                </p>
                                <ul className="text-red-700 text-sm space-y-1">
                                    <li>• Mathematical precision in design</li>
                                    <li>• Validated performance data</li>
                                    <li>• Design optimization capabilities</li>
                                    <li>• Historical performance database</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mt-6">
                            <strong className="text-indigo-800">Historical Impact:</strong>
                            <span className="text-indigo-700"> The NACA airfoil series revolutionized aircraft design by providing standardized, reliable airfoil shapes with well-documented performance characteristics. This systematic approach laid the foundation for modern aerodynamic design and continues to influence aircraft development today.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NACAairfoilContent;