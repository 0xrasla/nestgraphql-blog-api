import { useState } from "react";
import { SingleTodo } from "./components/SingleTodo";
import { TodoList } from "./components/TodoList";
import "./styles/main.css";

const todo: React.ReactElement[] = [];

function App() {
  const [task, setTask] = useState("");

  const handleClick: handleClick = (text: String) => {
    todo.push(<SingleTodo todo={{ text: text, completed: false }} />);
  };

  return (
    <div className="App">
      <h1>Make a best todo!</h1>
      <form>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (task !== "") handleClick(task);
            setTask("");
          }}
        >
          Add
        </button>
      </form>
      <TodoList todos={todo} />
    </div>
  );
}

export default App;
