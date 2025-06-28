import React from 'react'

function Prelimt3() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">The Myth of Daedalus and Icarus</h2>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    MODULE 1 • TOPIC 1
                </div>
            </div>
            {/* <h1 className="text-4xl font-bold text-gray-800 mb-2">Earth's Atmosphere</h1> */}
            <p className="text-gray-700 leading-relaxed mb-8">
                The myth of Daedalus and Icarus is one of the most known and fascinating Greek Myths, as it consists
                of both historical and mythical details.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">The Story</h3>

                <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-bold text-blue-800">Daedalus in Crete</h4>
                        <p className="text-gray-700">
                            While in Crete Daedalus created the plan for the Minoan Palace of Knossos, one of the most important
                            archaeological sites in Crete and Greece today. It was a magnificent architectural design and building,
                            of 1,300 rooms, decorated with stunning frescoes and artifacts, saved until today.
                        </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-bold text-green-800">The Betrayal</h4>
                        <p className="text-gray-700">
                            King Minos and Daedalus had great understanding at first, but their relationships started deteriorating.
                            The most common explanation is that Daedalus advised Princess Ariadne to give Theseus the thread that
                            helped him escape the Labyrinth after killing the Minotaur.
                        </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-bold text-purple-800">The Escape</h4>
                        <p className="text-gray-700">
                            Imprisoned in the Labyrinth, Daedalus created wings from branches of osier and wax. He taught Icarus
                            how to fly but warned him not to fly too close to the sun. Their flight was the first time man managed
                            to fight the laws of nature and beat gravity.
                        </p>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-bold text-red-800">The Tragedy</h4>
                        <p className="text-gray-700">
                            Icarus, excited by flying, ignored his father's warnings. His wings melted when he flew too close to
                            the sun, and he fell into the sea. The Icarian Sea was named after him.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Aviation Pioneers</h3>

                <div className="space-y-6">
                    <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-bold text-yellow-800">Leonardo da Vinci (1452-1519)</h4>
                        <p className="text-gray-700">
                            Created designs for flying machines including the ornithopter, inspired by birds and bats. His designs
                            were visionary but impractical with available technology.
                        </p>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-bold text-indigo-800">Montgolfier Brothers (1783)</h4>
                        <p className="text-gray-700">
                            Conducted the first untethered hot-air balloon flights, including the first manned flight on November 21, 1783.
                        </p>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                        <h4 className="font-bold text-pink-800">Sir George Cayley (1773-1857)</h4>
                        <p className="text-gray-700">
                            "Father of Aeronautics" who identified the four forces of flight and built the first successful human-carrying glider.
                        </p>
                    </div>

                    <div className="border-l-4 border-teal-500 pl-4">
                        <h4 className="font-bold text-teal-800">Otto Lilienthal (1848-1896)</h4>
                        <p className="text-gray-700">
                            Made over 2,000 glider flights and published important aerodynamic research before dying in a crash.
                        </p>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-bold text-orange-800">Wright Brothers (1903)</h4>
                        <p className="text-gray-700">
                            Achieved the first controlled, sustained, powered heavier-than-air flight on December 17, 1903 at Kitty Hawk.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Summary of Aviation History</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>The myth of Daedalus and Icarus represents humanity's ancient dream of flight</li>
                    <li>Leonardo da Vinci's 15th century designs showed remarkable vision but were impractical</li>
                    <li>The Montgolfier brothers achieved the first manned flight with hot-air balloons in 1783</li>
                    <li>Sir George Cayley established the principles of modern aeronautics in 1799</li>
                    <li>Otto Lilienthal's glider experiments in the 1890s paved the way for powered flight</li>
                    <li>The Wright brothers achieved the first powered, controlled flight in 1903</li>
                </ul>
            </div>
        </div>
    )
}

export default Prelimt3