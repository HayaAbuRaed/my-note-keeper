import { apiRequest } from "../../../API";

export const getNotes = async () => {
  return await apiRequest("/notes");
};

export const createNote = async (note) => {
  return await apiRequest("/notes", "POST", note);
};
