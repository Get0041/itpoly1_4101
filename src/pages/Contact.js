import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1>ติดต่อเรา</h1>
      <p>ที่อยู่: 2 ถนนสุขเกษม ต.ป่าตัน อ.เมือง จ.เชียงใหม่ 50300</p>
      <p>โทรศัพท์: 053 213 061</p>
      <p>อีเมล: lannapoly@lannapoly.ac.th</p>
      
      {/* ฝังแผนที่ Google Maps */}
      <div style={styles.mapContainer}>
        <iframe
          title="Google Maps"
          src="https://maps.app.goo.gl/oxFMfnPk8qgT4H5L6"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  mapContainer: {
    marginTop: "20px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Contact;
