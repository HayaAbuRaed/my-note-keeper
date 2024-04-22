import express from "express";

const setupMiddleware = (app) => {
  app.use(express.json()); // enable parsing json
  app.use(express.urlencoded({ extended: false })); // enable parsing form
};

export default setupMiddleware;