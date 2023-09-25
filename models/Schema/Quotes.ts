import mongoose from 'mongoose';
import {IQuote} from '../IQuote';

const Schema  = mongoose.Schema;
const PostSchema = new Schema<IQuote>({
    title:{
        type: String,
        trim: true,
        required: true
    },
    body:{
        type: String,
        trim: true,
        required: true 
    },
    poster:{
        type: String,
        trim: true,
        required: false 
    },
    author: {
        type: String,
        trim: true,
        required: false 
    },
    likeCount:{
        type: Number,
        trim: true,
        required: false 
    },
    dislikeCount:{
        type: Number,
        trim: true,
        required: false 
    },
    tags: {
        type: [String], 
        required: false 
    },
    isPrivate: {
        type: Boolean,
        required: false,
        default: false
    },
    date:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Posts', PostSchema);