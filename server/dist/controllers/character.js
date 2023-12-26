"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCharacter = exports.updateCharacter = exports.addCharacter = exports.getCharacters = void 0;
const character_1 = __importDefault(require("../models/character"));
const getCharacters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const characters = yield character_1.default.find().limit(1);
    res.status(200).json({ characters });
});
exports.getCharacters = getCharacters;
const addCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log({ body });
    const character = new character_1.default(body);
    const newCharacter = yield character.save();
    const allCharacters = yield character_1.default.find();
    res.status(201).json({
        message: "Character added",
        character: newCharacter,
        characters: allCharacters
    });
});
exports.addCharacter = addCharacter;
const updateCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, params: { id } } = req;
    const updateCharacter = yield character_1.default.findByIdAndUpdate({ _id: id }, body);
    const allCharacters = yield character_1.default.find();
    res.status(200).json({
        message: "Character updated",
        character: updateCharacter,
        characters: allCharacters
    });
});
exports.updateCharacter = updateCharacter;
const deleteCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCharacter = yield character_1.default.findByIdAndDelete(req.params.id);
    const allCharacters = yield character_1.default.find();
    res.status(200).json({
        message: "Character deleted",
        character: deletedCharacter,
        characters: allCharacters
    });
});
exports.deleteCharacter = deleteCharacter;
