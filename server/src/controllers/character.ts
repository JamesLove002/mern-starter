import { Response, Request } from "express";
import { ICharacter } from "../types/Character/character";
import Character from "../models/character";

const getCharacters = async (req: Request, res: Response) => {
  const characters = await Character.find().limit(1);
  res.status(200).json({ characters });
};

const addCharacter = async (req: Request, res: Response) => {
  const body = req.body as ICharacter;
  const character = new Character(body);
  const newCharacter = await character.save();
  const allCharacters = await Character.find();

  res.status(201).json({
    message: "Character added",
    character: newCharacter,
    characters: allCharacters
  });
};

const updateCharacter = async (req: Request, res: Response) => {
  const {
    body,
    params: { id }
  } = req;

  const updateCharacter = await Character.findByIdAndUpdate({ _id: id }, body);
  const allCharacters = await Character.find();

  res.status(200).json({
    message: "Character updated",
    character: updateCharacter,
    characters: allCharacters
  });
};

const deleteCharacter = async (req: Request, res: Response) => {
  const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
  const allCharacters = await Character.find();

  res.status(200).json({
    message: "Character deleted",
    character: deletedCharacter,
    characters: allCharacters
  });
};

export { getCharacters, addCharacter, updateCharacter, deleteCharacter };
