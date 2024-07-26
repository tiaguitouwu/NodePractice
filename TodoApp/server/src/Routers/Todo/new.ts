import {Router,Request,Response,NextFunction} from 'express'
import Post from '../../Modules/todo'

const router =  Router() 

router.post('/api/todo/new', async(req:Request,res:Response,next:NextFunction)=>{
    const { id,title } = req.body

    if(!title || !id){
        const error = new Error('Title and id is required') as CustomError
        error.status = 400
        return next(error)
    }

    const newTodo = new Post({
        id,
        title
    })

    await newTodo.save()

    res.status(201).send(newTodo)
})

export {router as newTodoRouter}