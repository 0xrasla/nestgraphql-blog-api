interface Todo {
  text: String;
  completed: boolean;
}

interface TodoList {
  todo: SingleTodo;
}

type handleClick = (text: string) => void;
