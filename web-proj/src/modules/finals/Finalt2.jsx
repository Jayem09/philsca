import React from 'react';

const AirfoilNomenclatureContent = () => {
    return (
        <div className="airfoil-nomenclature-content">
            <div className="container max-w-4xl mx-auto p-6">
                <div className="header text-center">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        MIDTERMS • MODULE 2 • TOPIC 2
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Airfoil Nomenclature</h1>
                    <p className="text-xl text-gray-600 mb-6">Essential Terminology and Definitions</p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mb-8">
                        Standardized terminology used to describe airfoil geometry and aerodynamic characteristics.<br />
                        (Fundamental vocabulary for understanding aircraft wing design and performance)
                    </div>
                </div>

                <div className="content-body space-y-8">
                    <div className="intro-section">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Understanding airfoil nomenclature is essential for aerodynamic analysis and aircraft design. These standardized terms provide a common language for engineers to describe wing geometry, angles, forces, and performance characteristics with precision and clarity.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                            <strong className="text-blue-800">Why This Matters:</strong>
                            <ul className="mt-2 space-y-1 text-blue-700">
                                <li>• Enables precise communication between engineers</li>
                                <li>• Standardizes measurement and analysis methods</li>
                                <li>• Forms foundation for aerodynamic calculations</li>
                                <li>• Critical for aircraft design and certification</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Airfoil Geometry</h2>
                        <p className="text-gray-700 mb-6">
                            The fundamental geometric elements that define an airfoil's shape and characteristics:
                        </p>

                        <div className="grid gap-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Primary Reference Lines</h3>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white border border-green-200 rounded-lg p-4">
                                        <h4 className="font-bold text-green-800 mb-2">Chord Line</h4>
                                        <p className="text-green-700 text-sm">
                                            A straight line connecting the leading and trailing edges of an airfoil. Serves as the primary reference for angle measurements.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-green-200 rounded-lg p-4">
                                        <h4 className="font-bold text-green-800 mb-2">Mean Camber Line</h4>
                                        <p className="text-green-700 text-sm">
                                            The locus of points halfway between the upper and lower surfaces. Defines the airfoil's curvature characteristics.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-800 mb-4">Key Dimensions</h3>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white border border-purple-200 rounded-lg p-4">
                                        <h4 className="font-bold text-purple-800 mb-2">Chord</h4>
                                        <p className="text-purple-700 text-sm">
                                            The distance between the leading and trailing edges measured along the chord line. Primary length reference.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-purple-200 rounded-lg p-4">
                                        <h4 className="font-bold text-purple-800 mb-2">Thickness</h4>
                                        <p className="text-purple-700 text-sm">
                                            The maximum distance between the upper and lower surfaces measured perpendicular to the chord line.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-orange-800 mb-4">Edge Definitions</h3>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white border border-orange-200 rounded-lg p-4">
                                        <h4 className="font-bold text-orange-800 mb-2">Leading Edge</h4>
                                        <p className="text-orange-700 text-sm">
                                            The most forward point of the mean camber line. Where airflow first encounters the airfoil.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-orange-200 rounded-lg p-4">
                                        <h4 className="font-bold text-orange-800 mb-2">Trailing Edge</h4>
                                        <p className="text-orange-700 text-sm">
                                            The most rearward point of the mean camber line. Where upper and lower flows rejoin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Wing Characteristics</h2>
                        <p className="text-gray-700 mb-6">
                            Three-dimensional parameters that describe complete wing geometry and performance:
                        </p>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Dimensional Parameters</h3>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-blue-800 mb-2">Wingspan (b)</div>
                                    <div className="text-blue-700 text-sm">
                                        Distance from<br />
                                        wing tip to wing tip
                                    </div>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-green-800 mb-2">Wing Area (S)</div>
                                    <div className="text-green-700 text-sm">
                                        Planform area including<br />
                                        ailerons and flaps
                                    </div>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-red-800 mb-2">Aspect Ratio (AR)</div>
                                    <div className="text-red-700 text-sm">
                                        AR = b²/S<br />
                                        (wingspan ratio)
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                            <strong className="text-indigo-800">Aspect Ratio Formula:</strong>
                            <div className="mt-2 text-indigo-700">
                                For rectangular wings: <strong>AR = b/c</strong> (span/chord)
                                <br />
                                For non-rectangular wings: <strong>AR = b²/S</strong> (span²/area)
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Angles</h2>
                        <p className="text-gray-700 mb-6">
                            Angular measurements critical for aerodynamic analysis and flight characteristics:
                        </p>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-yellow-800 mb-4">Angle of Attack (α)</h3>
                            <div className="bg-yellow-100 px-3 py-1 rounded-full text-yellow-800 font-bold inline-block mb-3">
                                PRIMARY CONTROL PARAMETER
                            </div>
                            <p className="text-yellow-700 mb-4">
                                The angle between the relative wind and the chord line. This is the primary parameter pilots control to manage lift and drag during flight.
                            </p>

                            <div className="bg-white border border-yellow-200 rounded-lg p-4">
                                <div className="text-yellow-800 font-bold mb-2">Additional Important Angles:</div>
                                <div className="text-yellow-700 text-sm">
                                    <div>• <strong>Angle of Incidence:</strong> Fixed angle between wing chord and fuselage reference</div>
                                    <div>• <strong>Dihedral Angle:</strong> Upward angle of wings from horizontal (stability)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Aerodynamic Forces</h2>
                        <p className="text-gray-700 mb-6">
                            Forces generated by airflow over the wing surface, resolved into components relative to flight direction:
                        </p>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Force Resolution System</h3>
                            <div className="text-center mb-4">
                                <div className="text-xl font-bold text-gray-800 mb-2">Resultant Aerodynamic Force (R)</div>
                                <div className="text-gray-600">↓ Resolved into components ↓</div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <h4 className="font-bold text-blue-800 mb-2">Lift (L)</h4>
                                    <div className="text-blue-700 text-sm mb-2">
                                        Component perpendicular to relative wind
                                    </div>
                                    <div className="bg-blue-100 px-2 py-1 rounded text-xs text-blue-800">
                                        ⬆️ Opposes weight
                                    </div>
                                </div>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <h4 className="font-bold text-red-800 mb-2">Drag (D)</h4>
                                    <div className="text-red-700 text-sm mb-2">
                                        Component parallel to relative wind
                                    </div>
                                    <div className="bg-red-100 px-2 py-1 rounded text-xs text-red-800">
                                        ← Opposes thrust
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-cyan-800 mb-3">Force Generation</h4>
                            <p className="text-cyan-700 mb-3">
                                The resultant aerodynamic force (R) is created by pressure and shear stress distributions over the wing surface. These complex pressure patterns are simplified into two perpendicular components for analysis.
                            </p>
                            <div className="bg-white border border-cyan-200 rounded-lg p-3">
                                <div className="font-bold text-cyan-800 mb-1">Relative Wind</div>
                                <div className="text-cyan-700 text-sm">
                                    The air far upstream of the airfoil, representing the undisturbed airflow approaching the wing.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="applications-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Practical Applications</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-emerald-800 mb-3">✈️ Aircraft Design</h4>
                                <p className="text-emerald-700">
                                    Engineers use these terms to specify wing geometry, calculate performance characteristics, and communicate design requirements across teams.
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-blue-800 mb-3">📊 Performance Analysis</h4>
                                <p className="text-blue-700">
                                    Standardized nomenclature enables consistent measurement and comparison of aerodynamic data across different aircraft configurations.
                                </p>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-purple-800 mb-3">🛠️ Manufacturing</h4>
                                <p className="text-purple-700">
                                    Precise terminology ensures manufacturing specifications match design intent, maintaining quality and performance standards.
                                </p>
                            </div>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-orange-800 mb-3">📚 Education & Training</h4>
                                <p className="text-orange-700">
                                    Common vocabulary foundation enables effective teaching and learning of aerodynamic principles and aircraft systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="summary-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Terminology Summary</h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="space-y-3">
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <div className="font-bold text-green-800">Geometry</div>
                                    <div className="text-green-700 text-sm mt-1">
                                        • Chord line & mean camber line<br />
                                        • Leading & trailing edges<br />
                                        • Chord length & thickness
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <div className="font-bold text-blue-800">Wing Parameters</div>
                                    <div className="text-blue-700 text-sm mt-1">
                                        • Wingspan (b)<br />
                                        • Wing area (S)<br />
                                        • Aspect ratio (AR = b²/S)
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <div className="font-bold text-red-800">Forces & Angles</div>
                                    <div className="text-red-700 text-sm mt-1">
                                        • Angle of attack (α)<br />
                                        • Lift (L) & Drag (D)<br />
                                        • Relative wind
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mt-6">
                            <strong className="text-indigo-800">Foundation Knowledge:</strong>
                            <span className="text-indigo-700"> Mastering airfoil nomenclature provides the essential vocabulary needed to understand aerodynamic principles, analyze aircraft performance, and communicate effectively in aerospace engineering.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AirfoilNomenclatureContent;