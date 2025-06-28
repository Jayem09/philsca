import React from 'react';

function Footer() {
    return (
        <footer className="bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white py-16 mt-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-5">
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                AerodynaMND
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                                Experience the science of flight with our interactive atmospheric property calculator.
                                Explore how temperature, pressure, and density change with altitude.
                            </p>
                        </div>

                        {/* Social Links */}
                        {/* <div className="flex space-x-4">
                            <a href="#" className="group p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300">
                                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="group p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300">
                                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="#" className="group p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300">
                                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div> */}
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Calculator Features */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white">Calculator</h4>
                            <div className="flex flex-wrap gap-2">
                                <a className="text-slate-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center group">
                                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                                    Temperature
                                </a>
                                <a className="text-slate-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center group">
                                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                                    Air Pressure
                                </a>
                                <a className="text-slate-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center group">
                                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                                    Air Density
                                </a>
                                <a className="text-slate-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center group">
                                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                                    Speed of Sound
                                </a>
                            </div>
                        </div>

                        {/* Flight Simulator */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white">Flight Simulator</h4>
                            <div className="flex flex-wrap gap-2">
                                <a className="text-slate-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center group">
                                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                                    Interactive Flight
                                </a>
                                <a className="text-slate-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center group">
                                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                                    Building Heights
                                </a>
                                <a className="text-slate-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center group">
                                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                                    Wind Patterns
                                </a>
                                <a className="text-slate-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center group">
                                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                                    Visualization
                                </a>
                            </div>
                        </div>

                        {/* Resources */}
                        {/* <div>
                            <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
                            <div className="flex flex-wrap gap-2">
                                <a href="#documentation" className="text-slate-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center group">
                                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                                    Documentation
                                </a>
                                <a href="#formulas" className="text-slate-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center group">
                                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                                    ISA Formulas
                                </a>
                                <a href="#api" className="text-slate-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center group">
                                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                                    API Reference
                                </a>
                                <a href="#support" className="text-slate-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center group">
                                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                                    Support
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Aviation Fun Fact Banner */}
                {/* <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-2xl">
                    <div className="flex items-center justify-center space-x-3">
                        <span className="text-2xl">✈️</span>
                        <p className="text-blue-200 text-center">
                            <span className="font-semibold text-blue-300">Aviation Fact:</span> At cruising altitude (35,000 ft), the outside temperature is typically -40°C to -70°C, and air pressure is only 23% of sea level!
                        </p>
                        <span className="text-2xl">🌡️</span>
                    </div>
                </div> */}

                {/* Bottom Section */}
                <div className="border-t border-slate-700/50 pt-8 flex flex-col justify-center items-center text-center">
                    <div className="text-slate-400 text-sm">
                        © 2025 AerodynaMND - Your Aviation Simulator. Built with passion for aviation science and atmospheric physics.
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;