import { gql } from "apollo-boost";

const getOwnerQuery = gql`
  {
    owners {
      id
      name
    }
  }
`;

const getTodoQuery = gql`
  {
    todos {
      id
      text
      owner {
        name
      }
    }
  }
`;

const AddTodoMutation = gql`
  mutation addTodo($text: String!, $ownerId: ID!) {
    addTodo(text: $text, ownerId: $ownerId) {
      text
      id
    }
  }
`;

const DeleteTodoMutation = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      text
    }
  }
`;

const AddOwnerMutation = gql`
  mutation addOwner($name: String!) {
    addOwner(name: $name) {
      name
      id
    }
  }
`;

const DeleteOwnerMutation = gql`
  mutation deleteOwner($id: ID!) {
    deleteOwner(id: $id) {
      name
    }
  }
`;

export {
  getOwnerQuery,
  getTodoQuery,
  AddTodoMutation,
  DeleteTodoMutation,
  AddOwnerMutation,
  DeleteOwnerMutation
};
