import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import { updateNote as updateNoteAPI } from "./API";
import { NotesContext } from "../../contexts";

const UpdateNoteDialog = ({ note, onCancel }) => {
  const [formData, setFormData] = useState({
    title: note.title,
    content: note.content,
  });

  const { updateNote } = useContext(NotesContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setFormData({ title: "", content: "" });
    onCancel();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = await updateNoteAPI(note._id, formData);
    updateNote(note._id, newNote);
    handleClose();
  };

  const isDisabled =
    !formData.title ||
    !formData.content ||
    (formData.title === note.title && formData.content === note.content);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Update Note</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.flexColumn}>
            <div className={styles.filedContainer}>
              <label htmlFor="title">Title</label>
              <input
                name="title"
                className={styles.field}
                type="text"
                value={formData.title}
                placeholder="Title"
                onChange={handleChange}
              />
            </div>

            <div className={styles.filedContainer}>
              <label htmlFor="title">Content</label>
              <textarea
                name="content"
                className={styles.field}
                type="text"
                value={formData.content}
                placeholder="Content"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.modalActions}>
            <button
              className={`${styles.confirmButton} ${
                isDisabled && styles.disabled
              }`}
            >
              Update
            </button>
            <button onClick={onCancel} className={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateNoteDialog;
