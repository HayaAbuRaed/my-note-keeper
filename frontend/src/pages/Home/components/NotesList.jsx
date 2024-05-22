import React, { useContext } from "react";
import Note from "../../../components/Note";
import { NotesContext } from "../../../contexts";
import { getRandomColor } from "../../../utils";
import styles from "../styles.module.css";
import NotesListSkeleton from "./NotesListSkeleton";

const NotesList = () => {
  const { notes, isFetching } = useContext(NotesContext);

  if (isFetching) return <NotesListSkeleton />;

  if (!notes.length) return <p>No notes.</p>;

  return (
    <div className={styles.notesContainer}>
      {/* <NotesListSkeleton /> */}
      {notes.map((note) => (
        <Note key={note._id} note={note} color={getRandomColor()} />
      ))}
    </div>
  );
};

export default NotesList;
