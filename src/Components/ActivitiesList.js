import Activity1 from './../assets/activities-1.JPG'
export default function ActivitiesList(){
  return(
    <div className="row">
      <Activity />
    <Activity />
  <Activity />
    </div>
  )
}

function Activity() {
  return (
    <div className="col-12 mb-3">
      <div className="row">
        <div className="col-12 col-lg-6">
          <img width="100%" src={Activity1} alt="Room" />
        </div>
        <div className="col-12 mt-3 col-lg-6 RoomSection">
          <h4>Jep's Restaurant</h4>
        <p>ร้านอาหารเก่าแก่และมีชื่อเสียงบนเกาะเสม็ด จังหวัดระยองคงหนีไม่พ้น ร้านเจี๊ยบ เรสเตอรองต์ (Jep’s Restaurant) หรือบ้างก็เรียกกันว่า ร้านลุงเจี๊ยบ ใครที่อยากนั่งร้านที่บรรยากาศดีๆ มีความเป็นธรรมชาติ อาหารอร่อย มักจะนึกถึงร้านเจี๊ยบเป็นอันดับแรก ร้านอยู่ริมหาดช่วงต่อจากหาดทรายแก้วไปยังอ่าวไผ่ </p>
      <p>ลักษณะโต๊ะนั่งเป็นแบบริมทะเล มีผู้คนไม่พลุกพล่านมากนัก รับลม ชมทะเลสวย น้ำใสๆ แบบใกล้ชิดติดขอบ และในช่วงกลางวันมีร่มเงาไม้ใหญ่ ช่วยบังแดด ทำให้ไม่ร้อนมาก ร้านเปิดตั้งแต่ตอนเช้าถึงค่ำ อาหารมีให้เลือกหลากหลาย มีทั้งเค้กและเบเกอรี่อร่อยๆ ไว้ตบท้ายของคาวด้วย  ต้นไม้ที่ร้านยังถูกตกแต่งประดับประดาไปด้วยโคมไฟดวงดาวหลากสีสัน เพิ่มความสวยงามได้ดีทีเดียว</p>
        </div>
      </div>
    </div>
  )
}
