import { apiRequest } from "../../../API";

export const getNotes = async () => {
  return apiRequest("/notes");
};

export const createNote = async (note) => {
  return apiRequest("/notes", "POST", note);
};
