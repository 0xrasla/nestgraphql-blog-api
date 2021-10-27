import React, { useState } from "react";

interface Props {
  todo: Todo;
}

export const SingleTodo: React.FC<Props> = (props: Props) => {
  const [comp, setComp] = useState(props.todo.completed);

  return (
    <span className="todo">
      <p className={props.todo.completed ? "strike" : "normal"}>
        {props.todo.text}
      </p>
      <p>
        <input
          type="checkbox"
          name="done"
          checked={comp}
          onChange={(e) => {
            setComp(!comp);
            props.todo.completed = !props.todo.completed;
          }}
        />
      </p>
    </span>
  );
};
