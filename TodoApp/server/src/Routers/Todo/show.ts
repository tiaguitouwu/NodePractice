import {Router,Request,Response,NextFunction} from 'express'
import Post from '../../Modules/todo'

const router = Router()

router.post('/api/todo/show/',async(req:Request, res:Response, next:NextFunction)=>{
    const { id } = req.body
    

    if(!id){ 
        const allTodo = await Post.find()
        
        return res.status(200).send(allTodo);
    }
    
    const showPost = await Post.findOne({_id:id });

    res.status(200).send(showPost);
})

router.post('/api/todo/show/getMaxId',async(req:Request, res:Response, next:NextFunction)=>{
    
    const showMaxTodoId = await Post.find({},'id').sort({id : -1}).limit(1)

    res.status(200).send(showMaxTodoId);
})

export {router as showTodoRouter}