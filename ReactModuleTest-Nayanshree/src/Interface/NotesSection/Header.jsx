import React from "react";
import "../NotesSection/Header.Module.css";
import backspacebtn from "../../Images/Backspace.svg"

const Header = ({ selectedNote }) => {
  const getInitials = (text) => {
    const words = text.split(" ").slice(0, 2); 
    return words.map(word => word.charAt(0).toUpperCase()).join(""); 
  };

  const char = getInitials(selectedNote.text);

  return (
    <div className="header-container">
      <div className="notes-title-bar">
        <img src={backspacebtn} alt="" className="backbtn"/>
        <div className="notes-title-profile" style={{ backgroundColor: selectedNote.color }}>
          {char}
        </div>
        <p className="notes-title-text">{selectedNote.text}</p>
      </div>
    </div>
  );
};

export default Header;
