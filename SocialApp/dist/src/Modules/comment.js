"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: true
    }
});
const Comment = mongoose_1.default.model('Comment', postSchema);
exports.default = Comment;
