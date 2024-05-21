import { apiRequest } from "../../../API";

export const getNotes = async () => {
  return apiRequest("/notes");
};
