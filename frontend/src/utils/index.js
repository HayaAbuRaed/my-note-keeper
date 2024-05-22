import { NOTES_COLOR_PALETTE as colorPalette } from "../style/pallets";

export const formatDate = (date) => {
  const dateStr = new Date(date).toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return dateStr;
};

export const matchNotesWithColors = (notes) => {
  return notes.map((note, index) => ({
    ...note,
    color: colorPalette[index % colorPalette.length],
  }));
};

export const matchNoteWithColor = (note) => {
  const randomIndex = Math.floor(Math.random() * colorPalette.length);
  return { ...note, color: colorPalette[randomIndex] };
};
