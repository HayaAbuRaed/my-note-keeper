import React from "react";
import NoteLoadingSkeleton from "../../../components/Note/NoteLoadingSkeleton";
import styles from "../styles.module.css";

const NotesListSkeleton = () => {
  return (
    <div className={styles.notesContainer}>
      {Array.from({ length: 5 }).map((_, index) => (
        <NoteLoadingSkeleton key={index} />
      ))}
    </div>
  );
};

export default NotesListSkeleton;
