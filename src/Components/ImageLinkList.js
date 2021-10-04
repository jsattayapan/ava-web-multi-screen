import AvaDouble from './../assets/ava-double.png'
import RestaurantCover from './../assets/restaurant-cover.jpg'
import SupCover from './../assets/sup-cover.jpg'
import './ImageLinkList.css'
import { faHome, faUtensils, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useHistory} from 'react-router-dom';
export default function ImageLinkList(){
  return (
    <div className="row">
      <MenuContainer link="/rooms" title="Rooms" image={AvaDouble} description="Three room types" icon={faHome} />
    <MenuContainer link="/restaurant" title="Restaurant" image={RestaurantCover} description="Jep's Restaurant by the beach" icon={faUtensils} />
  <MenuContainer link="/activities" title="Activities" image={SupCover} description="Explore Samed Island" icon={faTree} />
    </div>
  )
}

function MenuContainer(props){
  const history = useHistory()
  const onClick = (link) => {
    history.push(link)
    window.scrollTo(0, 0)
  }
  return (
    <div onClick={
        () => onClick(props.link)
      } className="col-12 col-md-4 menu-container" style={{backgroundImage: `url(${props.image})`}}>
      {/* <img className="menu-image" src={AvaDouble} alt="View Rooms" /> */}
    <div className="row p-5" >
      <div className="col-12 text-center">
        <h4>{props.title}</h4>
      </div>
      <div className="col-12 mt-3">
        <div className="icon mx-auto text-center">
          <FontAwesomeIcon className="mt-4" icon={props.icon} size="3x" color="white" />
        </div>
      </div>
      <div className="col-12 mt-3 text-center">
        <p>
          {props.description}
        </p>
      </div>
    </div>
    </div>
  )
}
