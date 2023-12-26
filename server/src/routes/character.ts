import { Router } from "express";
import { getCharacters, addCharacter, updateCharacter, deleteCharacter } from "./../controllers/character";

const characterRouter = Router();

characterRouter.get("/", getCharacters);
characterRouter.post("/add", addCharacter);
characterRouter.put("/update/:id", updateCharacter);
characterRouter.delete("/delete/:id", deleteCharacter);

export default characterRouter;
