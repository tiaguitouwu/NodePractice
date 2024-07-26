import {Router,Request,Response,NextFunction} from 'express'
import Todo from '../../Modules/todo'

const router = Router()

router.delete('/api/todo/delete',async(req:Request, res:Response, next:NextFunction)=>{
    const { id } = req.body

    if(!id){ 
        const error = new Error('An id is require') as CustomError
        error.status = 400
        next(error)
    }
    
    let deletedTodo

    
    deletedTodo = await Todo.findOneAndDelete({id:id })
    

    res.status(200).send(deletedTodo);

})

export {router as deletedTodoRouter}