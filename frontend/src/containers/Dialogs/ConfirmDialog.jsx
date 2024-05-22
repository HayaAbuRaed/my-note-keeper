import React from "react";
import styles from "./styles.module.css";

const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
    console.log("ConfirmDialog");
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <p>{message}</p>
        <div className={styles.modalActions}>
          <button onClick={onConfirm} className={styles.confirmButton}>Yes</button>
          <button onClick={onCancel} className={styles.cancelButton}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
