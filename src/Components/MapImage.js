import mapImage from './../assets/map.png'
import ImageBackground from './ImageBackground'
import './MapImage.css'
export default function MapImage(){
  return (
    <ImageBackground image={mapImage}>
      <div className="location-box mx-auto mr-md-5">
        <h4>Avatara Resort</h4>
      <p>106 M4, Koh Samed, Phe, Mueng, Rayong 21160</p>
    <b>tel. +66-89-091-1114</b>
  <a className="btn btn-primary" href='https://www.google.com/maps/place/Avatara+Resort/@12.5658253,101.4579097,17z/data=!3m1!4b1!4m8!3m7!1s0x31030766e5104903:0xcb2ad3af4e9ab292!5m2!4m1!1i2!8m2!3d12.5658253!4d101.4600984' target="_blank">
      Google Map
    </a>
      </div>

    </ImageBackground>
  )
}
