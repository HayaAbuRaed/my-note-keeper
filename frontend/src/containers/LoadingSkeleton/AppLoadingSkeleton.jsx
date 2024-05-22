import React from "react";
import LoadingSkeleton from ".";
import NotesListSkeleton from "../../pages/Home/components/NotesListSkeleton";
import styles from "./styles.module.css";

const AppLoadingSkeleton = () => {
  return (
    <div className={styles.columnFlex}>
      <LoadingSkeleton width="100%" height={60} borderRadius={0} />

      <LoadingSkeleton width={314} height={64} borderRadius="1rem" />

      <NotesListSkeleton />
    </div>
  );
};

export default AppLoadingSkeleton;
