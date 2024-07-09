import NoteModel from "../models/Note.models.js";

export const Notesadd = async (req, res) => {
  let { title, user } = req.body;
  user = req.body.user;
  const note = new NoteModel({ title, user });
  await note.save();

  res.send({ msg: "note created" });
};

export const getNotes = async (req, res) => {
  const user = req.body.user;
  const notes = await NoteModel.find({ user });
  console.log(user);
  res.send(notes);
};

export const getallnotes = async (req, res) => {
  const notes = await NoteModel.find();

  res.send(notes);
};
