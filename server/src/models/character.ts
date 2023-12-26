import { model, Schema } from "mongoose";
import { ICharacter } from "../types/Character/character";

const characterSchema: Schema = new Schema({
  Title: { type: String, required: true },
  Name: { type: String, required: true }
});

export default model<ICharacter>("Character", characterSchema);
