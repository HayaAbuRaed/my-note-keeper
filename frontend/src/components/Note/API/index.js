import { apiRequest } from "../../../API";

export const deleteNote = async (id) => {
  return await apiRequest(`/notes/${id}`, "DELETE");
};

export const updateNote = async (id, note) => {
  return await apiRequest(`/notes/${id}`, "PUT", note);
};
