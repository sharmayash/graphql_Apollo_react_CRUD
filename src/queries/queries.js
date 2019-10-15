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

export { getOwnerQuery, getTodoQuery, AddTodoMutation };
