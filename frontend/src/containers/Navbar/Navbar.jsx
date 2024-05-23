import {
  faMagnifyingGlass,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styles from "./styles.module.css";
import { NotesContext } from "../../contexts";

const Navbar = () => {
  const { setQuery } = useContext(NotesContext);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.trim();
    searchQuery ? setQuery(searchQuery) : setQuery("");
  };

  return (
    <div className={styles.navContainer}>
      <h1 className={styles.heading}>
        <FontAwesomeIcon icon={faNoteSticky} className={styles.noteIcon} />
        My Note Keeper
      </h1>

      <div className={styles.searchContainer}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles.searchIcon}
        />
        <input
          type="search"
          placeholder={"Search notes"}
          className={styles.search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Navbar;
