import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "../styles.module.css";

const AddTaskCard = ({ onAddNote }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleFocus = () => setIsExpanded(true);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsExpanded(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setFormData({ title: "", content: "" });
    setIsExpanded(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNote(formData);
    handleClose();
  };

  const isDisabled = !formData.title || !formData.content;

  return (
    <form
      className={styles.addTaskCard}
      onSubmit={handleSubmit}
      onBlur={handleBlur}
    >
      {isExpanded && (
        <input
          name="title"
          type="text"
          placeholder="Title"
          onFocus={handleFocus}
          onChange={handleChange}
          className={styles.input}
          value={formData.title}
          required
        />
      )}

      <input
        name="content"
        type="text"
        placeholder="Take a note..."
        onFocus={handleFocus}
        onChange={handleChange}
        className={styles.input}
        value={formData.content}
        required
      />

      {isExpanded && (
        <div className={styles.buttonsContainer}>
          <button
            type="submit"
            className={`${styles.button} ${styles.addButton} ${
              isDisabled && styles.disabled
            }`}
            disabled={isDisabled}
          >
            <FontAwesomeIcon icon={faPlus} className={styles.buttonIcon} />
            Add
          </button>

          <button
            type="button"
            onClick={() => handleClose()}
            className={`${styles.button} ${styles.closeButton}`}
          >
            <FontAwesomeIcon icon={faXmark} className={styles.buttonIcon} />
            Close
          </button>
        </div>
      )}
    </form>
  );
};

export default AddTaskCard;
