import AvaLogo from './../assets/avatara-logo.png'

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import './Footer.css'
export default function Footer(){
  return <div className="row footer">
    <div className="col-12 col-md-12 p-5 text-center">
      <img src={AvaLogo} width='100' alt="Avatara Resort" />
    <p className="mt-4">106 M.4, Koh Samed, Phe, Rayong 21160</p>
    <h3>Tel. +66-89-097-1114</h3>
    <p>rsvn@avatararesort.com</p>
  <ul>
      <li><AiFillFacebook size="2rem" /></li>
    <li><AiFillInstagram size="2rem" /></li>
    </ul>
    <span>@AVATARA RESORT.All Rights Reserved.</span>

    </div>
    {/* <div style={{backgroundImage: `url(${SamedDronePic})`}} className="col-7 footPic">
    </div> */}
  </div>
}
