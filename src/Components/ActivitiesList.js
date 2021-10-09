import Activity1 from './../assets/activities-1.JPG'
import supBoard from './../assets/sub-board.jpg'
import motobike from './../assets/motorbike-2.jpg'
export default function ActivitiesList(props){
  return(
    <div className="row">
      <Activity img={Activity1} title='เรือคายัก' text={''} />
      <Activity img={supBoard} title={props.info.activities.paddleBoard.title} text={props.info.activities.paddleBoard.text} />
      <Activity img={motobike} title='' text={''} />
    </div>
  )
}

function Activity(props) {
  return (
    <div className="col-12 mb-3">
      <div className="row">
        <div className="col-12 col-lg-6">
          <img width="100%" src={props.img} alt="Room" />
        </div>
        <div className="col-12 mt-3 col-lg-6 RoomSection">
          <h4>{props.title}</h4>
        <p>{props.text}</p>

        </div>
      </div>
    </div>
  )
}
