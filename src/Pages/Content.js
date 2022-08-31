import React from 'react';
import logo1 from "../Assets/client-databiz.svg";
import logo2 from "../Assets/client-audiophile.svg";
import logo3 from "../Assets/client-meet.svg";
import logo4 from "../Assets/client-maker.svg";
import desktopimage from "../Assets/image-hero-desktop.png";
import mobileimage from "../Assets/image-hero-mobile.png";

function Content() {
  return (
   <>
   <div className='content-container m-2'>
    <div className='d-flex text-image'>
    <div className='text-container m-3'>
    <div className='m-3 head-desktop'><h1>Make <br/>remote Work</h1></div>
    <div className='m-3 head-mobile'><h1>Make remote Work</h1></div>
    <div className='m-3'><p className='text-muted'>Get your team in sync. no matter your location <br/> Streamline process, create team rituals, and <br/> watch producttivity soar</p></div>
<div className='m-3 btn-head'><button className='btn-snap more'>Learn More</button></div>
<div className='m-3'>
  <ul className='d-flex gap p-0'>
    <li><img src={logo1} alt="logo1"/></li>
    <li><img src={logo2} alt="logo2"/></li>
    <li><img src={logo3} alt="logo3"/></li>
    <li><img src={logo4} alt="logo4"/></li>
   
  </ul>
</div>
    </div>

    <div className='img-container m-3'>
    <div className='mx-4 mobile'>
<img src={mobileimage} alt="image" className='mobile-image'/>
</div>
        
<div className='m-7 desktop'>
<img src={desktopimage} alt="image" className='desktop-image'/>
</div>
    </div>
    </div>
   </div>
   </>
  )
}

export default Content