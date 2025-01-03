import React, { useState } from "react";

const Courses = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">หลักสูตรของเรา</h1>
      <div className="row mt-4">
        {/* ซ้าย: ปวช. */}
        <div className="col-md-6 text-center">
          <h3>ปวช.</h3>
          <ul className="list-group">
            <li
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect("https://www.lannapoly.ac.th/web/assets/img-au-CT-pQF90.jpeg")}
              style={{ cursor: "pointer" }}
            >
              สาขางานยานยนต์ (Au)
            </li>
            <li
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect("https://www.lannapoly.ac.th/web/assets/img-mk-COKuSQbq.jpeg")}
              style={{ cursor: "pointer" }}
            >
              สาขาการตลาด (Mk)
            </li>
          </ul>
        </div>

        {/* ขวา: ปวส. */}
        <div className="col-md-6 text-center">
          <h3>ปวส.</h3>
          <ul className="list-group">
            <li
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect("https://www.lannapoly.ac.th/web/assets/img-it-UTNwL-IP.jpeg")}
              style={{ cursor: "pointer" }}
            >
              สาขาเทคโนโลยีสารสนเทศ (It)
            </li>
            <li
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect("https://www.lannapoly.ac.th/web/assets/img-ac-Mi4t12n2.jpeg")}
              style={{ cursor: "pointer" }}
            >
              สาขาการบัญชี (Ac)
            </li>
          </ul>
        </div>
      </div>

      {/* ส่วนแสดงภาพ */}
      {selectedImage && (
        <div className="text-center mt-4">
          <h4>ภาพตัวอย่างหลักสูตร</h4>
          <img
            src={selectedImage}
            alt="Selected Course"
            className="img-fluid rounded"
            style={{ maxHeight: "300px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Courses;
