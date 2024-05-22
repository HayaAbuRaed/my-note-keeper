import { apiRequest } from ".";

export const getNotes = async () => {
  return await apiRequest("/notes");
};
