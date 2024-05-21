import React, { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import AddTaskCard from "./components/AddTaskCard";
import styles from "./styles.module.css";
import useGetNotes from "./hooks/useGetNotes";
import { createNote } from "./API";

const Home = () => {
  const [notes, setNotes] = useState([]);

  const { notes: fetchedNotes, isFetching } = useGetNotes();

  useEffect(() => {
    fetchedNotes && setNotes(fetchedNotes.reverse());
  }, [fetchedNotes]);

  const addNote = (newNote) => {
    createNote(newNote);
    setNotes((prevNotes) => [
      { ...newNote, createdAt: new Date() },
      ...prevNotes,
    ]);
  };

  return (
    <div className={styles.homeContainer}>
      <AddTaskCard onAddNote={addNote} />

      {isFetching ? <p>Loading...</p> : <NotesList notes={notes} />}
    </div>
  );
};

export default Home;
