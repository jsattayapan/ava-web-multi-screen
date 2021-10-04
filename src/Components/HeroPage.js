import './HeroPage.css'
import SamedDronePic from './../assets/samed-drone-pic.jpg'

export default function NavBar() {
  return (
    <div className="row HeroPage">
      <img className="landing-image" src={SamedDronePic} alt="Landing page" />
    <div className="sub-slogan">
        Jep's Beach
      </div>
    </div>
  );
}
