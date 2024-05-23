import React, { useContext } from "react";
import Note from "../../../components/Note";
import { NotesContext } from "../../../contexts";
import styles from "../styles.module.css";
import NotesListSkeleton from "./NotesListSkeleton";

const NotesList = () => {
  const { notes, isFetching, query } = useContext(NotesContext);

  if (isFetching) return <NotesListSkeleton />;

  if (!notes || !notes.length) return <p>No notes.</p>;

  let filteredNotes = notes;

  if (query) {
    filteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <div className={styles.notesContainer}>
      {filteredNotes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
