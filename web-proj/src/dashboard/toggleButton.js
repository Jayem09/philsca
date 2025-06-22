export const ToggleButton = ({ isOpen, toggleSidebar }) => {
  return isOpen ? (
    <button className="btn btn-outline-dark" onClick={toggleSidebar}>
      <FaTimes size={24} />
    </button>
  ) : (
    <button className="btn btn-outline-dark" onClick={toggleSidebar}>
      <FaBars size={24} />
    </button>
  );
};
