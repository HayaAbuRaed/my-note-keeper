import React, { useEffect, useReducer } from "react";
import NotesContext from "./NotesContext";
import notesReducer from "./notesReducer";
import useGetNotes from "../../hooks/useGetNotes";
import { matchNotesWithColors } from "../../utils";

const initialState = {
  notes: [],
  query: "",
};

const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  const { notes: fetchedNotes, isFetching } = useGetNotes();

  useEffect(() => {
    fetchedNotes && setNotes(matchNotesWithColors(fetchedNotes));
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

  const setQuery = (query) => {
    dispatch({ type: "SET_QUERY", payload: query });
  };

  return (
    <NotesContext.Provider
      value={{
        isFetching,
        notes: state.notes,
        query: state.query,
        addNote,
        removeNote,
        updateNote,
        setNotes,
        setQuery,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
