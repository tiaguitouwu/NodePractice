import {Router,Request,Response,NextFunction} from 'express'
import Post from '../../Modules/post'

const router = Router()

router.delete('/api/post/delete:id',async(req:Request, res:Response, next:NextFunction)=>{
    const {id} = req.params
    
    if(!id){ 
        const error = new Error('An id is require') as CustomError
        error.status = 400
        next(error)
    }
    
    let deletedPost

    try {
        deletedPost = await Post.findOneAndDelete({_id:id })
    } catch (error) {
        const err = new Error('An error has occurred') as CustomError
        err.status = 400
        next(error)
        
    }

    res.status(200).json({success:true});

})

export {router as deletedPostRouter}