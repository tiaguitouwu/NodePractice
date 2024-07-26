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
exports.deleteCommentRouter = void 0;
const express_1 = require("express");
const comment_1 = __importDefault(require("../../Modules/comment"));
const post_1 = __importDefault(require("../../Modules/post"));
const router = (0, express_1.Router)();
exports.deleteCommentRouter = router;
router.delete('/api/comment/:commentId/delete:postId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { commentId, postId } = req.params;
    if (!commentId || !postId) {
        const error = new Error('Post Id an Comment Id are both require');
        error.status = 400;
        next(error);
    }
    try {
        yield comment_1.default.findOneAndDelete({ _id: commentId });
    }
    catch (error) {
        const err = new Error('An error has occurred');
        err.status = 400;
        next(error);
    }
    yield post_1.default.findOneAndUpdate({ _id: postId }, { $pull: { comments: commentId } });
    res.status(200).json({ success: true });
}));
