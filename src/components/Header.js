import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>สาขาเทคโนโลยีสารสนเทศ</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  },
  title: {
    fontSize: "1.5rem",
  },
};

export default Header;
