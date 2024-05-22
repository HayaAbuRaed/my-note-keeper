import React from "react";
import AddTaskCard from "./components/AddTaskCard";
import NotesList from "./components/NotesList";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <AddTaskCard />

      <NotesList />
    </div>
  );
};

export default Home;
