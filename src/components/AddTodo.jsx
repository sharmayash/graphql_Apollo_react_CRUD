import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getOwnerQuery, AddTodoMutation } from "../queries/queries";

function AddTodo() {
  const { loading, error, data } = useQuery(getOwnerQuery);
  const [addTodo] = useMutation(AddTodoMutation);

  const [text, setText] = useState("");
  const [ownerID, setOwnerId] = useState("");

  if (loading) return <p>Loading Owners ...</p>;
  if (error) return <p>Error :(</p>;

  const submitForm = () => {
    addTodo({ variables: { text, ownerId: ownerID } });
  };

  return (
    <form onSubmit={submitForm.bind(this)} id="add-book">
      <div className="field">
        <label>Todo Text</label>
        <input type="text" onChange={e => setText(e.target.value)} />
      </div>
      <div className="field">
        <label>Author</label>
        <select onChange={e => setOwnerId(e.target.value)}>
          <option value="">Select Owner</option>
          {data.owners.map(owner => {
            return (
              <option value={owner.id} key={owner.id}>
                {owner.name}
              </option>
            );
          })}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddTodo;
