import express from 'express'
import {Request,Response,NextFunction} from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import cors from 'cors'

//CONFIG PARA CORRER SERVER
dotenv.config();
const app = express()
app.use(cors({ origin:"*", optionsSuccessStatus:200 }))
app.use(express.urlencoded({ extended:false }))
app.use(express.json())


//ROUTERS
import{
    deletedTodoRouter,
    newTodoRouter,
    showTodoRouter,
    updateTodoRouter
} from './src/Routers'

//Todo
app.use(newTodoRouter)
app.use(deletedTodoRouter)
app.use(showTodoRouter)
app.use(updateTodoRouter)



app.all('*',(req:Request, res:Response,next:NextFunction) =>{
    const err = new Error("Not found") as CustomError
    res.status(400)
    next(err)
})



//PROCESA ERRORES DE MANERA GLOBAL
declare global{
    interface CustomError extends Error{
        status?:number
    }
}
app.use((error:CustomError,req:Request,res:Response,next:NextFunction)=>{
    if(error.status){
        return res.status(error.status).json({message:error.message})
    }
    res.status(500).json({message:'Something, went wrong :('})
})

//CONEXIÓN A BASE DE DATOS
const start = async ()=>{
    if(!process.env.MONGO_URI){
        throw new Error('Connection not set')
    }
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("HAY SEÑAL!!")
    } catch (error) {
        console.log(error)
    }
}

start()

app.listen(8080,()=>{
    console.log("Connected at 8080")
})



