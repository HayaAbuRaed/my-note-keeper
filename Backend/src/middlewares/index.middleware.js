import express from "express";
import noteRoute from "../routes/note.route.js";

const setupMiddleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  // => Importing the routes
  app.use("/notes", noteRoute);
};

export default setupMiddleware;