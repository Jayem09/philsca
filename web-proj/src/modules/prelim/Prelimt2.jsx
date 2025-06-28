import React from 'react'

function Prelimt2() {
    return (
        <div className="space-y-8">
            <div className="container">
                <div className="header">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        MODULE 1 • TOPIC 2
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Equation of State & Aerodynamic Force</h1>
                </div>

                <div className="content-body space-y-8">
                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Equation of State</h2>
                        <p className="text-gray-700 mb-4">
                            In physics and thermodynamics, an equation of state is a thermodynamic equation relating state variables which describe the state of matter under a given set of physical conditions, such as pressure, volume, temperature (PVT), or internal energy. Equations of state are useful in describing the properties of fluids, mixtures of fluids, solids, and the interior of stars.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                            <strong className="text-blue-800">Key Facts:</strong>
                            <ul className="mt-2 space-y-2 text-blue-700">
                                <li>• No single equation of state accurately predicts properties of all substances under all conditions</li>
                                <li>• The ideal gas law is an example that works for weakly polar gases at low pressures</li>
                                <li>• Equations become inaccurate at higher pressures and lower temperatures</li>
                                <li>• Used in modeling stars, dense matter (quark-gluon plasmas), and radiation fields</li>
                            </ul>
                        </div>

                        <p className="text-gray-700 mb-4">
                            At present, there is no single equation of state that accurately predicts the properties of all substances under all conditions. An example of an equation of state correlates densities of gases and liquids to temperatures and pressures, known as the ideal gas law, which is roughly accurate for weakly polar gases at low pressures and moderate temperatures. This equation becomes increasingly inaccurate at higher pressures and lower temperatures, and fails to predict condensation from a gas to a liquid.
                        </p>

                        <p className="text-gray-700 mb-6">
                            Another common use is in modeling the interior of stars, including neutron stars, dense matter (quark-gluon plasmas) and radiation fields. A related concept is the perfect fluid equation of state used in cosmology. Equations of state can also describe solids, including the transition of solids from one crystalline state to another.
                        </p>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                            <strong className="text-yellow-800">Practical Applications:</strong>
                            <span className="text-yellow-700"> Equations of state are instrumental for PVT calculations in process engineering problems, such as petroleum gas/liquid equilibrium calculations. A successful PVT model based on a fitted equation of state can be helpful to determine the state of the flow regime, the parameters for handling the reservoir fluids, and pipe sizing.</span>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Aerodynamic Force</h2>
                        <p className="text-gray-700 mb-4">
                            The force exerted on a body whenever there is a relative velocity between the body and the air. There are only two basic sources of aerodynamic force: the pressure distribution and the frictional shear stress distribution exerted by the airflow on the body surface.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-3">Pressure Distribution</h4>
                                <p className="text-gray-700">
                                    The pressure exerted by the air at a point on the surface acts perpendicular to the surface at that point.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-3">Shear Stress</h4>
                                <p className="text-gray-700">
                                    The shear stress, which is due to the frictional action of the air rubbing against the surface, acts tangentially to the surface at that point.
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-700 mb-6">
                            The distribution of pressure and shear stress represent a distributed load over the surface. The net aerodynamic force on the body is due to the net imbalance between these distributed loads as they are summed (integrated) over the entire surface.
                        </p>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
                            <h4 className="text-lg font-bold text-gray-800 mb-3">Components of Aerodynamic Force</h4>
                            <p className="text-gray-700 mb-3">
                                For purposes of discussion, it is convenient to consider the aerodynamic force on an airfoil. The net resultant aerodynamic force R acting through the center of pressure on the airfoil represents mechanically the same effect as that due to the actual pressure and shear stress loads distributed over the body surface.
                            </p>
                            <p className="text-gray-700 mb-3">
                                The velocity of the airflow V∞ is called the freestream velocity or the freestream relative wind. By definition:
                            </p>
                            <ul className="space-y-2 text-gray-700 mb-4">
                                <li>• <strong>Lift (L):</strong> Component of R perpendicular to the relative wind</li>
                                <li>• <strong>Drag (D):</strong> Component of R parallel to the relative wind</li>
                            </ul>
                            <p className="text-gray-700">
                                The orientation of the body with respect to the direction of the free stream is given by the angle of attack, α. The magnitude of the aerodynamic force R is governed by the density ρ∞ and velocity of the free stream, the size of the body, and the angle of attack.
                            </p>
                        </div>

                        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
                            <h4 className="text-lg font-bold text-purple-800 mb-3">Aerodynamic Efficiency</h4>
                            <p className="text-purple-700">
                                An important measure of aerodynamic efficiency is the ratio of lift to drag, L/D. The higher the value of L/D, the more efficient is the lifting action of the body. The value of L/D reaches a maximum, denoted by (L/D)max, at a relatively low angle of attack.
                            </p>
                        </div>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                            <h4 className="text-lg font-bold text-red-800 mb-3">Stall Condition</h4>
                            <p className="text-red-700">
                                Beyond a certain angle the lift decreases with increasing α. In this region, the wing is said to be stalled. In the stall region the flow has separated from the top surface of the wing, creating a type of slowly recirculating dead air region, which decreases the lift and substantially increases the drag.
                            </p>
                        </div>
                    </div>

                    <figure className="mb-10">
                        <img
                            src="./public/assets/idkman.png"
                            alt="Earth's atmosphere from space"
                            className="rounded-lg shadow-md w-full max-w-3xl mx-auto"
                        />
                        <figcaption className="text-xs text-center text-gray-500 mt-2">
                            Ideal Gas Law P = Pressure

                            ρ (rho) = Density

                            R = Specific gas constant

                            T = Temperature (Kelvin or Rankine)
                        </figcaption>
                    </figure>

                    <div className="section">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Summary</h2>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h3 className="text-lg font-bold text-green-800 mb-3">Equation of State</h3>
                            <ol className="space-y-2 text-green-700">
                                <li>1. Relates state variables describing matter under physical conditions (pressure, volume, temperature)</li>
                                <li>2. No single equation works for all substances under all conditions</li>
                                <li>3. Ideal gas law works for weakly polar gases at low pressures and moderate temperatures</li>
                            </ol>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                            <h3 className="text-lg font-bold text-blue-800 mb-3">Aerodynamic Force</h3>
                            <p className="text-blue-700">
                                The force exerted on a body with relative velocity to air, with two sources: pressure distribution and frictional shear stress distribution. The net force is the sum of these distributed loads over the surface.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prelimt2