import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import WeightCal from "../components/WeightCal";
import { FaBars, FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import ConversionCalculator from "../components/WeightCal";
import PDFFrame from "../components/pdfFrame";
import Quiz from "../components/Quiz";
import "./landingPage.css";
import TemperatureConverter from "../components/TemperatureConverter";
import "./landingPageResponsive.css";
import "./navbarStyles.css";

const menuItems = [
  { name: "Home" },
  {
    name: "Module 1",
    hasChildren: true,
    children: [
      { name: "Topic 1", pdf: "/pdf/topic1.pdf" },
      { name: "Topic 2", pdf: "/pdf/topic2.pdf" },
      { name: "Topic 3", pdf: "/pdf/topic3.pdf" },
    ],
  },
  {
    name: "Module 2",
    hasChildren: true,
    children: [
      { name: "Topic 1", pdf: "/pdf/topic1.pdf" },
      { name: "Topic 2", pdf: "/pdf/topic2.pdf" },
      { name: "Topic 3", pdf: "/pdf/topic3.pdf" },
    ],
  },
  {
    name: "Module 3",
    hasChildren: true,
    children: [
      { name: "Topic 1", pdf: "/pdf/topic1.pdf" },
      { name: "Topic 2", pdf: "/pdf/topic2.pdf" },
      { name: "Topic 3", pdf: "/pdf/topic3.pdf" },
    ],
  },
  { name: "Quiz" },
  { name: "Weight Converter" },
  { name: "Temperature Converter" }
];

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedModule, setExpandedModule] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [showHome, setShowHome] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.querySelector('.search-input').focus();
    }
  };

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const handleMenuItemClick = (item) => {
    if (item.name === "Home") {
      setSelectedComponent(null);
      setSelectedPdf(null);
      setShowHome(true);
      setIsOpen(false);
    } else if (item.name === "Quiz") {
      console.log("Quiz selected");
      setSelectedComponent(<Quiz />);
      setSelectedPdf(null);
      setShowHome(false);
      setIsOpen(false);
    } else if (item.name === "Weight Converter") {
      console.log("Weight item clicked");
      setSelectedComponent(<WeightCal />);
      setSelectedPdf(null);
      setShowHome(false);
      setIsOpen(false);
    } else if (item.name === "Temperature Converter") {
      console.log("Temperature Converter item clicked");
      setSelectedComponent(<TemperatureConverter />);
      setSelectedPdf(null);
      setShowHome(false);
      setIsOpen(false);
    } else if (item.name === "Conversion Calculator") {
      setSelectedComponent(<ConversionCalculator />);
      setSelectedPdf(null);
      setShowHome(false);
      setIsOpen(false);
    // } else if (item.name === "Dynamic Simulation") {
    //   setSelectedComponent(<div className="dynamic-simulation">
    //     <h2>Dynamic Simulation</h2>
    //     <p>Dynamic simulation coming soon...</p>
    //   </div>);
    //   setSelectedPdf(null);
    //   setShowHome(false);
    //   setIsOpen(false);
    } else {
      setSelectedComponent(null);
      setShowHome(false);
    }
  };

  return (
    <div className="landing-page">
      <nav className="navbar navbar-light bg-transparent position-absolute w-100 p-3 d-flex justify-content-between">
        <button className="btn btn-outline-dark" onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </nav>

      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      <motion.div
        className="sidebar"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="sidebar-header">
        </div>
        <ul>
          {menuItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())).map((item, index) => (
            <li key={index}>
              <div className="menu-item" onClick={() => {
                item.hasChildren ? toggleModule(index) : handleMenuItemClick(item);
              }}>
                {item.name}
                {item.hasChildren && (
                  <span className="chevron-icon">
                    {expandedModule === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </div>
              {item.hasChildren && expandedModule === index && (
                <motion.ul
                  className="nested-menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {item.children.map((child, childIndex) => (
                    <li
                      key={childIndex}
                      className="nested-item"
                      onClick={() => {
                        setIsLoading(true);
                        setSelectedPdf(child.pdf);
                        setSelectedComponent(null);
                        setShowHome(false);
                        toggleSidebar();
                      }}
                    >
                      {child.name}
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="main-dashboard">
        <AnimatePresence>
          {selectedPdf && (
            <motion.div
              className="pdf-viewer"
              initial={{ opacity: 0, scale: 0.950 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {isLoading && <div className="loading"></div>}
              {error && <div className="error">{error}</div>}
              <PDFFrame
                file={selectedPdf}
                onLoad={() => setIsLoading(false)}
                onError={(err) => {
                  setError(err.message || "Error loading PDF");
                  setIsLoading(false);
                }}
              />
            </motion.div>
          )}
          {selectedComponent && selectedComponent}
          {showHome && !selectedPdf && !selectedComponent && (
            <motion.div
              className="home-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
