import React from "react";
import Note from "../../../components/Note";
import styles from "../styles.module.css";
import { getRandomColor } from "../../../utils";

const NotesList = ({ notes }) => {
  if (!notes) return <p>No notes.</p>;

  return (
    <div className={styles.notesContainer}>
      {notes.map((note) => (
        <Note key={note.id} note={note} color={getRandomColor()} />
      ))}
    </div>
  );
};

export default NotesList;
