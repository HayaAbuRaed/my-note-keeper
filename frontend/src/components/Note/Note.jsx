import { faCalendarAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import ConfirmDialog from "../../containers/Dialogs/ConfirmDialog";
import { formatDate } from "../../utils";
import { deleteNote as deleteNoteAPI } from "./API";
import styles from "./styles.module.css";
import { DIALOG_TYPES } from "./types";
import UpdateNoteDialog from "../../containers/Dialogs/UpdateNoteDialog";
import { NotesContext } from "../../contexts";

const Note = ({ note }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dialog, setDialog] = useState("");

  const { removeNote } = useContext(NotesContext);

  const { _id: id, title, content, createdAt, color } = note;

  const date = formatDate(createdAt);

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  const handleDelete = async (e) => {
    e.stopPropagation();
    setDialog(DIALOG_TYPES.CONFIRM);
  };

  const confirmDelete = async () => {
    setDialog("");
    await deleteNoteAPI(id);
    removeNote(id);
  };

  const handleCancel = () => {
    setDialog("");
  };

  const handleNoteClick = () => {
    dialog !== DIALOG_TYPES.CONFIRM && setDialog(DIALOG_TYPES.UPDATE);
  };

  return (
    <div
      className={styles.noteContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: color }}
      onClick={handleNoteClick}
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

      {dialog === DIALOG_TYPES.CONFIRM && (
        <ConfirmDialog
          message="⚠️ Are you sure you want to delete this note?"
          onConfirm={confirmDelete}
          onCancel={handleCancel}
        />
      )}

      {dialog === DIALOG_TYPES.UPDATE && (
        <UpdateNoteDialog note={note} onCancel={handleCancel} />
      )}
    </div>
  );
};

export default Note;
