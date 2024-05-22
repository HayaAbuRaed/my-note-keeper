import React, { useContext } from "react";
import Note from "../../../components/Note";
import { NotesContext } from "../../../contexts";
import styles from "../styles.module.css";
import NotesListSkeleton from "./NotesListSkeleton";

const NotesList = () => {
  const { notes, isFetching } = useContext(NotesContext);

  if (isFetching) return <NotesListSkeleton />;

  if (!notes.length) return <p>No notes.</p>;

  return (
    <div className={styles.notesContainer}>
      {notes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
