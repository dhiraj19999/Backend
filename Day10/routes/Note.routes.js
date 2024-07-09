import express from "express";

const noteRouter = express.Router();

import NoteModel from "../../authentication/models/Note.models";

noteRouter.post("/create", async (req, res) => {
  const payload = req.body;
  const note = new NoteModel(payload);
  await note.save();
  res.send({ msg: "notes added" });
});

noteRouter.get("/", async (req, res) => {
  const notes = await NoteModel.find();
  res.send("notes is here");
});

noteRouter.delete("/delete/:id", async (req, res) => {
  const noteID = req.params.id;
  await NoteModel.findByIdAndDelete({ _id: noteID });
  res.send("Notes deleted");
});

/*noteRouter.delete("/create",(req,res)=>{

    res.send("h")
})*/

module.exports = {
  noteRouter,
};
