import mongoose from "mongoose";

const NoteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Note title is required"],
    },

    content: {
      type: String,
      required: [true, "Note content is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", NoteSchema);

export default Note;
