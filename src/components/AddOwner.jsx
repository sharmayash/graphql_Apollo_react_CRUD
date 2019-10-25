import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { AddOwnerMutation } from "../queries/queries";

function AddOwner() {
  const [addOwner] = useMutation(AddOwnerMutation);
  const [name, setname] = useState("");

  const submitForm = () => {
    addOwner({ variables: { name } });
  };
  return (
    <div>
      <h1>Add New Owner</h1>
      <form onSubmit={submitForm.bind(this)} method="post">
        <div className="field">
          <label>Owner Name</label>
          <input type="text" onChange={e => setname(e.target.value)} />
        </div>
        <button type="submit">Add New Owner</button>
      </form>
    </div>
  );
}

export default AddOwner;
