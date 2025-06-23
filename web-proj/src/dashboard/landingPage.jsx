import { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaChevronDown, FaChevronUp, FaSearch, FaTimes, FaHome, FaCalculator, FaThermometerHalf, FaQuestionCircle } from "react-icons/fa";

// Mock components for demonstration
const WeightCal = ({ onClose }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto mt-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-gray-800">Weight Converter</h2>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
        <FaTimes size={20} />
      </button>
    </div>
    <div className="space-y-4">
      <input type="number" placeholder="Enter weight" className="w-full p-3 border rounded-lg" />
      <select className="w-full p-3 border rounded-lg">
        <option>Kilograms</option>
        <option>Pounds</option>
        <option>Grams</option>
      </select>
      <div className="text-center p-4 bg-blue-50 rounded-lg">
        <span className="text-lg font-semibold">Result: 0</span>
      </div>
    </div>
  </div>
);

const TemperatureConverter = ({ onClose }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto mt-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-gray-800">Temperature Converter</h2>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
        <FaTimes size={20} />
      </button>
    </div>
    <div className="space-y-4">
      <input type="number" placeholder="Enter temperature" className="w-full p-3 border rounded-lg" />
      <select className="w-full p-3 border rounded-lg">
        <option>Celsius</option>
        <option>Fahrenheit</option>
        <option>Kelvin</option>
      </select>
      <div className="text-center p-4 bg-red-50 rounded-lg">
        <span className="text-lg font-semibold">Result: 0°</span>
      </div>
    </div>
  </div>
);

const Quiz = ({ onClose }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto mt-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-gray-800">Quiz</h2>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
        <FaTimes size={20} />
      </button>
    </div>
    <div className="space-y-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold mb-2">Sample Question 1</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="radio" name="q1" />
            <span>Option A</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="q1" />
            <span>Option B</span>
          </label>
        </div>
      </div>
      <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
        Submit Quiz
      </button>
    </div>
  </div>
);

const PDFViewer = ({ file, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate PDF loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [file]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-96 bg-red-50 rounded-lg">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-2">Error loading PDF</div>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
        <h3 className="text-lg font-semibold text-gray-800">PDF Viewer</h3>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <FaTimes size={20} />
        </button>
      </div>
      <div className="relative h-96">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <iframe
            src={file}
            className="w-full h-full"
            title="PDF Viewer"
          />
        )}
      </div>
    </div>
  );
};

// Menu configuration with icons
const menuConfig = [
  { 
    name: "Home", 
    icon: FaHome,
    type: "home"
  },
  {
    name: "Module 1",
    icon: null,
    hasChildren: true,
    children: [
      { name: "Topic 1", pdf: "/pdf/Module 1 (Topic 1).pdf" },
      { name: "Topic 2", pdf: "/pdf/Module 1 (Topic 2).pdf" },
    ],
  },
  {
    name: "Module 2",
    icon: null,
    hasChildren: true,
    children: [
      { name: "Topic 1", pdf: "/pdf/Module 2 (Topic 1).pdf" },
      { name: "Topic 2", pdf: "/pdf/Module 2 (Topic 2).pdf" },
    ],
  },
  {
    name: "Module 3",
    icon: null,
    hasChildren: true,
    children: [
      { name: "Topic 1", pdf: "/pdf/Module 3 (Topic 1).pdf" },
      { name: "Topic 2", pdf: "/pdf/Module 3 (Topic 2).pdf" },
      { name: "Topic 3", pdf: "/pdf/topic3.pdf" },
    ],
  },
  { 
    name: "Quiz", 
    icon: FaQuestionCircle,
    type: "quiz"
  },
  { 
    name: "Weight Converter", 
    icon: FaCalculator,
    type: "weight"
  },
  { 
    name: "Temperature Converter", 
    icon: FaThermometerHalf,
    type: "temperature"
  }
];

