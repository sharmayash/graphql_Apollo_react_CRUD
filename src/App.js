import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Nav from "./components/Nav";
import Owner from "./components/Owner";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import AddOwner from "./components/AddOwner";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql/"
});

const App = () => (
  <ApolloProvider client={client}>
    <Nav />
    <div className="container is-fluid">
      <div className="columns">
        <div className="column">
          <TodoList />
        </div>
        <div className="column">
          <Owner />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <AddTodo />
        </div>
        <div className="column">
          <AddOwner />
        </div>
      </div>
    </div>
  </ApolloProvider>
);

export default App;
