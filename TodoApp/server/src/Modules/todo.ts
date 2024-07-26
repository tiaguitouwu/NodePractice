import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    title:{
        type:String,
        required:true
    },
    completado:{
        type:Boolean,
        default:false,
        required:true
    }
});

const Todo = mongoose.model('Todo',todoSchema)



export default Todo;