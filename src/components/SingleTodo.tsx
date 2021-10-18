import React from "react";

interface Props {
  todo: Todo;
}

export const SingleTodo: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className="todo">
        <p>{props.todo.text}</p>
        <p>{props.todo.completed ? "Ok" : "Not Ok"}</p>
      </div>
    </>
  );
};
