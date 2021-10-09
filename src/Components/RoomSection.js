import Img from './../assets/ava-double.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FaUserAlt, FaShower } from 'react-icons/fa'
import { BsArrowsFullscreen , BsWifi} from 'react-icons/bs'
import { GiCoffeeCup, GiHanger } from 'react-icons/gi'
import './RoomSection.css'
import React from 'react'


export default class RoomSection extends React.Component{
  openBookingNewTab = () => {
    window.open('https://book-directonline.com/properties/avatararesortdirect')
  }
  render(){
    return (
      <div className="row justify-content-center RoomSection my-5">
        <div className="col-12 col-md-5">
          {/* <img src ={Img} alt="Room" width="100%"  /> */}
          <Carousel showStatus={false} showThumbs={false} infiniteLoop={true}>
                <div>
                  <img width="100%" src={Img} alt="Room" />
              </div>
            </Carousel>
        </div>
        <div className="col-12 col-md-7">
          <h4 className="mt-3">{this.props.info.title}</h4>
        <p className="px-4">{this.props.info.subtitle}</p>
        <ul className="iconsList">
          <li><FaUserAlt /> x 2</li>
          <li><BsArrowsFullscreen /> 32 m&#178;</li>
          <li><BsWifi /></li>
          <li><GiCoffeeCup /></li>
        <li><FaShower /><span className="tiny-text">ITALIAN SHOWER</span></li>
      <li><GiHanger /><span className="tiny-text">WALK-IN CLOSET</span></li>
        </ul>
        <div className="row">
          <div className="col-12 col-md-6">
            <h5>Stay with Breakfast</h5>
            <span>Includes: </span>
          <ul className="includeList">
              <li>Breakfast</li>
              <li>Welcome drinks</li>
              <li>Schedual boat (return trip)</li>
            </ul>
          </div>
          <div className="col-12 col-md-6 text-right">
            <h5 className="check-availability-btn" onClick={this.openBookingNewTab}><u>CHECK AVAILABILITY</u></h5>
          </div>
        </div>

        <hr  style={{
             height: 5
         }} />
        </div>
      </div>
    )
  }
}
