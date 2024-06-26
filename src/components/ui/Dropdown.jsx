import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import "../../styles/ui/Dropdown.css"; // Import CSS file for styling

export const CustomDropdown = ({
  options,
  onSelect,
  selectedVariant,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div className="dropdown-header" onClick={handleToggle}>
        {selectedVariant?.label || "Select an option"}
        <span className={`arrow ${isOpen ? "open" : "closed"}`}>
          <FaChevronDown />
        </span>
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
