import React from "react";
import Note from "../../../components/Note";
import { getRandomColor } from "../../../utils";
import styles from "../styles.module.css";

const NotesList = ({ notes, setNotes }) => {
  if (!notes) return <p>No notes.</p>;

  return (
    <div className={styles.notesContainer}>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          setNotes={setNotes}
          color={getRandomColor()}
        />
      ))}
    </div>
  );
};

export default NotesList;
