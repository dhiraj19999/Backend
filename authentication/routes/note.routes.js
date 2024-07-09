import express from "express";
import NoteModel from "../models/Note.models.js";
import isAdmin from "../middlewares/isadmin.middleware.js";
import {
  Notesadd,
  getNotes,
  getallnotes,
} from "../controllers/notes.controller.js";
const noteRouter = express.Router();

noteRouter.post("/add", Notesadd);

noteRouter.get("/get", getNotes);

noteRouter.get("/getAllnotes", isAdmin, getallnotes);

export default noteRouter;
