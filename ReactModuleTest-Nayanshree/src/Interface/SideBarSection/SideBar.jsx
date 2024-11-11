import React, { useEffect, useState } from "react";
import "../SideBarSection/SideBar.Module.css";

const SideBar = ({ show, openModal, notes, onSelectNote }) => {
  const [logotexts, setLogotexts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const generateLogotexts = notes.map((note) => {
      const initials = note.text
        .split(/\s+/)
        .filter((word) => word.length > 0)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join("");
      return initials;
    });
    setLogotexts(generateLogotexts);
  }, [notes]);

  const handleNoteClick = (index) => {
    setSelected(index);
    onSelectNote(index);
  };

  return (
    <div className={show ? "blurside-style" : "sidebarcontainer"}>
      <h1 className="title-style">Pocket Notes</h1>
      <section className="notes-style">
        <ul>
          {notes.map((note, index) => (
            <div
              key={index}
              onClick={() => handleNoteClick(index)}
              className={`noteslist ${selected === index ? "selected" : ""}`}
            >
              <div
                className="namelogo"
                style={
                  show
                    ? { background: "#2F2F2FA6", color: "#2F2F2FA6" }
                    : { background: note.color }
                }
              >
                {logotexts[index]}
              </div>
              <li>{note.text}</li>
            </div>
          ))}
        </ul>
      </section>
      <button className="iconstyle" onClick={openModal} aria-label="Add Note">
        +
      </button>
    </div>
  );
};

export default SideBar;
