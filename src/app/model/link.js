import ModelConstructor from '../model/contructor.js';
import mongoose from 'mongoose';

const linkSchemaDefinition = {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title:String,
    originalUrl: String,
    shortUrl: String,
    thumnalUrl : String
};

const Link = new ModelConstructor('Link', linkSchemaDefinition);

export default Link.getModel();
