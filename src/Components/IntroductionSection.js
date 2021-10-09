import './IntroductionSection.css'
import RoomOverview from './../assets/restaurant1.jpg'
import RoomOverview2 from './../assets/room-overview-2.jpg'
import RoomOverview3 from './../assets/room-cover.jpg'
import RoomOverview4 from './../assets/introduction-image.jpg'
import Reception from './../assets/reception.jpg'
import { Carousel } from 'react-responsive-carousel';

export default function IntroductionSection(props) {
  return(
    <div className="row my-5 justify-content-center">
      <div className="col-10 col-lg-5">
          <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={1000}>
                <div>
                  <img src={RoomOverview2} width='100%' />
                </div>
                <div>
                  <img src={RoomOverview3} width='100%' />
                </div>
                <div>
                  <img src={Reception} width='100%' />
                </div>
                <div>
                  <img src={RoomOverview4} width='100%' />
                </div>
            </Carousel>
      </div>
      <div className="col-10 mt-4 col-lg-5 text-center">
        <h3 className="header-1">{props.info.introductionSection.title}</h3>
      <p className="text-1">{props.info.introductionSection.text}</p>
      </div>
    </div>
  )
}
