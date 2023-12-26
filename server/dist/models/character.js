"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const characterSchema = new mongoose_1.Schema({
    Title: { type: String, required: true },
    Name: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)("Character", characterSchema);
