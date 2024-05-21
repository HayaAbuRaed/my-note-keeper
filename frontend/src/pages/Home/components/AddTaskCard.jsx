import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "../styles.module.css";

const AddTaskCard = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isFocused) setIsExpanded(true);
    else if (!isFocused) setIsExpanded(false);
  }, [isFocused]);

  const handleFieldFocus = () => setIsFocused(true);

  const handleFieldBlur = () => setIsFocused(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(e.target[0].value + " " + e.target[1].value);
  };

  return (
    <form className={styles.addTaskCard} onSubmit={handleSubmit}>
      {isExpanded && (
        <input
          type="text"
          placeholder="Title"
          onFocus={handleFieldFocus}
          onBlur={handleFieldBlur}
          className={styles.input}
          required
        />
      )}

      <input
        type="text"
        placeholder="Take a note..."
        onFocus={handleFieldFocus}
        onBlur={handleFieldBlur}
        className={styles.input}
        required
      />

      {isExpanded && (
        <div className={styles.buttonsContainer}>
          <button
            onFocus={handleFieldFocus}
            type="submit"
            className={`${styles.button} ${styles.addButton}`}
          >
            <FontAwesomeIcon icon={faPlus} className={styles.buttonIcon} />
            Add
          </button>

          <button className={`${styles.button} ${styles.closeButton}`}>
            <FontAwesomeIcon icon={faXmark} className={styles.buttonIcon} />
            Close
          </button>
        </div>
      )}
    </form>
  );
};

export default AddTaskCard;
