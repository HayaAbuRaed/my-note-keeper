import React, { useEffect, useState } from "react";
import AddTaskCard from "./components/AddTaskCard";
import NotesList from "./components/NotesList";
import useGetNotes from "./hooks/useGetNotes";
import styles from "./styles.module.css";

const Home = () => {
  const [notes, setNotes] = useState([]);

  const { notes: fetchedNotes, isFetching } = useGetNotes();

  useEffect(() => {
    fetchedNotes && setNotes(fetchedNotes.reverse());
  }, [fetchedNotes]);

  return (
    <div className={styles.homeContainer}>
      <AddTaskCard setNotes={setNotes} />

      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <NotesList notes={notes} setNotes={setNotes} />
      )}
    </div>
  );
};

export default Home;
