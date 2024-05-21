import useFetch from "../../../hooks";
import { createNote } from "../API";

const useCreateNote = (note) => {
  const { loading, error } = useFetch(() => createNote(note));

  return { isAdding: loading, error };
};

export default useCreateNote;
