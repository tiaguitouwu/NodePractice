import {Router,Request,Response,NextFunction} from 'express'
import Comment from '../../Modules/comment'
import Post from '../../Modules/post'

const router = Router()

router.delete('/api/comment/:commentId/delete:postId',async(req:Request, res:Response, next:NextFunction)=>{
    const {commentId,postId} = req.params
    
    if(!commentId || !postId){ 
        const error = new Error('Post Id an Comment Id are both require') as CustomError
        error.status = 400
        next(error)
    }
    
    try {
        await Comment.findOneAndDelete({_id:commentId })
    } catch (error) {
        const err = new Error('An error has occurred') as CustomError
        err.status = 400
        next(error)
        
    }
    await Post.findOneAndUpdate(
        {_id:postId},
        {$pull:{ comments: commentId}}
    )
    res.status(200).json({success:true});

})

export {router as deleteCommentRouter}