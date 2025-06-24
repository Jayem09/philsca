import React, { useState } from 'react';
import { Menu, X, Search, Bell, Settings, User, BookOpen, Home, Target, Award, Calculator, Thermometer, ChevronDown, Zap, FileText } from 'lucide-react';

const PDFContent = ({ currentView }) => {
  const getContent = () => {
    switch (currentView) {
      case 'pdf-intro':
        return {
          title: 'Earth\'s Atmosphere: Composition, Climate & Weather',
          content: (
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
        };

      case 'pdf-advanced':
        return {
          title: 'Equation of State & Aerodynamic Force',
          content: (
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
        };

      case 'pdf-fundamentals':
        return {
          title: 'Learning Fundamentals',
          content: (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Core Learning Principles</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Understanding the fundamental principles of how people learn is essential for creating effective educational experiences.
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Learning Theories</h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-blue-800">Behaviorism</h4>
                    <p className="text-gray-700">Learning through conditioning and reinforcement</p>
                    <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                      <li>• Classical conditioning (Pavlov)</li>
                      <li>• Operant conditioning (Skinner)</li>
                      <li>• Applications in modern education</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-green-800">Cognitivism</h4>
                    <p className="text-gray-700">Learning as information processing</p>
                    <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                      <li>• Memory systems and processes</li>
                      <li>• Schema theory</li>
                      <li>• Cognitive development stages</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-purple-800">Constructivism</h4>
                    <p className="text-gray-700">Learning through active construction of knowledge</p>
                    <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                      <li>• Social constructivism (Vygotsky)</li>
                      <li>• Individual constructivism (Piaget)</li>
                      <li>• Implications for instructional design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        };

      default:
        return {
          title: 'Learning Content',
          content: (
            <div className="text-center py-16">
              <BookOpen size={64} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">Select a module from the sidebar to view its content.</p>
            </div>
          )
        };
    }
  };

  const { title, content } = getContent();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
        {title}
      </h1>
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {content}
      </div>
    </div>
  );
};

const LearningHub = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [expandedMenus, setExpandedMenus] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Weight converter state
  const [weightInput, setWeightInput] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');

  // Temperature converter state
  const [tempInput, setTempInput] = useState('');
  const [tempUnit, setTempUnit] = useState('celsius');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const toggleSubmenu = (menuId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const showView = (view) => {
    setCurrentView(view);
    closeSidebar();
  };

  const convertWeight = () => {
    const weight = parseFloat(weightInput);
    if (isNaN(weight) || weight <= 0) return null;

    // Convert to kg first
    let weightInKg;
    switch (weightUnit) {
      case 'kg': weightInKg = weight; break;
      case 'lb': weightInKg = weight * 0.453592; break;
      case 'g': weightInKg = weight / 1000; break;
      case 'oz': weightInKg = weight * 0.0283495; break;
      case 'st': weightInKg = weight * 6.35029; break;
      default: weightInKg = weight;
    }

    return {
      kg: weightInKg,
      lb: weightInKg / 0.453592,
      g: weightInKg * 1000,
      oz: weightInKg / 0.0283495,
      st: weightInKg / 6.35029
    };
  };

  const convertTemperature = () => {
    const temp = parseFloat(tempInput);
    if (isNaN(temp)) return null;

    let celsius;
    switch (tempUnit) {
      case 'celsius': celsius = temp; break;
      case 'fahrenheit': celsius = (temp - 32) * 5 / 9; break;
      case 'kelvin': celsius = temp - 273.15; break;
    }

    return {
      celsius: celsius,
      fahrenheit: celsius * 9 / 5 + 32,
      kelvin: celsius + 273.15
    };
  };

  const weightResults = convertWeight();
  const tempResults = convertTemperature();

  const unitNames = {
    kg: 'Kilograms',
    lb: 'Pounds',
    g: 'Grams',
    oz: 'Ounces',
    st: 'Stones'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-white/20 z-50 h-16">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                <BookOpen size={20} />
              </div>
              <span className="font-bold text-lg text-gray-800">AerodynaMND</span>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search modules and topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
              <Bell size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
              <Settings size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
              <User size={20} />
            </button>
          </div> */}
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <BookOpen size={20} />
            </div>
            <span className="font-bold text-xl">AerodynaMND</span>
          </div>
          <button onClick={closeSidebar} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 space-y-2">
          <div className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${currentView === 'home' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-700'}`} onClick={() => showView('home')}>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <Home size={16} className="text-gray-600" />
            </div>
            <span className="font-medium">Home</span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer text-gray-700" onClick={() => toggleSubmenu('module1')}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <BookOpen size={16} className="text-gray-600" />
                </div>
                <span className="font-medium">Module 1</span>
              </div>
              <ChevronDown size={16} className={`transform transition-transform ${expandedMenus.module1 ? 'rotate-180' : ''}`} />
            </div>
            {expandedMenus.module1 && (
              <div className="ml-4 space-y-1">
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800 text-blue-600" onClick={() => showView('pdf-intro')}>Earth's Atmosphere: Composition, Climate & Weather</div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-advanced')}>Equation of State</div>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer text-gray-700" onClick={() => toggleSubmenu('module2')}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Target size={16} className="text-gray-600" />
                </div>
                <span className="font-medium">Module 2 - Learning</span>
              </div>
              <ChevronDown size={16} className={`transform transition-transform ${expandedMenus.module2 ? 'rotate-180' : ''}`} />
            </div>
            {expandedMenus.module2 && (
              <div className="ml-4 space-y-1">
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-fundamentals')}>Fundamentals</div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-applications')}>Applications</div>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer text-gray-700" onClick={() => toggleSubmenu('module3')}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Award size={16} className="text-gray-600" />
                </div>
                <span className="font-medium">Module 3 - Advanced</span>
              </div>
              <ChevronDown size={16} className={`transform transition-transform ${expandedMenus.module3 ? 'rotate-180' : ''}`} />
            </div>
            {expandedMenus.module3 && (
              <div className="ml-4 space-y-1">
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-theory')}>Theory</div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-practice')}>Practice</div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-cases')}>Case Studies</div>
              </div>
            )}
          </div>

          <div className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${currentView === 'weight' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-700'}`} onClick={() => showView('weight')}>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <Calculator size={16} className="text-gray-600" />
            </div>
            <span className="font-medium">Weight Converter</span>
          </div>

          <div className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${currentView === 'temperature' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-700'}`} onClick={() => showView('temperature')}>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <Thermometer size={16} className="text-gray-600" />
            </div>
            <span className="font-medium">Temperature Converter</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={closeSidebar} />
      )}


      {/* Main Content */}
      <main className="pt-16 min-h-screen">
        <div className="p-6">
          {currentView === 'home' && (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Welcome to AerodynaMND</h1>
                <p className="text-xl text-white/80">Explore interactive modules and powerful learning tools</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer" onClick={() => showView('pdf-intro')}>
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Earth's Atmosphere</h3>
                  <p className="text-gray-600">Learn about atmospheric layers, composition, and climate systems</p>
                </div>

                <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer" onClick={() => showView('weight')}>
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                    <Calculator size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Weight Converter</h3>
                  <p className="text-gray-600">Convert between different weight units instantly</p>
                </div>

                <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer" onClick={() => showView('temperature')}>
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                    <Thermometer size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Temperature Converter</h3>
                  <p className="text-gray-600">Convert between Celsius, Fahrenheit, and Kelvin</p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Completed: Earth's Atmosphere Module</p>
                      <p className="text-sm text-gray-600">1 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Calculator size={16} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Used Weight Converter</p>
                      <p className="text-sm text-gray-600">5 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(currentView.startsWith('pdf-') || currentView === 'pdf-applications' || currentView === 'pdf-theory' || currentView === 'pdf-practice' || currentView === 'pdf-cases') && (
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8">
              <PDFContent currentView={currentView} />
            </div>
          )}

          {currentView === 'weight' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <Calculator size={24} className="text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-800">Weight Converter</h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Enter Weight</label>
                      <input
                        type="number"
                        placeholder="Enter weight value"
                        value={weightInput}
                        onChange={(e) => setWeightInput(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">From Unit</label>
                      <select
                        value={weightUnit}
                        onChange={(e) => setWeightUnit(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="kg">Kilograms (kg)</option>
                        <option value="lb">Pounds (lb)</option>
                        <option value="g">Grams (g)</option>
                        <option value="oz">Ounces (oz)</option>
                        <option value="st">Stones (st)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Conversion Results</h3>
                    {weightResults ? (
                      <div className="space-y-3">
                        {Object.entries(weightResults).map(([unit, value]) => (
                          <div key={unit} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium text-gray-700">{unitNames[unit]}</span>
                            <span className="text-lg font-bold text-green-600">{value.toFixed(4)} {unit}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">Enter a weight value to see conversions</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'temperature' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <Thermometer size={24} className="text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-800">Temperature Converter</h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Enter Temperature</label>
                      <input
                        type="number"
                        placeholder="Enter temperature value"
                        value={tempInput}
                        onChange={(e) => setTempInput(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">From Unit</label>
                      <select
                        value={tempUnit}
                        onChange={(e) => setTempUnit(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="celsius">Celsius (°C)</option>
                        <option value="fahrenheit">Fahrenheit (°F)</option>
                        <option value="kelvin">Kelvin (K)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Conversion Results</h3>
                    {tempResults ? (
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-700">Celsius</span>
                          <span className="text-lg font-bold text-red-600">{tempResults.celsius.toFixed(2)}°C</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-700">Fahrenheit</span>
                          <span className="text-lg font-bold text-red-600">{tempResults.fahrenheit.toFixed(2)}°F</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-700">Kelvin</span>
                          <span className="text-lg font-bold text-red-600">{tempResults.kelvin.toFixed(2)}K</span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">Enter a temperature value to see conversions</p>
                    )}
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-semibold text-blue-800 mb-2">Temperature Reference Points</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-blue-700">Water Freezing:</strong>
                      <div className="text-blue-600">0°C = 32°F = 273.15K</div>
                    </div>
                    <div>
                      <strong className="text-blue-700">Room Temperature:</strong>
                      <div className="text-blue-600">20°C = 68°F = 293.15K</div>
                    </div>
                    <div>
                      <strong className="text-blue-700">Water Boiling:</strong>
                      <div className="text-blue-600">100°C = 212°F = 373.15K</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LearningHub;