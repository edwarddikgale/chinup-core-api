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
    date:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Posts', PostSchema);