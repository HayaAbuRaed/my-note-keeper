import { Router } from "express";
import {
  addNote,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "../controllers/note.controller.js";

const router = Router();

// GET /notes => Retrieve all notes
router.get("/", getNotes);

// GET /notes/:id => Retrieve a note by id
router.get("/:id", getNote);

// POST /notes => Add a new note.
router.post("/", addNote);

// PUT /notes/:id => Update a note by id
router.put("/:id", updateNote);

// DELETE /notes/:id => Delete a note by id
router.delete("/:id", deleteNote);

export default router;
