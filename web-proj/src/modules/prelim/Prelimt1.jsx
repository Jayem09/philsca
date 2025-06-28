import React from 'react'

function Prelimt1() {
    return (
        <div className="atmosphere-content">
            <div className="container">
                <div className="header">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        MODULE 1 • TOPIC 1
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Earth's Atmosphere</h1>
                    <p className="text-xl text-gray-600 mb-6">Composition, Climate & Weather</p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mb-8">
                        Astronauts aboard the International Space Station took this image showing Earth's atmosphere and moon on July 31, 2011.<br />
                        (Image: © ISS Crew Earth Observations Experiment and Image Science & Analysis Laboratory/Johnson Space Center.)
                    </div>
                </div>

                <div className="content-body space-y-8">
                    <div className="intro-section">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Earth is the only planet in the solar system with an atmosphere that can sustain life. The blanket of gases not only contains the air that we breathe but also protects us from the blasts of heat and radiation emanating from the sun. It warms the planet by day and cools it at night.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                            <strong className="text-blue-800">Key Facts:</strong>
                            <ul className="mt-2 space-y-1 text-blue-700">
                                <li>• Atmosphere thickness: ~300 miles (480 km)</li>
                                <li>• Most atmosphere within: 10 miles (16 km) of surface</li>
                                <li>• Sea level air pressure: 14.7 pounds per square inch</li>
                                <li>• At 10,000 feet: 10 pounds per square inch</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Composition of Air</h2>
                        <p className="text-gray-700 mb-4">According to NASA, the gases in Earth's atmosphere include:</p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <div className="font-bold text-green-800">Nitrogen — 78%</div>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="font-bold text-blue-800">Oxygen — 21%</div>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <div className="font-bold text-purple-800">Argon — 0.93%</div>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg">
                                <div className="font-bold text-red-800">Carbon Dioxide — 0.04%</div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg mt-4">
                            <div className="font-bold text-gray-800">Trace Gases</div>
                            <div className="text-gray-600">Neon, helium, methane, krypton, hydrogen, and water vapor</div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Atmospheric Layers</h2>
                        <p className="text-gray-700 mb-6">
                            The atmosphere can be divided into layers based on temperature variations. The red line in atmospheric diagrams shows how temperature varies with height, while pressure decreases dramatically with altitude.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-3">The Troposphere</h4>
                                <p className="text-gray-700 mb-3">
                                    This is the lowest part of the atmosphere - the part we live in. It contains most of our weather - clouds, rain, and snow. Temperature decreases with altitude by about 6.5°C per kilometer.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    The troposphere contains about 75% of all atmospheric air and almost all water vapor. The decrease in temperature with height results from decreasing pressure - as air moves upward, it expands and cools.
                                </p>
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                    <strong className="text-yellow-800">Boundary Layer:</strong>
                                    <span className="text-yellow-700"> The lowest part where air motion is determined by Earth's surface properties. Turbulence redistributes heat, moisture, and pollutants.</span>
                                </div>
                                <p className="text-gray-700">
                                    <strong>Tropopause:</strong> The top boundary, lowest at poles (7-10 km) and highest near the equator (17-18 km).
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-3">The Stratosphere</h4>
                                <p className="text-gray-700 mb-4">
                                    Extends from the tropopause to about 50 km. Contains much of the atmosphere's ozone, which absorbs dangerous UV radiation from the sun, protecting us from skin cancer and other health damage.
                                </p>
                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                    <strong className="text-red-800">Ozone Depletion:</strong>
                                    <span className="text-red-700"> CFCs and halons once used in refrigerators and spray cans reduced stratospheric ozone, creating the "Antarctic ozone hole." Recovery is expected throughout the 21st century as harmful chemical production has stopped.</span>
                                </div>
                                <p className="text-gray-700">
                                    Temperature increases with height due to UV absorption by ozone. Temperatures are highest over the summer pole and lowest over the winter pole.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-3">The Mesosphere</h4>
                                <p className="text-gray-700">
                                    Located above the stratosphere, temperature again decreases with height, reaching a minimum of about -90°C at the "mesopause" - the coldest temperatures in Earth's atmosphere.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-3">The Thermosphere & Ionosphere</h4>
                                <p className="text-gray-700 mb-3">
                                    In the thermosphere, ultraviolet radiation causes photoionization of molecules, creating ions. This constitutes the larger part of the ionosphere.
                                </p>
                                <p className="text-gray-700">
                                    The ionosphere isn't a distinct layer but a series of regions in the mesosphere and thermosphere where high-energy solar radiation has knocked electrons loose from atoms and molecules.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-3">The Exosphere</h4>
                                <p className="text-gray-700">
                                    The uppermost region (above ~500 km) that gradually fades into space. Contains mainly oxygen and hydrogen atoms that rarely collide and follow ballistic trajectories under gravity's influence. Some particles escape into space.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-3">The Magnetosphere</h4>
                                <p className="text-gray-700">
                                    Earth behaves like a huge magnet, trapping electrons and protons in Van Allen radiation belts (3,000 and 16,000 km above Earth). This region where charged particles spiral along magnetic field lines is called the magnetosphere.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="comparison-section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Planetary Comparison: Earth, Venus & Mars</h2>
                        <p className="text-gray-700 mb-6">
                            Scientists compare these three rocky inner solar system planets to better understand Earth's formation and composition.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-green-800 mb-3">🌍 Earth</h4>
                                <p className="text-green-700">
                                    Perfect balance of gases supporting life, with nitrogen and oxygen as primary components. Moderate greenhouse effect maintains suitable temperatures for liquid water.
                                </p>
                            </div>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-orange-800 mb-3">♀ Venus</h4>
                                <p className="text-orange-700">
                                    Almost entirely carbon dioxide with traces of nitrogen and sulfuric acid. Runaway greenhouse effect creates crushing pressure (90x Earth's) and oven-like temperatures (467°C). Thick clouds hide the surface.
                                </p>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h4 className="text-lg font-bold text-red-800 mb-3">♂ Mars</h4>
                                <p className="text-red-700">
                                    Mostly carbon dioxide with traces of nitrogen, argon, and oxygen. Atmosphere is 100x thinner than Earth's. Evidence suggests it once had flowing water over 4.5 billion years ago before atmospheric loss occurred.
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-6">
                            <strong className="text-blue-800">Habitability:</strong>
                            <span className="text-blue-700"> Scientists define habitability as being close enough to a star for liquid water to exist on the surface - not too far (water freezes) or too close (water evaporates). However, habitability also depends on atmospheric composition, stellar variability, and other factors.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prelimt1