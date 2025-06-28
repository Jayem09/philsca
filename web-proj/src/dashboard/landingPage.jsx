import React, { useState } from 'react';
import { Menu, X, Search, Bell, Settings, User, BookOpen, Home, Target, Award, Calculator, Thermometer, ChevronDown, Zap, FileText } from 'lucide-react';
import Finalt5 from '../modules/finals/Finalt5';
import Finalt4 from '../modules/finals/Finalt4';
import Finalt3 from '../modules/finals/Finalt3';
import Finalt2 from '../modules/finals/Finalt2';
import Finalt1 from '../modules/finals/Finalt1';
import MidtermMt2 from '../modules/midterm/MidtermMt2';
import MidtermMt1 from '../modules/midterm/MidtermMt1';
import Midtermt4 from '../modules/midterm/Midtermt4';
import Midtermt3 from '../modules/midterm/Midtermt3';
import Midtermt2 from '../modules/midterm/Midtermt2';
import Midtermt1 from '../modules/midterm/Midtermt1';
import Prelimt1 from '../modules/prelim/Prelimt1';
import Prelimt2 from '../modules/prelim/Prelimt2';
import Prelimt3 from '../modules/prelim/Prelimt3';
import Prelimt4 from '../modules/prelim/Prelimt4';
import Prelimt5 from '../modules/prelim/Prelimt5';

