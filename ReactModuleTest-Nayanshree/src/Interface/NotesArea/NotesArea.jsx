import React from "react";
import "../NotesArea/Note.Module.css";
import Homeimg from "../../Images/Homeimag.svg";
import Lockicon from "../../Images/Lockicon.svg";

const NotesArea = ({ show }) => {
  return (
    <div className={show ? "blur-style" : "chatArea-container"}>
      <div className="title-style">
        <div className="bg-style">
          <img src={Homeimg} alt="Background" />
        </div>
        <div className="notes-style">
          <h1>Pocket Notes</h1>
        </div>
        <div className="default-style">
          <p>
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone.
          </p>
        </div>
      </div>
      <div className="encrypteddesign">
        <img src={Lockicon} alt="Lock Icon" />
        <p>end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default NotesArea;
