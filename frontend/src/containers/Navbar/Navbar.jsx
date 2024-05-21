import {
  faMagnifyingGlass,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.css";

const Navbar = () => {
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
        />
      </div>
    </div>
  );
};

export default Navbar;
