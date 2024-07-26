import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    tittle:{
        type: String,
        required: true
    },
    content:{
        type:String,
        required:true
    },
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
});

const Post = mongoose.model('Post',postSchema)



export default Post;