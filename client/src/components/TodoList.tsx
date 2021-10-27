import React, { ReactElement } from "react";

interface Props {
  todos: Array<ReactElement>;
}

export const TodoList: React.FC<Props> = (props: Props) => {
  return (
    <span className="todos">
      {props.todos.map((e, i) => {
        return <div key={i}>{e}</div>;
      })}
    </span>
  );
};
