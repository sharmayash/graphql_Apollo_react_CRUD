import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getOwnerQuery, DeleteOwnerMutation } from "../queries/queries";

function Owner() {
  const { loading, error, data } = useQuery(getOwnerQuery);
  const [deleteOwner] = useMutation(DeleteOwnerMutation);

  if (loading) return <p>Loading Owners ...</p>;
  if (error) return <p>Error :(</p>;

  const delOwner = id => {
    deleteOwner({ variables: { id } });
    window.location.reload();
  };

  return (
    <div className="card">
      <header
        className="card-header"
        style={{ backgroundColor: "hsl(0, 0%, 94%)" }}
      >
        <p className="card-header-title">Owners Available</p>
      </header>
      <div className="card-content">
        <ul className="content">
          {data.owners.map(owner => {
            return (
              <li key={owner.id}>
                {owner.name}
                <button onClick={() => delOwner(owner.id)}>Delete</button>
              </li>
            );
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

export default Owner;
