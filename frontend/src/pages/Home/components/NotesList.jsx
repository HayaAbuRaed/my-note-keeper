import React from "react";
import Note from "../../../components/Note";
import styles from "../styles.module.css";
import { getRandomColor } from "../../../utils";

const NotesList = () => {
  const notes = [
    {
      id: 1,
      title: "Note Title",
      content: "Note Content",
      date: "2021-09-01",
    },
    {
      id: 2,
      title: "Note Title",
      content: "Note Content",
      date: "2021-09-01",
    },
    {
      id: 3,
      title: "Note Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.",
      date: "2021-09-01",
    },
  ];

  return (
    <div className={styles.noteContainer}>
      {notes.map((note) => (
        <Note key={note.id} note={note} color={getRandomColor()} />
      ))}
    </div>
  );
};

export default NotesList;
