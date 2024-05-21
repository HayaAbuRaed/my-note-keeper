import { getNotes } from "../API";
import useFetch from "../../../hooks";

const useGetNotes = () => {
  const { data, loading, error } = useFetch(getNotes);

  return { notes: data, isFetching: loading, error };
};

export default useGetNotes;
