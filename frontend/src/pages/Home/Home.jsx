import React from "react";
import NotesList from "./components/NotesList";
import AddTaskCard from "./components/AddTaskCard";
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
