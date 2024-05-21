import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./styles.module.css";

const Note = ({ note, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { title, content, date } = note;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.noteContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: color }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      <p className={styles.dateChip}>{date}</p>

      <FontAwesomeIcon
        className={styles.trashIcon}
        icon={faTrash}
        style={{ visibility: isHovered ? "visible" : "hidden" }}
      />
    </div>
  );
};

export default Note;
