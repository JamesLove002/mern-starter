"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const character_1 = require("./../controllers/character");
const characterRouter = (0, express_1.Router)();
characterRouter.get("/", character_1.getCharacters);
characterRouter.post("/add", character_1.addCharacter);
characterRouter.put("/update/:id", character_1.updateCharacter);
characterRouter.delete("/delete/:id", character_1.deleteCharacter);
exports.default = characterRouter;