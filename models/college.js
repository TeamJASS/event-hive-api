import { model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const collegeSchema = new Schema(
    {
        name:{ type: String },
        description:{ type: String },
        banner: { type: String, required: true },
        images: [{ type: String }],
        location:{ type: String, required: true },
        rating:{ type: String },
    },{
        timestamps: true,
    });

export const collegeModel = model("College", collegeSchema);