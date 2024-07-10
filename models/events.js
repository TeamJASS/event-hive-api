import { Schema, model, Types } from "mongoose";
import { toJSON } from '@reis/mongoose-to-json'

const eventSchema = new Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String },
    location: { type: String },
    date: { type: String,required:true},
    tags: [{ type: String }],
    type: { type: String, enum: ['online', 'offline'] },
    image: { type: String, required: true },
    // createdBy:{type:Types.ObjectId,ref:"User" },
}, {
    timestamps: true
});





eventSchema.plugin(toJSON);

export const eventModel = model('Event', eventSchema);