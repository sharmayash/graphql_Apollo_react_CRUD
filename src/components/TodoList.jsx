import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getTodoQuery } from "../queries/queries";

function TodoList() {
  const { loading, error, data } = useQuery(getTodoQuery);

  if (loading) return <p>Loading Todos...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {data.todos.map(todo => {
          if (todo.text && todo.owner) {
            return (
              <li key={todo.id}>
                {todo.text} - <b>{todo.owner.name}</b>
              </li>
            );
          } else {
            return (
              <li key={todo.id}>
                {todo.text} - <i> User Deleted</i>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}

export default TodoList;
