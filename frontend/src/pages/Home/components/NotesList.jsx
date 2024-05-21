import React from "react";
import Note from "../../../components/Note";
import styles from "../styles.module.css";
import { getRandomColor } from "../../../utils";
import useGetNotes from "../hooks/useGetNotes";

const NotesList = () => {
  const { notes, isFetching } = useGetNotes();

  console.log(notes);

  if (isFetching) return <p>Loading...</p>;

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