const PDFContent = ({ currentView }) => {
  const getContent = () => {
    switch (currentView) {
      case 'pdf-intro':
        return {
          title: 'Earth\'s Atmosphere: Composition, Climate & Weather',
          content: <Prelimt1 />
        };

      case 'pdf-idk':
        return {
          title: '',
          content: <Midtermt1 />
        }

      case 'pdf-advanced':
        return {
          title: '',
          content: <Prelimt2 />
        };

      case 'pdf-fundamentals':
        return {
          title: '',
          content: <Prelimt3 />
        };

      case 'pdf-applications':
        return {
          title: '',
          content: <Prelimt4 />
        };

      case 'pdf-midtermt2':
        return {
          title: '',
          content: <Midtermt2 />
        }


      case 'pdf-theory':
        return {
          title: '',
          content: <Prelimtt5 />
        };

      case 'pdf-midtermt3':
        return {
          title: '',
          content: <Midtermt3 />
        };

      case 'pdf-midtermt4':
        return {
          title: '',
          content: <Midtermt4 />
        }


      case 'pdf-midtermMt1':
        return {
          title: '',
          content: <MidtermMt1 />
        }

      case 'pdf-midtermMt2':
        return {
          title: '',
          content: <MidtermMt2 />
        }

      case 'pdf-final':
        return {
          title: '',
          content: <Finalt1 />
        }

      case 'pdf-final2':
        return {
          title: '',
          content: <Finalt2 />
        }
      case 'pdf-final3':
        return {
          title: '',
          content: <Finalt3 />
        }

      case 'pdf-final4':
        return {
          title: '',
          content: <Finalt4 />
        }

      case 'pdf-final5':
        return {
          title: '',
          content: <Finalt5 />
        }


      default:
        return {
          title: '',
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

  const topics = [
    {
      id: 'pdf-intro',
      title: "Earth's Atmosphere: Composition, Climate & Weather",
      module: "Module 1",
      keywords: ["earth", "atmosphere", "climate", "weather", "composition"]
    },
    {
      id: 'pdf-advanced',
      title: "Equation of State & Aerodynamic Force",
      module: "Module 1",
      keywords: ["equation", "state", "aerodynamic", "force"]
    },
    {
      id: 'pdf-fundamentals',
      title: "The Myth of Daedalus and Icarus",
      module: "Module 2",
      keywords: ["myth", "daedalus", "icarus", "aviation"]
    },
    {
      id: 'pdf-applications',
      title: "Basic Air Properties",
      module: "Module 2",
      keywords: ["air", "properties", "pressure", "density", "temperature"]
    },
    {
      id: 'pdf-theory',
      title: "Properties of Air",
      module: "Module 3",
      keywords: ["air", "properties", "theory", "science"]
    },
    {
      id: 'weight',
      title: "Weight Converter",
      module: "Tools",
      keywords: ["weight", "converter", "kg", "pounds", "calculator"]
    },
    {
      id: 'temperature',
      title: "Temperature Converter",
      module: "Tools",
      keywords: ["temperature", "converter", "celsius", "fahrenheit"]
    }
  ];

  // Filter topics based on search term
  const filteredTopics = searchTerm
    ? topics.filter(topic =>
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.keywords.some(keyword =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    : [];

  const autoScroll = (scroll) => {
    setCurrentView(scroll);
    closeSidebar();
    // Add scroll to top functionality
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: adds smooth scrolling animation
    });
  };

  const toggleSubmenu = (menuId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const showView = (view) => {
    setCurrentView(view);
    closeSidebar();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: adds smooth scrolling animation
    });
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

          <div className="relative">
            {/* Search Bar */}
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search modules and topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {/* Search results dropdown */}
            {searchTerm && filteredTopics.length > 0 && (
              <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredTopics.map(topic => (
                  <div
                    key={topic.id}
                    className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
                    onClick={() => {
                      showView(topic.id);
                      setSearchTerm('');
                    }}
                  >
                    <div className="font-medium text-gray-800">{topic.title}</div>
                    <div className="text-xs text-gray-500">{topic.module}</div>
                  </div>
                ))}
              </div>
            )}
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
                <span className="font-medium">Module 2</span>
              </div>
              <ChevronDown size={16} className={`transform transition-transform ${expandedMenus.module2 ? 'rotate-180' : ''}`} />
            </div>
            {expandedMenus.module2 && (
              <div className="ml-4 space-y-1">
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-fundamentals')}>The Myth of Daedalus and Icarus</div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-applications')}>Basic Air Properties
                </div>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer text-gray-700" onClick={() => toggleSubmenu('module3')}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Award size={16} className="text-gray-600" />
                </div>
                <span className="font-medium">Module 3</span>
              </div>
              <ChevronDown size={16} className={`transform transition-transform ${expandedMenus.module3 ? 'rotate-180' : ''}`} />
            </div>
            {expandedMenus.module3 && (
              <div className="ml-4 space-y-1">
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-theory')}>Properties of Air
                </div>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer text-gray-700" onClick={() => toggleSubmenu('module4')}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Award size={16} className="text-gray-600" />
                </div>
                <span className="font-medium">Module 4</span>
              </div>
              <ChevronDown size={16} className={`transform transition-transform ${expandedMenus.module4 ? 'rotate-180' : ''}`} />
            </div>
            {expandedMenus.module4 && (
              <div className="ml-4 space-y-1">
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-idk')}>Mass Conservation in Fluid Dynamics
                </div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-midtermt2')}>Speed of Sound
                </div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-midtermt3')}>The Ratio of Aircraft Speed to Sound Speed
                </div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-midtermt4')}>Bernoulli's Equation
                </div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-midtermMt1')}>Wind Tunnel
                </div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-midtermMt2')}>Static Pressure & Airspeed

                </div>
              </div>
            )}
          </div>



          <div className="space-y-1">
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer text-gray-700" onClick={() => toggleSubmenu('module5')}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Award size={16} className="text-gray-600" />
                </div>
                <span className="font-medium">Module 5</span>
              </div>
              <ChevronDown size={16} className={`transform transition-transform ${expandedMenus.module4 ? 'rotate-180' : ''}`} />
            </div>
            {expandedMenus.module5 && (
              <div className="ml-4 space-y-1">
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-final')}>Airfoils
                </div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-final2')}>Airfoil Nomenclature
                </div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-final3')}>NACA Airfoil
                </div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-final4')}>Viscous Flow
                </div>
                <div className="p-2 text-sm hover:bg-gray-50 rounded-lg cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => showView('pdf-final5')}>Flow Types & Reynolds Number


                </div>
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