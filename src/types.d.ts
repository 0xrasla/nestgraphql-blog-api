interface Todo {
  text: String;
  completed: Boolean;
}

interface TodoList {
  todo: SingleTodo;
}

type handleClick = (text: string) => void;
