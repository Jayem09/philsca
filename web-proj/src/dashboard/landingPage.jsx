import { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaSearch, FaTimes, FaHome, FaCalculator, FaThermometerHalf, FaChevronDown } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";


// Weight Converter Component
const WeightCal = ({ onClose }) => (
  <div className="container mt-4">
    <div className="card shadow-lg" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div className="card-header d-flex justify-content-between align-items-center bg-primary text-white">
        <h4 className="mb-0">Weight Converter</h4>
        <button onClick={onClose} className="btn btn-outline-light btn-sm">
          <FaTimes />
        </button>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <input type="number" placeholder="Enter weight" className="form-control" />
        </div>
        <div className="mb-3">
          <select className="form-select">
            <option>Kilograms</option>
            <option>Pounds</option>
            <option>Grams</option>
          </select>
        </div>
        <div className="alert alert-info text-center">
          <strong>Result: 0</strong>
        </div>
      </div>
    </div>
  </div>
);

// Temperature Converter Component
const TemperatureConverter = ({ onClose }) => (
  <div className="container mt-4">
    <div className="card shadow-lg" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div className="card-header d-flex justify-content-between align-items-center bg-danger text-white">
        <h4 className="mb-0">Temperature Converter</h4>
        <button onClick={onClose} className="btn btn-outline-light btn-sm">
          <FaTimes />
        </button>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <input type="number" placeholder="Enter temperature" className="form-control" />
        </div>
        <div className="mb-3">
          <select className="form-select">
            <option>Celsius</option>
            <option>Fahrenheit</option>
            <option>Kelvin</option>
          </select>
        </div>
        <div className="alert alert-warning text-center">
          <strong>Result: 0°</strong>
        </div>
      </div>
    </div>
  </div>
);

