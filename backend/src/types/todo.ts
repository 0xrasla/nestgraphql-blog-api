import { Document } from "mongoose";

export interface IToDo extends Document {
    name : string,
    description : string,
    done : boolean
}