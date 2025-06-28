import React from 'react'

function Prelimt4() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Basic Air Properties</h2>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    MODULE 1 • TOPIC 2
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What is Pressure?</h3>
                <p className="text-gray-700 leading-relaxed">
                    Pressure is kind of like force, but not quite. If you tried to hammer a bowling pin into the wall, nothing would probably happen except for people deciding to no longer lend you their bowling pins. However, if you hammer with the same force on a nail, the nail would be much more likely to penetrate the wall. This shows that sometimes just knowing the magnitude of the force isn't enough: you also have to know how that force is distributed on the surface of impact.
                </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Density</h3>
                <p className="text-gray-700 leading-relaxed">
                    Density is the mass of a unit volume of a material substance. The formula for density is <span className="font-mono">ρ = M/V</span>, where ρ is density, M is mass, and V is volume. Density is commonly expressed in units of grams per cubic centimeter or kilograms per cubic meter.
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-700 mb-2">Examples:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Water: 1 g/cm³</li>
                        <li>Earth: 5.51 g/cm³</li>
                        <li>Air: 1.2 kg/m³</li>
                    </ul>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Temperature</h3>
                <p className="text-gray-700 leading-relaxed">
                    Temperature is a measure of hotness or coldness expressed in terms of any of several arbitrary scales and indicating the direction in which heat energy will spontaneously flow—from a hotter body (one at a higher temperature) to a colder body (one at a lower temperature).
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                    Temperature is not the equivalent of the energy of a thermodynamic system. For example, a burning match is at a much higher temperature than an iceberg, but the total heat energy contained in an iceberg is much greater than the energy contained in a match.
                </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Velocity</h3>
                <p className="text-gray-700 leading-relaxed">
                    Velocity is defined as a vector measurement of the rate and direction of motion. Put simply, velocity is the speed at which something moves in one direction. The scalar (absolute value) magnitude of the velocity vector is the speed of motion.
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-700 mb-2">Velocity Formula:</h4>
                    <p className="font-mono text-gray-800">v = d / t</p>
                    <p className="text-gray-700 mt-2">Where:<br />
                        v = velocity<br />
                        d = displacement<br />
                        t = time</p>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Speed vs Velocity vs Acceleration</h3>
                <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-bold text-blue-800">Speed</h4>
                        <p className="text-gray-700">Scalar quantity that indicates the rate of motion distance per time. Units are length and time.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-bold text-green-800">Velocity</h4>
                        <p className="text-gray-700">Vector quantity that indicates displacement, time, and direction.</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-bold text-purple-800">Acceleration</h4>
                        <p className="text-gray-700">Vector quantity that indicates the rate of change of velocity.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Summary of Basic Air Properties</h3>
                <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                    <li>
                        <span className="font-semibold">Pressure (P):</span> Force applied perpendicular to the surface per unit area. SI unit is pascal (Pa) = 1 N/m².
                    </li>
                    <li>
                        <span className="font-semibold">Atmospheric Pressure:</span> Often measured in atm (1 atm = 101,325 Pa) or torr (1 torr = 1/760 atm).
                    </li>
                    <li>
                        <span className="font-semibold">Density (ρ):</span> Mass per unit volume (ρ = m/V). Common units: kg/m³ or g/cm³.
                    </li>
                    <li>
                        <span className="font-semibold">Temperature:</span> Measure of thermal energy. Common scales: Celsius (°C), Fahrenheit (°F), Kelvin (K).
                    </li>
                    <li>
                        <span className="font-semibold">Thermometry:</span> Temperature is measured with thermometers calibrated to standard scales.
                    </li>
                    <li>
                        <span className="font-semibold">Velocity:</span> Rate of change of position (vector quantity with magnitude and direction).
                    </li>
                    <li>
                        <span className="font-semibold">Speed:</span> Scalar magnitude of velocity (m/s in SI units).
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Prelimt4