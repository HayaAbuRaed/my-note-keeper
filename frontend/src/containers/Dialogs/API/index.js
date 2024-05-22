import { apiRequest } from "../../../API";

export const updateNote = async (id, note) => {
  return await apiRequest(`/notes/${id}`, "PUT", note);
};
