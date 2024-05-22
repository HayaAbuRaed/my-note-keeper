import express from "express";
import noteRoute from "../routes/note.route.js";
import cors from 'cors';

const setupMiddleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  // => Importing the routes
  app.use("/notes", noteRoute);
};

export default setupMiddleware;
