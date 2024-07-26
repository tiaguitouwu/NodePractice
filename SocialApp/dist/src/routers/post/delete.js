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
exports.deletedPostRouter = void 0;
const express_1 = require("express");
const post_1 = __importDefault(require("../../Modules/post"));
const router = (0, express_1.Router)();
exports.deletedPostRouter = router;
router.delete('/api/post/delete:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        const error = new Error('An id is require');
        error.status = 400;
        next(error);
    }
    let deletedPost;
    try {
        deletedPost = yield post_1.default.findOneAndDelete({ _id: id });
    }
    catch (error) {
        const err = new Error('An error has occurred');
        err.status = 400;
        next(error);
    }
    res.status(200).json({ success: true });
}));
