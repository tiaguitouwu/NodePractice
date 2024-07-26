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
exports.newTodoRouter = void 0;
const express_1 = require("express");
const todo_1 = __importDefault(require("../../Modules/todo"));
const router = (0, express_1.Router)();
exports.newTodoRouter = router;
router.post('/api/todo/new', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title } = req.body;
    if (!title || !id) {
        const error = new Error('Title and id is required');
        error.status = 400;
        return next(error);
    }
    const newTodo = new todo_1.default({
        id,
        title
    });
    yield newTodo.save();
    res.status(201).send(newTodo);
}));
