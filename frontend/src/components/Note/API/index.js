import { apiRequest } from "../../../API";

export const deleteNote = async (id) => {
  return apiRequest(`/notes/${id}`, "DELETE");
};
