import React from "react";
import ApolloClient from "apollo-boost";
import TodoList from "./components/TodoList";
import { ApolloProvider } from "@apollo/react-hooks";
import AddTodo from "./components/AddTodo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <TodoList />
    <AddTodo />
  </ApolloProvider>
);

export default App;
