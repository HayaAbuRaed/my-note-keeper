import Note from "../models/note.model.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({}); // find({}) => the {} means fined everything (all)
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNote = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await Note.findById(id);

    !note && res.status(404).json({ message: "Note not found" });

    note && res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;

    !req.body && res.status(400).json({ message: "Nothing to update" });

    const note = await Note.findByIdAndUpdate(id, req.body);

    !note && res.status(404).json({ message: "Note not found" });

    const updatedNote = await Note.findById(id);

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
