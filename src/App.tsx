import "./App.css";
import { useState } from "react";
import { SingleTodo } from "./components/SingleTodo";
import { TodoList } from "./components/TodoList";

const todo: React.ReactElement[] = [];

function App() {
  const [task, setTask] = useState("");

  const handleClick: handleClick = (text: String) => {
    todo.push(<SingleTodo todo={{ text: text, completed: true }} />);
  };

  return (
    <div className="App">
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
      <div>
        <TodoList todos={todo} />
      </div>
    </div>
  );
}

export default App;
