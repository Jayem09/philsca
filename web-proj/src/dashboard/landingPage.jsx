import { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaSearch, FaTimes, FaHome, FaCalculator, FaThermometerHalf, FaChevronDown } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/offcanvas"; // Import Offcanvas JavaScript

// Weight Converter Component
const WeightCal = ({ onClose }) => (
  <div className="container mt-4">
    <div className="card shadow-lg" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div className="card-header d-flex justify-content-between align-items-center bg-primary text-white">
        <h4 className="mb-0">Weight Converter</h4>
        <button onClick={onClose} className="btn btn-outline-light btn-sm" aria-label="Close Weight Converter">
          <FaTimes />
        </button>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="weightInput" className="form-label visually-hidden">Enter weight</label>
          <input type="number" id="weightInput" placeholder="Enter weight" className="form-control" aria-label="Weight input" />
        </div>
        <div className="mb-3">
          <label htmlFor="unitSelect" className="form-label visually-hidden">Select unit</label>
          <select id="unitSelect" className="form-select" aria-label="Weight unit selection">
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
        <button onClick={onClose} className="btn btn-outline-light btn-sm" aria-label="Close Temperature Converter">
          <FaTimes />
        </button>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="tempInput" className="form-label visually-hidden">Enter temperature</label>
          <input type="number" id="tempInput" placeholder="Enter temperature" className="form-control" aria-label="Temperature input" />
        </div>
        <div className="mb-3">
          <label htmlFor="tempUnitSelect" className="form-label visually-hidden">Select unit</label>
          <select id="tempUnitSelect" className="form-select" aria-label="Temperature unit selection">
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
    // Simulate network delay for PDF loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // In a real app, you'd verify PDF loading success here
    }, 1500);

    return () => clearTimeout(timer); // Cleanup on unmount
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
          <p>{error.message}</p>
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
          <button onClick={onClose} className="btn btn-outline-light btn-sm" aria-label="Close PDF Viewer">
            <FaTimes />
          </button>
        </div>
        <div className="card-body p-0" style={{ height: '80vh', position: 'relative' }}>
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center h-100 position-absolute w-100">
              <div className="spinner-border text-primary" style={spinnerStyle} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="ms-3 text-muted">Loading PDF...</p>
            </div>
          ) : (
            <iframe
              src={file}
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="PDF Viewer"
              onError={() => setError(new Error("Failed to load PDF iframe."))} // Basic error handling for iframe
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

// Custom styles (kept inline for simplicity, consider CSS modules for larger projects)
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
    justifyContent: 'space-between',
    color: '#343a40' // Default text color
  },
  menuItemHover: {
    backgroundColor: '#f8f9fa',
    transform: 'translateX(5px)',
    color: '#007bff' // Highlight color on hover
  },
  menuItemActive: {
    backgroundColor: '#e3f2fd',
    color: '#007bff',
    fontWeight: 'bold'
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
  nestedItemActive: {
    backgroundColor: '#cfe2ff', // Lighter blue for active nested item
    color: '#0a58ca',
    fontWeight: 'bold'
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
  const [selectedContent, setSelectedContent] = useState({ type: "home" }); // { type: "home" | "pdf", file: "path" | "weight" | "temperature" }
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredMenuItems = useMemo(() => {
    if (!searchQuery) return menuConfig;

    const lowerCaseQuery = searchQuery.toLowerCase();
    return menuConfig.filter(item => {
      // Check if main item name matches
      if (item.name.toLowerCase().includes(lowerCaseQuery)) {
        return true;
      }
      // Check if any child item name matches
      if (item.children && item.children.some(child =>
        child.name.toLowerCase().includes(lowerCaseQuery)
      )) {
        return true;
      }
      return false;
    });
  }, [searchQuery]);

  const toggleSidebar = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const toggleModule = useCallback((index) => {
    setExpandedModule(prev => prev === index ? null : index);
  }, []);

  const handleMenuItemClick = useCallback((item) => {
    setSelectedContent({ type: item.type });
    // Bootstrap's Offcanvas handles closing, so directly setting isOpen(false) here might conflict.
    // Instead, rely on data-bs-dismiss="offcanvas" on the close button or programmatically close via BS API.
    // For now, we'll keep this for direct JS calls if needed.
    // setIsOpen(false);
  }, []);

  const handlePdfClick = useCallback((pdf) => {
    setSelectedContent({ type: "pdf", file: pdf });
    // setIsOpen(false);
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
                <div className="col-md-4 mb-4 mb-md-0">
                  <div
                    style={styles.featureCard}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    onClick={() => setSelectedContent({ type: "weight" })}
                  >
                    <FaCalculator size={48} className="mb-3" />
                    <h4>Conversion Tools</h4>
                    <p>Quick and easy unit conversions</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    style={styles.featureCard}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    onClick={() => setExpandedModule(0)} // Example: Expands Module 1
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
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasSidebar"
            aria-controls="offcanvasSidebar"
            aria-label="Toggle sidebar"
            onClick={() => setIsOpen(true)} // Set isOpen true when sidebar opens via Bootstrap toggle
          >
            <FaBars />
          </button>

          <div style={styles.searchContainer} className="d-flex me-auto">
            <FaSearch style={styles.searchIcon} />
            <input
              type="text"
              className="form-control"
              style={styles.searchInput}
              placeholder="Search modules and topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search modules and topics"
            />
          </div>

          {/* Spacer div to balance navbar (optional, adjust as needed) */}
          <div className="d-none d-lg-block" style={{ width: '50px' }}></div>
        </div>
      </nav>

      {/* Sidebar - Bootstrap Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
        style={{ width: '320px' }} // Apply your custom width
        onShow={() => setIsOpen(true)} // Keep React state in sync with Bootstrap's
        onHide={() => setIsOpen(false)} // Keep React state in sync with Bootstrap's
      >
        <div className="offcanvas-header" style={styles.sidebarHeader}>
          <h5 className="offcanvas-title" id="offcanvasSidebarLabel">Learning Hub</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close sidebar"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="p-3">
            {filteredMenuItems.map((item, index) => {
              const isMainActive =
                selectedContent.type === item.type ||
                (item.hasChildren && expandedModule === index);

              return (
                <div key={index}>
                  <div
                    style={{
                      ...styles.menuItem,
                      ...(hoveredItem === `main-${index}` ? styles.menuItemHover : {}),
                      ...(isMainActive ? styles.menuItemActive : {})
                    }}
                    onMouseEnter={() => setHoveredItem(`main-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => {
                      if (item.hasChildren) {
                        toggleModule(index);
                      } else {
                        handleMenuItemClick(item);
                      }
                      // Close offcanvas when a menu item is clicked (only for non-parent items)
                      if (!item.hasChildren) {
                        const offcanvasElement = document.getElementById('offcanvasSidebar');
                        if (offcanvasElement) {
                          const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement) || new window.bootstrap.Offcanvas(offcanvasElement);
                          bsOffcanvas.hide();
                        }
                      }
                    }}
                    aria-expanded={item.hasChildren ? (expandedModule === index ? "true" : "false") : undefined}
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
                        {item.children.map((child, childIndex) => {
                          const isChildActive = selectedContent.type === "pdf" && selectedContent.file === child.pdf;
                          return (
                            <div
                              key={childIndex}
                              style={{
                                ...styles.nestedItem,
                                ...(hoveredItem === `child-${index}-${childIndex}` ? styles.nestedItemHover : {}),
                                ...(isChildActive ? styles.nestedItemActive : {})
                              }}
                              onMouseEnter={() => setHoveredItem(`child-${index}-${childIndex}`)}
                              onMouseLeave={() => setHoveredItem(null)}
                              onClick={() => {
                                handlePdfClick(child.pdf);
                                // Close offcanvas when a PDF item is clicked
                                const offcanvasElement = document.getElementById('offcanvasSidebar');
                                if (offcanvasElement) {
                                  const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement) || new window.bootstrap.Offcanvas(offcanvasElement);
                                  bsOffcanvas.hide();
                                }
                              }}
                              aria-current={isChildActive ? "page" : undefined}
                            >
                              {child.name}
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedContent.type + (selectedContent.file || '')} // Key changes based on content type and file
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