import NavBar from './Components/NavBar'
import HeroPage from './Components/HeroPage'
import IntroductionSection from './Components/IntroductionSection'
import ImageLinkList from './Components/ImageLinkList'
import Footer from './Components/Footer'
import ImageBackground from './Components/ImageBackground'
import AvaPilow from './assets/ava-pilow.jpg'
import RoomSection from './Components/RoomSection'
import Col12Logo from './Components/Col12Logo'
import Transportation from './Components/Transportation'
import MapImage from './Components/MapImage'
import OfferList from './Components/OfferList'
import ActivitiesList from './Components/ActivitiesList'
import Food1 from './assets/food1.jpg'
import RestaurantBody from './Components/RestaurantBody'
import JepOverview from './assets/landing-image.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import MessengerCustomerChat from 'react-messenger-customer-chat';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/rooms">
          <RoomsPage />
        </Route>
        <Route exact path="/location">
          <Location />
        </Route>
        <Route exact path="/promotions">
          <Promotion />
        </Route>
        <Route exact path="/restaurant">
          <Restaurant />
        </Route>
        <Route exact path="/activities">
          <Activities />
        </Route>

      </Switch>
      <MessengerCustomerChat
      pageId="584518321727016"
      appId="580338108973002"
    />
    </Router>
  );
}

function Restaurant() {
  return (
    <div>
      <div className="container-fluid">
        <NavBar />
      <ImageBackground image={JepOverview} />
      </div>
      <div className="container">
        <RestaurantBody />

      </div>
      <ImageLinkList />
      <Footer />
    </div>
  )
}

// <!-- Load Facebook SDK for JavaScript -->
//       <div id="fb-root"></div>
//       <script>
//         window.fbAsyncInit = function() {
//           FB.init({
//             xfbml            : true,
//             version          : 'v9.0'
//           });
//         };
//
//         (function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//         fjs.parentNode.insertBefore(js, fjs);
//       }(document, 'script', 'facebook-jssdk'));</script>
//
//       <!-- Your Chat Plugin code -->
//       <div class="fb-customerchat"
//         attribution="setup_tool"
//         page_id="584518321727016"
//   theme_color="#6699cc"
//   logged_in_greeting="สวัสดีครับ สอบถามข้อมูลได้ครับ"
//   logged_out_greeting="สวัสดีครับ สอบถามข้อมูลได้ครับ">
//       </div>

function HomePage() {
  return (
    <div className="container-fluid">
      <NavBar />
      <HeroPage />
      <IntroductionSection />
      <ImageLinkList />
      <Footer />
    </div>
  )
}

function Activities() {
  return (
    <div>
      <div className="container-fluid">
      <NavBar />
    <br />
    <br />
    <br />
      <Col12Logo />
    <div className="row">
      <div className="col-12 mt-5 text-center RoomSection">
        <h4>Activities</h4>
      </div>
    </div>
  </div>
  <div className="container">
    <ActivitiesList />
  </div>
  <ImageLinkList />
  <Footer />
    </div>
  )
}

function Promotion() {
  return (
    <div>
      <div className="container-fluid">
      <NavBar />
    <br />
    <br />
    <br />
      <Col12Logo />
    <div className="row">
      <div className="col-12 mt-5 text-center RoomSection">
        <h4>Special Offers</h4>
      </div>
    </div>
  </div>
  <div className="container">
    <OfferList />
  </div>
  <ImageLinkList />
  <Footer />
    </div>
  )
}

function Location() {
  return (
    <div>
      <div className="container-fluid">
      <NavBar />
    <br />
    <br />
    <br />
      <Col12Logo />
    <MapImage />
  </div>
  <div className="container">
    <Transportation />
  </div>
  <ImageLinkList />
  <Footer />
    </div>
  )
}

function RoomsPage() {
  return (
    <div>
      <div className="container-fluid">
      <NavBar />
    <br />
    <br />
    <br />
      <Col12Logo />
    <ImageBackground image={AvaPilow} />
  </div>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 mt-5 text-center RoomSection">
        <h4>Rooms</h4>
      <p>(Breakfast included)</p>
      </div>
    <div className="col-12 py-2  my-3 text-center" style={{background: 'rgba(49,170,238,0.45)'}}>
      Availability from 17 Apr to 20 Apr 2010, 4 Adults. <u>Edit</u>
    </div>
  </div>
    <RoomSection />
    <RoomSection />
    <RoomSection />
  </div>
  <ImageLinkList />
  <Footer />
    </div>
  )
}


export default App;
