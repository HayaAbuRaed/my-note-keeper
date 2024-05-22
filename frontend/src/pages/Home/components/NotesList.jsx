import React, { useContext } from "react";
import Note from "../../../components/Note";
import { NotesContext } from "../../../contexts";
import { getRandomColor } from "../../../utils";
import styles from "../styles.module.css";

const NotesList = () => {
  const { notes, isFetching } = useContext(NotesContext);

  if (isFetching) return <p>Loading...</p>;

  if (!notes.length) return <p>No notes.</p>;

  return (
    <div className={styles.notesContainer}>
      {notes.map((note) => (
        <Note key={note._id} note={note} color={getRandomColor()} />
      ))}
    </div>
  );
};

export default NotesList;
