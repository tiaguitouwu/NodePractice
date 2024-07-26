import {Router,Request,Response,NextFunction} from 'express'
import Post from '../../Modules/post'

const router = Router()

router.get('/api/post/show/:id',async(req:Request, res:Response, next:NextFunction)=>{
    const {id} = req.params

    if(!id){ 
        const allPost = await Post.find()
        res.status(200).send(allPost)
        return;
    }
    
    const showPost = await Post.findOne({_id:id }).populate('comments')

    res.status(200).send(showPost);
})

export {router as showPostRouter}