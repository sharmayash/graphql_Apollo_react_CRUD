import React from "react";

export default function Nav() {
  return (
    <nav className="navbar is-dark" role="navigation">
      <div
        className="navbar-brand"
        style={{
          flex: "1",
          justifyContent: "center"
        }}
      >
        <a className="navbar-item title" href="/">
          Todo App
        </a>
      </div>
    </nav>
  );
}
