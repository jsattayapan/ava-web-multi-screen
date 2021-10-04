import RestaurantCover2 from './../assets/restaurant-cover2.jpg'
import food1 from './../assets/food1.jpg'
import food2 from './../assets/food2.jpg'
import food3 from './../assets/food3.jpg'
import food4 from './../assets/food4.jpg'
import food5 from './../assets/food5.jpg'
import food6 from './../assets/food6.jpg'
import food7 from './../assets/food7.JPG'
import food8 from './../assets/food8.jpg'
export default function RestaurantBody(){
  return (
    <div className="row my-sm-5 mt-3 m-lg-5">
      <div className="col-12 col-lg-6">
        <img width="100%" src={RestaurantCover2} alt="Room" />
      </div>
      <div className="col-12 mt-3 col-lg-6 RoomSection">
        <h4>Jep's Restaurant</h4>
      <p>ร้านอาหารเก่าแก่และมีชื่อเสียงบนเกาะเสม็ด จังหวัดระยองคงหนีไม่พ้น ร้านเจี๊ยบ เรสเตอรองต์ (Jep’s Restaurant) หรือบ้างก็เรียกกันว่า ร้านลุงเจี๊ยบ ใครที่อยากนั่งร้านที่บรรยากาศดีๆ มีความเป็นธรรมชาติ อาหารอร่อย มักจะนึกถึงร้านเจี๊ยบเป็นอันดับแรก ร้านอยู่ริมหาดช่วงต่อจากหาดทรายแก้วไปยังอ่าวไผ่ </p>
    <p>ลักษณะโต๊ะนั่งเป็นแบบริมทะเล มีผู้คนไม่พลุกพล่านมากนัก รับลม ชมทะเลสวย น้ำใสๆ แบบใกล้ชิดติดขอบ และในช่วงกลางวันมีร่มเงาไม้ใหญ่ ช่วยบังแดด ทำให้ไม่ร้อนมาก ร้านเปิดตั้งแต่ตอนเช้าถึงค่ำ อาหารมีให้เลือกหลากหลาย มีทั้งเค้กและเบเกอรี่อร่อยๆ ไว้ตบท้ายของคาวด้วย  ต้นไม้ที่ร้านยังถูกตกแต่งประดับประดาไปด้วยโคมไฟดวงดาวหลากสีสัน เพิ่มความสวยงามได้ดีทีเดียว</p>
      </div>
      <div className="col-12 my-3">
        <h4>Signature Menus</h4>
        <p>เมนูความอร่อยยอดนิยมที่เราภูมใจเสนอ</p>
      </div>
      <div className="col-12 mb-5">
        <FoodImageList />
      </div>
    </div>
  )
}

function FoodImageList(){
  return(
     <div className="row justify-content-around">
      <Image image={food1} />
    <Image image={food2} />
  <Image image={food3} />
<Image image={food4} />
<Image image={food5} />
<Image image={food6} />
<Image image={food7} />
<Image image={food8} />
    </div>
  )
}

function Image(props){
  return(
    <div className="col-6 col-lg-3 mt-3">
      <img width="100%" src={props.image} alt="Room" />
    </div>
  )
}
