import React, { useReducer } from "react";
import NotesContext from "./NotesContext";
import notesReducer from "./notesReducer";

const initialState = {
  notes: [],
};

const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  const addNote = (note) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  const removeNote = (id) => {
    dispatch({ type: "REMOVE_NOTE", payload: id });
  };

  const updateNote = (id, updatedNote) => {
    dispatch({ type: "UPDATE_NOTE", payload: { id, updatedNote } });
  };

  const setNotes = (notes) => {
    dispatch({ type: "SET_NOTES", payload: notes });
  };

  return (
    <NotesContext.Provider
      value={{ notes: state.notes, addNote, removeNote, updateNote, setNotes }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
