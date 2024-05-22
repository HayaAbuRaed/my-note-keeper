import { matchNoteWithColor } from "../../utils";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [matchNoteWithColor(action.payload), ...state.notes],
      };
    case "REMOVE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
      };
    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload.id
            ? { ...action.payload.updatedNote, color: note.color }
            : note
        ),
      };
    case "SET_NOTES":
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
};

export default notesReducer;