// PDF Viewer Component
const PDFViewer = ({ file, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [file]);

  const spinnerStyle = {
    width: '3rem',
    height: '3rem'
  };

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger text-center">
          <h4>Error loading PDF</h4>
          <button onClick={onClose} className="btn btn-danger mt-2">Close</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid mt-3">
      <div className="card shadow-lg">
        <div className="card-header d-flex justify-content-between align-items-center bg-dark text-white">
          <h5 className="mb-0">PDF Viewer</h5>
          <button onClick={onClose} className="btn btn-outline-light btn-sm">
            <FaTimes />
          </button>
        </div>
        <div className="card-body p-0" style={{ height: '80vh' }}>
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="spinner-border text-primary" style={spinnerStyle} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <iframe
              src={file}
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="PDF Viewer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Menu configuration
const menuConfig = [
  {
    name: "Home",
    icon: FaHome,
    type: "home"
  },
  {
    name: "Module 1",
    hasChildren: true,
    children: [
      { name: "Topic 1", pdf: "/pdf/Module 1 (Topic 1).pdf" },
      { name: "Topic 2", pdf: "/pdf/Module 1 (Topic 2).pdf" },
    ],
  },
  {
    name: "Module 2",
    hasChildren: true,
    children: [
      { name: "Topic 1", pdf: "/pdf/Module 2 (Topic 1).pdf" },
      { name: "Topic 2", pdf: "/pdf/Module 2 (Topic 2).pdf" },
    ],
  },
  {
    name: "Module 3",
    hasChildren: true,
    children: [
      { name: "Topic 1", pdf: "/pdf/Module 3 (Topic 1).pdf" },
      { name: "Topic 2", pdf: "/pdf/Module 3 (Topic 2).pdf" },
      { name: "Topic 3", pdf: "/pdf/topic3.pdf" },
    ],
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

// Custom styles
const styles = {
  landingPage: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: 'Arial, sans-serif'
  },
  navbar: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    zIndex: 1040
  },
  sidebar: {
    width: '320px',
    backgroundColor: '#ffffff',
    boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
    zIndex: 1050
  },
  sidebarHeader: {
    padding: '1.5rem',
    borderBottom: '1px solid #e9ecef',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white'
  },
  menuItem: {
    padding: '0.75rem 1rem',
    cursor: 'pointer',
    borderRadius: '0.5rem',
    margin: '0.25rem',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menuItemHover: {
    backgroundColor: '#f8f9fa',
    transform: 'translateX(5px)'
  },
  nestedItem: {
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '0.25rem',
    margin: '0.125rem 0',
    marginLeft: '1rem',
    fontSize: '0.9rem',
    color: '#6c757d',
    transition: 'all 0.2s ease'
  },
  nestedItemHover: {
    backgroundColor: '#e3f2fd',
    color: '#1976d2'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1040
  },
  mainContent: {
    marginTop: '80px',
    padding: '2rem'
  },
  homeContent: {
    textAlign: 'center',
    padding: '4rem 2rem',
    color: 'white'
  },
  featureCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '1rem',
    padding: '2rem',
    margin: '1rem',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  },
  searchContainer: {
    position: 'relative',
    maxWidth: '400px',
    width: '100%'
  },
  searchIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#6c757d'
  },
  searchInput: {
    paddingLeft: '40px',
    borderRadius: '25px',
    border: '1px solid #dee2e6'
  }
};

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedModule, setExpandedModule] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContent, setSelectedContent] = useState({ type: "home" });
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredMenuItems = useMemo(() => {
    if (!searchQuery) return menuConfig;
    return menuConfig.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.children && item.children.some(child =>
        child.name.toLowerCase().includes(searchQuery.toLowerCase())
      ))
    );
  }, [searchQuery]);

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
      case "weight":
        return <WeightCal onClose={closeContent} />;
      case "temperature":
        return <TemperatureConverter onClose={closeContent} />;
      case "home":
      default:
        return (
          <div style={styles.homeContent}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="display-1 fw-bold mb-4">Welcome to Learning Hub</h1>
              <p className="lead mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
                Explore our comprehensive learning modules, take quizzes, and use helpful conversion tools.
                Navigate through the sidebar to access different sections.
              </p>
              <div className="row justify-content-center mt-5">
                <div className="col-md-4">
                  <div
                    style={styles.featureCard}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    <FaCalculator size={48} className="mb-3" />
                    <h4>Conversion Tools</h4>
                    <p>Quick and easy unit conversions</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    style={styles.featureCard}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    <div style={{ fontSize: '48px' }} className="mb-3">📚</div>
                    <h4>Learning Modules</h4>
                    <p>Comprehensive study materials</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
    }
  };

  return (
    <div style={styles.landingPage}>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg fixed-top" style={styles.navbar}>
        <div className="container-fluid">
          <button
            className="btn btn-outline-primary me-3"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <FaBars />
          </button>

          <div style={styles.searchContainer}>
            <FaSearch style={styles.searchIcon} />
            <input
              type="text"
              className="form-control"
              style={styles.searchInput}
              placeholder="Search modules and topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={{ width: '50px' }}></div>
        </div>
      </nav>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.overlay}
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className="position-fixed h-100"
        style={{
          ...styles.sidebar,
          left: 0,
          top: 0,
          overflowY: 'auto'
        }}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div style={styles.sidebarHeader}>
          <h3 className="mb-1">Learning Hub</h3>
          <small>Navigate your learning journey</small>
        </div>

        <div className="p-3">
          {filteredMenuItems.map((item, index) => (
            <div key={index}>
              <div
                style={{
                  ...styles.menuItem,
                  ...(hoveredItem === `main-${index}` ? styles.menuItemHover : {})
                }}
                onMouseEnter={() => setHoveredItem(`main-${index}`)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {
                  if (item.hasChildren) {
                    toggleModule(index);
                  } else {
                    handleMenuItemClick(item);
                  }
                }}
              >
                <div className="d-flex align-items-center">
                  {item.icon && <item.icon className="me-2" />}
                  <span>{item.name}</span>
                </div>
                {item.hasChildren && (
                  <motion.div
                    animate={{ rotate: expandedModule === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown />
                  </motion.div>
                )}
              </div>

              <AnimatePresence>
                {item.hasChildren && expandedModule === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {item.children.map((child, childIndex) => (
                      <div
                        key={childIndex}
                        style={{
                          ...styles.nestedItem,
                          ...(hoveredItem === `child-${index}-${childIndex}` ? styles.nestedItemHover : {})
                        }}
                        onMouseEnter={() => setHoveredItem(`child-${index}-${childIndex}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => handlePdfClick(child.pdf)}
                      >
                        {child.name}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedContent.type + (selectedContent.file || '')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
