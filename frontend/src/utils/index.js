import { NOTES_COLOR_PALETTE as colorPalette } from "../style/pallets";

export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorPalette.length);
  return colorPalette[randomIndex];
};

export const formatDate = (date) => {
  const dateStr = new Date(date).toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return dateStr;
};
