import { faCalendarAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ConfirmDialog from "../../containers/Dialogs/ConfirmDialog";
import { formatDate } from "../../utils";
import { deleteNote } from "./API";
import styles from "./styles.module.css";

const Note = ({ note, color, setNotes }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const { _id: id, title, content, createdAt } = note;

  const date = formatDate(createdAt);

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  const handleDelete = async () => {
    setIsConfirmDialogOpen(true);
  };

  const confirmDelete = async () => {
    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    setIsConfirmDialogOpen(false);
    await deleteNote(id);
  };

  const cancelDelete = () => {
    setIsConfirmDialogOpen(false);
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
      <p className={styles.dateChip}>
        <FontAwesomeIcon icon={faCalendarAlt} className={styles.calenderIcon} />
        {date}
      </p>

      <button
        className={styles.iconButton}
        style={{ visibility: isHovered ? "visible" : "hidden" }}
        onClick={handleDelete}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>

      {isConfirmDialogOpen && (
        <ConfirmDialog
          message="Are you sure you want to delete this note?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default Note;