// Animation variants
const sidebarVariants = {
  closed: { x: "-100%", transition: { duration: 0.3 } },
  open: { x: 0, transition: { duration: 0.3 } }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedModule, setExpandedModule] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContent, setSelectedContent] = useState({ type: "home" });

  // Memoized filtered menu items
  const filteredMenuItems = useMemo(() => {
    if (!searchQuery) return menuConfig;
    
    return menuConfig.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.children && item.children.some(child => 
        child.name.toLowerCase().includes(searchQuery.toLowerCase())
      ))
    );
  }, [searchQuery]);

  // Optimized toggle functions
  const toggleSidebar = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const toggleModule = useCallback((index) => {
    setExpandedModule(prev => prev === index ? null : index);
  }, []);

  const handleMenuItemClick = useCallback((item) => {
    switch (item.type) {
      case "home":
        setSelectedContent({ type: "home" });
        break;
      case "quiz":
        setSelectedContent({ type: "quiz" });
        break;
      case "weight":
        setSelectedContent({ type: "weight" });
        break;
      case "temperature":
        setSelectedContent({ type: "temperature" });
        break;
      default:
        break;
    }
    setIsOpen(false);
  }, []);

  const handlePdfClick = useCallback((pdf) => {
    setSelectedContent({ type: "pdf", file: pdf });
    setIsOpen(false);
  }, []);

  const closeContent = useCallback(() => {
    setSelectedContent({ type: "home" });
  }, []);

  const renderContent = () => {
    switch (selectedContent.type) {
      case "pdf":
        return <PDFViewer file={selectedContent.file} onClose={closeContent} />;
      case "quiz":
        return <Quiz onClose={closeContent} />;
      case "weight":
        return <WeightCal onClose={closeContent} />;
      case "temperature":
        return <TemperatureConverter onClose={closeContent} />;
      case "home":
      default:
        return (
          <div className="text-center py-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-6xl font-bold text-gray-800 mb-6">
                Welcome to Learning Hub
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore our comprehensive learning modules, take quizzes, and use helpful conversion tools. 
                Navigate through the sidebar to access different sections.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                  <FaQuestionCircle className="text-blue-500 text-3xl mb-3 mx-auto" />
                  <h3 className="font-semibold text-lg mb-2">Interactive Quizzes</h3>
                  <p className="text-gray-600">Test your knowledge with engaging quizzes</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
                  <FaCalculator className="text-green-500 text-3xl mb-3 mx-auto" />
                  <h3 className="font-semibold text-lg mb-2">Conversion Tools</h3>
                  <p className="text-gray-600">Quick and easy unit conversions</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
                  <div className="text-purple-500 text-3xl mb-3 mx-auto">📚</div>
                  <h3 className="font-semibold text-lg mb-2">Learning Modules</h3>
                  <p className="text-gray-600">Comprehensive study materials</p>
                </div>
              </div>
            </motion.div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center p-4">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle sidebar"
          >
            <FaBars size={20} className="text-gray-700" />
          </button>
          
          <div className="relative max-w-md w-full mx-4">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search modules and topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="w-10"></div> {/* Spacer for balance */}
        </div>
      </nav>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Learning Hub</h2>
          <p className="text-gray-600 text-sm mt-1">Navigate your learning journey</p>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {filteredMenuItems.map((item, index) => (
              <li key={index}>
                <div
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => {
                    if (item.hasChildren) {
                      toggleModule(index);
                    } else {
                      handleMenuItemClick(item);
                    }
                  }}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon && <item.icon className="text-gray-600" />}
                    <span className="font-medium text-gray-700">{item.name}</span>
                  </div>
                  {item.hasChildren && (
                    <motion.div
                      animate={{ rotate: expandedModule === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaChevronDown className="text-gray-400" />
                    </motion.div>
                  )}
                </div>
                
                <AnimatePresence>
                  {item.hasChildren && expandedModule === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-6 mt-2 space-y-1 overflow-hidden"
                    >
                      {item.children.map((child, childIndex) => (
                        <li
                          key={childIndex}
                          className="p-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer transition-colors"
                          onClick={() => handlePdfClick(child.pdf)}
                        >
                          {child.name}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      {/* Main Content */}
      <main className="pt-20 p-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedContent.type + (selectedContent.file || '')}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}