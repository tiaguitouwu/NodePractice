import {Router,Request,Response,NextFunction} from 'express'
import Post from '../../Modules/todo'

const router = Router()

router.put('/api/todo/setCompleted',async(req:Request, res:Response, next:NextFunction)=>{
    
    const {id,completado} = req.body

    if(!id){ 
        const error = new Error('An id is require') as CustomError
        error.status = 400
        next(error)
    }
    
    let updatedTodo

    try {
        updatedTodo = await Post.findOneAndUpdate(
            {id: id},
            {$set:{completado}},
            {new:true}
        )
    } catch (error) {
        const err = new Error('An error has occurred') as CustomError
        err.status = 400
        next(error)
        
    }

    res.status(200).send(updatedTodo);
})

export {router as updateTodoRouter}