import React from 'react';

const StaticPressureContent = () => {
    return (
        <div className="static-pressure-content">
            <div className="container max-w-4xl mx-auto p-6">
                <div className="header text-center">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        MIDTERMS • MODULE 3 • TOPIC 1
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Static Pressure & Airspeed</h1>
                    <p className="text-xl text-gray-600 mb-6">Fluid Dynamics and Pressure Measurement Systems</p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mb-8">
                        Fundamental concepts in aerodynamics for measuring and understanding airflow.<br />
                        (Essential for aircraft instrumentation, flight safety, and performance analysis)
                    </div>
                </div>

                <div className="content-body space-y-8">
                    <div className="intro-section">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                            <h2 className="text-2xl font-bold text-blue-800 mb-4">Static Pressure</h2>
                            <p className="text-blue-700 leading-relaxed mb-4">
                                Static pressure is a fundamental concept in fluid dynamics that refers to the pressure exerted by a gas due to the random motion of its molecules. It is the force per unit area that results from molecular collisions within the gas, independent of any bulk motion.
                            </p>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <strong className="text-blue-800">Key Characteristics:</strong>
                                <ul className="mt-2 space-y-1 text-blue-700">
                                    <li>• Independent of flow velocity - determined by molecular motion only</li>
                                    <li>• Influenced by temperature (faster molecules = higher pressure)</li>
                                    <li>• Affected by density (more molecules = more collisions)</li>
                                    <li>• Measured perpendicular to flow direction</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Pressure Measurement Systems</h2>

                        <div className="grid gap-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Total/Stagnation Pressure</h3>
                                <p className="text-green-700 mb-4">
                                    Total pressure at a given point in a flow is the pressure that would exist if the flow were slowed down isentropically to zero velocity. At a stagnation point, the fluid velocity is zero and all kinetic energy has been converted into pressure energy.
                                </p>
                                <div className="bg-white border border-green-200 rounded-lg p-4">
                                    <div className="text-center text-lg font-bold text-green-800">
                                        P<sub>total</sub> = P<sub>static</sub> + P<sub>dynamic</sub>
                                    </div>
                                    <div className="text-center text-green-700 text-sm mt-2">
                                        Stagnation pressure equals sum of free-stream dynamic and static pressures
                                    </div>
                                </div>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-800 mb-4">Pitot Tube</h3>
                                <div className="mb-4">
                                    <p className="text-purple-700 mb-4">
                                        An aerodynamic instrument invented by French engineer Henri Pitot in the early 18th century. Used to measure total pressure at a point in fluid flow by determining the difference between total pressure and static pressure.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white border border-purple-200 rounded-lg p-4">
                                        <h4 className="font-bold text-purple-800 mb-2">Design</h4>
                                        <p className="text-purple-700 text-sm">
                                            Small hollow tube with opening facing directly into flow. Air enters and stops at stagnation point (V=0), allowing total pressure measurement.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-purple-200 rounded-lg p-4">
                                        <h4 className="font-bold text-purple-800 mb-2">Operation</h4>
                                        <p className="text-purple-700 text-sm">
                                            Based on Bernoulli's principle. Point A is open to flow, Point B is closed. Creates stagnation point where velocity equals zero.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-orange-800 mb-4">Static Port</h3>
                                <p className="text-orange-700 mb-4">
                                    Obtains static pressure through flush-mounted holes on aircraft fuselage, located in relatively undisturbed airflow areas. Multiple ports may be used for accuracy.
                                </p>
                                <div className="bg-white border border-orange-200 rounded-lg p-4">
                                    <strong className="text-orange-800">Configuration:</strong>
                                    <div className="text-orange-700 text-sm mt-2">
                                        • Single port or multiple ports (one on each side of fuselage)
                                        <br />• Average pressure taken for accurate readings in various flight situations
                                        <br />• Located where airflow is minimally disturbed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Pitot-Static System</h2>

                        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-bold text-red-800 mb-4">Pitot-Static Probe</h3>
                            <p className="text-red-700 mb-4">
                                Specialized instrument combining Pitot tube (total pressure) and static port (static pressure) functions. Widely used in aviation, wind tunnel testing, and engineering applications for accurate airflow measurements.
                            </p>
                            <div className="bg-white border border-red-200 rounded-lg p-4">
                                <strong className="text-red-800">Operation Principle:</strong>
                                <div className="text-red-700 text-sm mt-2">
                                    Based on Bernoulli's principle - total pressure = static pressure + dynamic pressure.
                                    Static pressure measured through side ports perpendicular to airflow.
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Complete Pitot-Static System</h3>
                            <p className="text-gray-700 mb-4">
                                System of pressure-sensitive instruments used in aviation to determine aircraft's airspeed, Mach number, altitude, and altitude trend.
                            </p>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-blue-800 mb-2">Components</div>
                                    <div className="text-blue-700 text-sm">
                                        • Pitot tube<br />
                                        • Static port<br />
                                        • Pitot-static instruments
                                    </div>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-yellow-800 mb-2">Measurements</div>
                                    <div className="text-yellow-700 text-sm">
                                        • Airspeed<br />
                                        • Mach number<br />
                                        • Altitude & trend
                                    </div>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-red-800 mb-2">Critical Safety</div>
                                    <div className="text-red-700 text-sm">
                                        Errors extremely dangerous<br />
                                        Commercial disasters<br />
                                        traced to system failure
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of Airspeed</h2>
                        <p className="text-gray-700 mb-6">
                            Airspeed is the speed of an aircraft relative to the air, with several conventions for qualification:
                        </p>

                        <div className="grid gap-4">
                            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                                <h4 className="text-lg font-bold text-indigo-800 mb-2">Indicated Airspeed (IAS)</h4>
                                <p className="text-indigo-700 text-sm">
                                    Airspeed read directly from airspeed indicator, driven by pitot-static system uncorrected for instrument and position errors.
                                </p>
                            </div>

                            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                                <h4 className="text-lg font-bold text-cyan-800 mb-2">Calibrated Airspeed (CAS)</h4>
                                <p className="text-cyan-700 text-sm">
                                    IAS corrected for instrument and position errors in static pressure measurement. Result of correcting indicated airspeed for measurement errors.
                                </p>
                            </div>

                            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                                <h4 className="text-lg font-bold text-emerald-800 mb-2">True Airspeed (TAS)</h4>
                                <p className="text-emerald-700 text-sm">
                                    Speed of aircraft relative to air mass in which it is flying. Equivalent airspeed corrected for non-standard density (actual air density value).
                                </p>
                                <div className="bg-white border border-emerald-200 rounded-lg p-3 mt-3">
                                    <div className="text-center font-bold text-emerald-800">
                                        V<sub>TRUE</sub> = √(2(P<sub>T</sub> - P) / ρ<sub>actual</sub>)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">V-Speeds (Velocity Speeds)</h2>
                        <p className="text-gray-700 mb-6">
                            Standard terms defining airspeeds important for aircraft operation, derived from flight testing and verified during type-certification.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <div className="font-bold text-red-800 mb-1">V<sub>A</sub> - Design Maneuvering Speed</div>
                                    <div className="text-red-700 text-sm">Maximum speed for abrupt, full elevator deflection without exceeding G-force limits</div>
                                </div>

                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                    <div className="font-bold text-orange-800 mb-1">V<sub>FE</sub> - Maximum Flap Extended Speed</div>
                                    <div className="text-orange-700 text-sm">Maximum speed with flaps extended</div>
                                </div>

                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                    <div className="font-bold text-yellow-800 mb-1">V<sub>LE</sub> - Maximum Landing Gear Extended</div>
                                    <div className="text-yellow-700 text-sm">Maximum flight speed with landing gear extended</div>
                                </div>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <div className="font-bold text-green-800 mb-1">V<sub>LO</sub> - Maximum Gear Operating Speed</div>
                                    <div className="text-green-700 text-sm">Maximum speed while raising or lowering gear</div>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <div className="font-bold text-blue-800 mb-1">V<sub>MC</sub> - Minimum Control Speed</div>
                                    <div className="text-blue-700 text-sm">Minimum control speed with critical engine inoperative</div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                    <div className="font-bold text-purple-800 mb-1">V<sub>NE</sub> - Never Exceed Speed</div>
                                    <div className="text-purple-700 text-sm">Velocity never to be exceeded due to structural failure risk</div>
                                </div>

                                <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                                    <div className="font-bold text-pink-800 mb-1">V<sub>R</sub> - Rotation Speed</div>
                                    <div className="text-pink-700 text-sm">Speed at which pilot initiates rotation for takeoff</div>
                                </div>

                                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                                    <div className="font-bold text-indigo-800 mb-1">V<sub>S</sub> - Stalling Speed</div>
                                    <div className="text-indigo-700 text-sm">Minimum steady flight speed for aircraft control</div>
                                </div>

                                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                                    <div className="font-bold text-teal-800 mb-1">V<sub>X</sub> - Best Angle of Climb</div>
                                    <div className="text-teal-700 text-sm">Best altitude gain per horizontal distance (obstacle clearance)</div>
                                </div>

                                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                                    <div className="font-bold text-cyan-800 mb-1">V<sub>Y</sub> - Best Rate of Climb</div>
                                    <div className="text-cyan-700 text-sm">Best altitude gain per unit of time</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-gray-500 p-4 rounded-r-lg mt-4">
                            <strong className="text-gray-800">Additional V-Speeds:</strong>
                            <div className="text-gray-700 text-sm mt-2">
                                V<sub>S0</sub> - Stalling speed in landing configuration | V<sub>S1</sub> - Stalling speed in clean configuration
                            </div>
                        </div>
                    </div>

                    <div className="sample-problem-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Problem</h2>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                            <h4 className="text-lg font-bold text-blue-800 mb-3">Problem Statement</h4>
                            <p className="text-blue-700 mb-3">
                                An aircraft is flying at an altitude of 6,523 m. Calculate the true and equivalent airspeed if the pitot tube measures 132,465.16 Pa.
                            </p>
                            <div className="mt-3">
                                <strong className="text-blue-800">Given:</strong>
                                <div className="text-blue-700 mt-2">
                                    <div>• h = 6,523 m</div>
                                    <div>• P<sub>t</sub> = 132,465.15 Pa</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h4 className="text-lg font-bold text-gray-800 mb-4">Solution</h4>

                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <strong className="text-gray-800">Step 1:</strong> Solve for temperature at 6,523 m
                                    <div className="mt-2">
                                        <div>T = T₀ + ah</div>
                                        <div>T = 288.2K + (-0.0065 × 6523m)</div>
                                        <div className="font-bold">T = 245.8005 K</div>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-4 rounded-lg">
                                    <strong className="text-green-800">Step 2:</strong> Solve for pressure at 6,523 m
                                    <div className="mt-2">
                                        <div>P = P₀[T/T₀]^5.26</div>
                                        <div>P = 101325[245.8005/288.2]^5.26</div>
                                        <div className="font-bold">P = 43,872.42 Pa</div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <strong className="text-blue-800">Step 3:</strong> Solve for density at 6,523 m
                                    <div className="mt-2">
                                        <div>ρ = ρ₀[T/T₀]^4.26</div>
                                        <div>ρ = 1.225[245.8005/288.2]^4.26</div>
                                        <div className="font-bold">ρ = 0.6219 kg/m³</div>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <strong className="text-purple-800">Step 4:</strong> Solve for True Airspeed
                                    <div className="mt-2">
                                        <div>V<sub>TRUE</sub> = √[2(P<sub>T</sub> - P)/ρ<sub>actual</sub>]</div>
                                        <div>V<sub>TRUE</sub> = √[2(132465.15 - 43872.42)/0.6219]</div>
                                        <div className="font-bold text-lg">V<sub>TRUE</sub> = 533.77 m/s</div>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <strong className="text-orange-800">Step 5:</strong> Solve for Equivalent Airspeed
                                    <div className="mt-2">
                                        <div>V<sub>E</sub> = √[2(P<sub>T</sub> - P)/ρ₀]</div>
                                        <div>V<sub>E</sub> = √[2(132465.15 - 43872.42)/1.225]</div>
                                        <div className="font-bold text-lg">V<sub>E</sub> = 380.32 m/s</div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <strong className="text-yellow-800">Final Results:</strong>
                                    <div className="text-yellow-700 mt-2">
                                        <div>• True Airspeed = 533.77 m/s</div>
                                        <div>• Equivalent Airspeed = 380.32 m/s</div>
                                        <div>• At 6,523 m altitude with given pitot tube reading</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="applications-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Applications & Importance</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-blue-800 mb-3">✈️ Flight Safety</h4>
                                <p className="text-blue-700">
                                    Critical for aircraft navigation, ensuring proper speeds for takeoff, landing, and flight operations. Prevents stalling and structural damage.
                                </p>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-red-800 mb-3">📊 Performance Analysis</h4>
                                <p className="text-red-700">
                                    Essential for determining aircraft performance characteristics, fuel efficiency calculations, and flight planning optimization.
                                </p>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-purple-800 mb-3">🔧 System Design</h4>
                                <p className="text-purple-700">
                                    Foundation for designing aircraft instrumentation, autopilot systems, and flight control computers that rely on accurate airspeed data.
                                </p>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-green-800 mb-3">📚 Training & Education</h4>
                                <p className="text-green-700">
                                    Fundamental concepts for pilot training, aerospace engineering education, and understanding fluid dynamics principles.
                                </p>
                            </div>
                        </div>

                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mt-6">
                            <strong className="text-orange-800">Critical Note:</strong>
                            <span className="text-orange-700"> Accurate pressure measurement and airspeed determination are vital for flight safety. System failures have led to commercial aviation disasters, emphasizing the importance of redundancy and proper maintenance.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaticPressureContent;