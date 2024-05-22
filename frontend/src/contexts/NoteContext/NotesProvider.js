import React, { useEffect, useReducer } from "react";
import NotesContext from "./NotesContext";
import notesReducer from "./notesReducer";
import useGetNotes from "../../hooks/useGetNotes";
import { matchNotesWithColors } from "../../utils";

const initialState = {
  notes: [],
};

const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  const { notes: fetchedNotes, isFetching } = useGetNotes();

  useEffect(() => {
    console.log("fetchedNotes", fetchedNotes);
    fetchedNotes && setNotes(matchNotesWithColors(fetchedNotes.reverse()));
  }, [fetchedNotes]);

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
      value={{
        originalNotes: fetchedNotes && matchNotesWithColors(fetchedNotes.reverse()),
        isFetching,
        notes: state.notes,
        addNote,
        removeNote,
        updateNote,
        setNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
