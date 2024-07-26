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
exports.showTodoRouter = void 0;
const express_1 = require("express");
const todo_1 = __importDefault(require("../../Modules/todo"));
const router = (0, express_1.Router)();
exports.showTodoRouter = router;
router.post('/api/todo/show/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id) {
        const allTodo = yield todo_1.default.find();
        return res.status(200).send(allTodo);
    }
    const showPost = yield todo_1.default.findOne({ _id: id });
    res.status(200).send(showPost);
}));
router.post('/api/todo/show/getMaxId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const showMaxTodoId = yield todo_1.default.find({}, 'id').sort({ id: -1 }).limit(1);
    res.status(200).send(showMaxTodoId);
}));
