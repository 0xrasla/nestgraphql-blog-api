import { IToDo } from "../types/todo";
import { Schema, model } from "mongoose";

const TodoModel: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IToDo>("Todo", TodoModel);
