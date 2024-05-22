import React, { useContext, useEffect } from "react";
import { NotesContext } from "../../contexts";
import AddTaskCard from "./components/AddTaskCard";
import NotesList from "./components/NotesList";
import useGetNotes from "./hooks/useGetNotes";
import styles from "./styles.module.css";

const Home = () => {
  const { notes, setNotes } = useContext(NotesContext);

  const { notes: fetchedNotes, isFetching } = useGetNotes();

  useEffect(() => {
    fetchedNotes && setNotes(fetchedNotes.reverse());
  }, [fetchedNotes]);

  return (
    <div className={styles.homeContainer}>
      <AddTaskCard />

      {isFetching ? <p>Loading...</p> : <NotesList notes={notes} />}
    </div>
  );
};

export default Home;
