import React from 'react';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="mt-4">ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h1>
      <p className="lead">สำรวจข้อมูลเกี่ยวกับแผนกและกิจกรรมของเราได้ที่นี่!</p>
      {/* เพิ่มรูปภาพแทนปุ่ม */}
      <div className="mt-3">
        <img
          src="https://www.lannapoly.ac.th/web/gallery/20241121-094109.jpg" // URL ของรูปภาพ
          alt="เกี่ยวกับเรา"
          className="img-fluid rounded" // ใช้ Bootstrap จัดการรูปภาพ
        />
      </div>
    </div>
  );
};

export default Home;
