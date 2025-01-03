import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 className="mt-4">เกี่ยวกับเรา</h1>
      <p>แนะนำวิทยาลัยและข้อมูลที่น่าสนใจของสาขาเทคโนโลยีสารสนเทศ</p>

      {/* ส่วนของการ์ด */}
      <div className="container mt-5">
        <div className="row">
          {/* การ์ดที่ 1 */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <img
                src="https://www.lannapoly.ac.th/web/assets/btn_regis-01-B1F4zorK.png"
                className="card-img-top"
                alt="สมัครเรียน"
              />
              <div className="card-body">
                <h5 className="card-title">สมัครเรียน</h5>
                <p className="card-text">
                  ผู้สนใจสามารถสมัครเรียนผ่านช่องทางออนไลน์ได้ตลอด 24 ชั่วโมง
                </p>
                <a href="#" className="btn btn-primary">
                  รายละเอียดเพิ่มเติม
                </a>
              </div>
            </div>
          </div>

          {/* การ์ดที่ 2 */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <img
                src="https://www.lannapoly.ac.th/web/assets/btn_regis-02-BQjL6RoR.png"
                className="card-img-top"
                alt="ข้อมูลการสมัครเรียน"
              />
              <div className="card-body">
                <h5 className="card-title">ข้อมูลการสมัครเรียน</h5>
                <p className="card-text">
                  รายละเอียดเกี่ยวกับค่าใช้จ่ายและเอกสารในการสมัครเรียน
                </p>
                <a href="#" className="btn btn-primary">
                  รายละเอียดเพิ่มเติม
                </a>
              </div>
            </div>
          </div>

          {/* การ์ดที่ 3 */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <img
                src="https://www.lannapoly.ac.th/web/assets/btn_regis-03-Vsgm5LOZ.png"
                className="card-img-top"
                alt="LPS Mobile"
              />
              <div className="card-body">
                <h5 className="card-title">LPS Mobile</h5>
                <p className="card-text">
                  ระบบข้อมูลนักศึกษาเพื่อการตรวจสอบผ่านแอปพลิเคชัน
                </p>
                <a href="#" className="btn btn-primary">
                  รายละเอียดเพิ่มเติม
                </a>
              </div>
            </div>
          </div>

          {/* การ์ดที่ 4 */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <img
                src="https://www.lannapoly.ac.th/web/assets/btn_regis-04-CenO_ut2.png"
                className="card-img-top"
                alt="ข่าวสารโปลี"
              />
              <div className="card-body">
                <h5 className="card-title">ข่าวสารโปลี</h5>
                <p className="card-text">
                  ข้อมูลข่าวสารและการดำเนินงานภายในวิทยาลัย
                </p>
                <a href="#" className="btn btn-primary">
                  รายละเอียดเพิ่มเติม
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
};

export default About;
