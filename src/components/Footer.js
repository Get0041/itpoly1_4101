import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 สาขาเทคโนโลยีสารสนเทศ - วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    marginTop: "20px",
  },
};

export default Footer;
