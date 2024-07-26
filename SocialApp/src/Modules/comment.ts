import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    username:{
        type: String,
        required: false
    },
    content:{
        type:String,
        required:true
    }
});

const Comment = mongoose.model('Comment',postSchema)



export default Comment;