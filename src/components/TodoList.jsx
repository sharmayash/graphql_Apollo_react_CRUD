import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getTodoQuery, DeleteTodoMutation } from "../queries/queries";

function TodoList() {
  const { loading, error, data } = useQuery(getTodoQuery);
  const [deleteTodo] = useMutation(DeleteTodoMutation);

  if (loading) return <p>Loading Todos...</p>;
  if (error) return <p>Error :(</p>;

  const delTodo = id => {
    deleteTodo({ variables: { id } });
    window.location.reload();
  };

  return (
    <div className="card">
      <header
        className="card-header"
        style={{ backgroundColor: "hsl(0, 0%, 94%)" }}
      >
        <p className="card-header-title">Todos</p>
      </header>
      <div className="card-content">
        <ul className="content">
          {data.todos.map(todo => {
            if (todo.text && todo.owner) {
              return (
                <li key={todo.id}>
                  {todo.text} - <b>{todo.owner.name}</b>
                  <button onClick={() => delTodo(todo.id)}>Delete</button>
                </li>
              );
            } else {
              return (
                <li key={todo.id}>
                  {todo.text} - <i> User Deleted</i>
                  <button onClick={() => delTodo(todo.id)}>Delete</button>
                </li>
              );
            }
          })}
        </ul>
      </div>

      <footer
        className="card-footer"
        style={{ backgroundColor: "hsl(0, 0%, 94%)" }}
      >
        <a href="#" className="card-footer-item">
          Add New Todo
        </a>
      </footer>
    </div>
  );
}

export default TodoList;
