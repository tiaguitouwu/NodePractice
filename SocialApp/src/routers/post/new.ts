import {Router,Request,Response,NextFunction} from 'express'
import Post from '../../Modules/post'

const router =  Router() 

router.post('/api/post/new', async(req:Request,res:Response,next:NextFunction)=>{
    const { tittle,content } = req.body

    if(!tittle || !content){
        const error = new Error('Title and Content are required') as CustomError
        error.status = 400
        return next(error)
    }

    const newPost = new Post({
        tittle,
        content
    })

    await newPost.save()

    res.status(201).send(newPost)
})

export {router as newPostRouter}