import './HeroPage.css'
import SamedDronePic from './../assets/samed-drone-pic.jpg'
import avataraLogo from './../assets/avatara-logo.png'

export default function NavBar(props) {
  const { homePage } = props.info
  return (
    <div className="row HeroPage">
      <div className="col-12 text-center">
        <img id="avatara-logo" src={avataraLogo} />
      </div>
      <div className="col-12 text-center main-slogan">
        Vacation Time’s a-Calling!
      </div>
      <div className="sub-slogan">
          {homePage.subtitle}
      </div>
    </div>
  );
}
