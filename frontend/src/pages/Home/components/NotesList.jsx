import React from "react";
import Note from "../../../components/Note";
import { getRandomColor } from "../../../utils";
import styles from "../styles.module.css";

const NotesList = ({ notes }) => {
  if (!notes.length) return <p>No notes.</p>;

  return (
    <div className={styles.notesContainer}>
      {notes.map((note) => (
        <Note key={note.id} note={note} color={getRandomColor()} />
      ))}
    </div>
  );
};

export default NotesList;
