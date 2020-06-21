import React from "react";

const styles = {
    navbar: {
      background: "yellow"
    }
  };

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={styles.navbar}>
      <span className="navbar-brand mb-0 h1">Employee Directory</span>
    </nav>
  );
}

export default Navbar;