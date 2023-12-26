"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const character_1 = __importDefault(require("./routes/character"));
dotenv_1.default.config();
if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
}
mongoose_1.default
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Thoth connection established"))
    .catch((err) => console.log("Error connecting to MongoDB: ", err));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use("/character", character_1.default);
