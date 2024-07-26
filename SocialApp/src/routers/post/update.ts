import {Router,Request,Response,NextFunction} from 'express'
import Post from '../../Modules/post'

const router = Router()

router.post('/api/post/update:id',async(req:Request, res:Response, next:NextFunction)=>{
    const {id} = req.params
    
    const {content, tittle} = req.body

    if(!id){ 
        const error = new Error('An id is require') as CustomError
        error.status = 400
        next(error)
    }
    
    let updatedPost

    try {
        updatedPost = await Post.findOneAndUpdate(
            {_id: id},
            {$set:{tittle,content}},
            {new:true}
        )
    } catch (error) {
        const err = new Error('An error has occurred') as CustomError
        err.status = 400
        next(error)
        
    }

    res.status(200).send(updatedPost);
})

export {router as updatePostRouter}