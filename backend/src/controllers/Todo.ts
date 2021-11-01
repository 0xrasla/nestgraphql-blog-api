import { Express, Request, Response } from "express";
import { IToDo } from "../types/todo";
import ToDo from "../models/ToDo";

const getTodos = async (req: Request, res: Response): Promise<{}> => {
  try {
    const todos: IToDo[] = await ToDo.find();
    return res.status(200).json({
      todos: todos,
      ok: true,
    });
  } catch (e: any) {
    return res.status(400).json({
      ok: false,
    });
  }
};
