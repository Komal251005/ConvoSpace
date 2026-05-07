import mongoose, { Schema } from "mongoose";

const meetingSchema = new Schema(
    {
        user_id: {type:String},
        meetingCode: {type : String, required: true},
        date: {type:Date , default: Date.now , required:true}
    }
)
const Meeting = mongoose.model("Meeting", meetingSchema);

export {Meeting};
//to export only one thing we use export default 
// but to export multiple things at a same time we use export