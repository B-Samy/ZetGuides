import React, {useState} from 'react'
import styled from 'styled-components';

import { Stroke3 } from './Stroke3';
import { Design } from './Design';

// videos n images 
import splash from '../assests/splash.jpg'
import Mock from '../assests/mockvid.mp4'
import arrow2 from '../assests/arrow2.png'

export const Page = () => {

 


  return (

    <>

<div className="counter-nat">

    <div className="header">
        <div className="navbar">


        <div className="logo-stroke">
    <h3>Zet⚡Guides.</h3>
        </div>


            <ul >
    <li><a href="/">Home</a></li>
    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSft-KcSBMF3gN3ynBwCLfoLgt1LzGy9fDPfwT8BPaiTVmN5kg/viewform?usp=preview">Apply Now</a></li>
    <li><a href="https://bbcclonenext.vercel.app/" target='_blank'>Blog</a></li>
            </ul>

      

    <div className="genrte-stroke">

    <div className="styled-wrapper">
      <button className="button">
        <div className="dots_border" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="sparkle">
          <path className="path" strokeLinejoin="round" strokeLinecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" />
          <path className="path" strokeLinejoin="round" strokeLinecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z" />
          <path className="path" strokeLinejoin="round" strokeLinecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z" />
        </svg>
       <a href="https://www.youtube.com/watch?v=O5IXf8qB9U4&list=PLdvOfoe7PXT0ouChAnR1nHlT8BJIo5hP_" target='_blank' className='text_button_id'>
        <span className="text_button">Enroll Course</span>

       </a>
      </button>
    </div>

{/* genrte stroke ends  */}
    </div>

        </div>
    <div className="mid-stroke">
<div className="headingmain">
  <div className="cardhover">
  <div className="loaderhover">
    <p>from <span className='zetguides1'>ZetGuides</span> to </p>

    <div className="wordsmaker">
      <span className="wordmakit">UI Designs</span>
      <span className="wordmakit">User Interfaces</span>
      <span className="wordmakit">UI Perfection</span>
      <span className="wordmakit">Interactive UI</span>
      <span className="wordmakit">figma</span>

    </div>
  </div>
</div>

</div>
<p className='learnwith30'>Learn with us for 30 days, earn up to 25% commission , <br /> and level up your future - one project at a time</p>

<div className="video-stroke">
<div className="dotmate"></div>
<div className="dotmate2"></div>
<div className="dotmate2"></div>
<div className="dotmate3"></div>
<div className="dotmate3"></div>
  <video src={Mock}   autoPlay loop playsInline muted 
    disablePictureInPicture
  controlsList="nodownload noremoteplayback"
  disableRemotePlayback
  onContextMenu={(e) => e.preventDefault()}
  
   ></video>
</div>

<div className="botm-stroke">
<div className="looking">

  <h3>LOOKING FOR A UI / UX DESIGNER</h3>
  <p>“ Our past learners now lead their own dev squads. You could be next.”</p>

</div>
</div>

    </div>  

{/* midle stroke |< */}
    </div>

    <div className="left-stroke">
    <img src={arrow2} alt=""  className='arrowimg'/>
<div className="left-text">
  <p className='left-p'>"We're looking for learners &<br /> Creators"</p>
  <h3 className='hellprob'> No Experience?<br /> No problem</h3>
  <p className="crew">They spent four years learning how to follow rules. You spent 30 days breaking them — beautifully. 🚀</p>

<div className="mileston">
  <p className='project'>Next project / 30% Commision</p>


  <div className="btn-stroke">

{/* start here  */}

<a href='https://docs.google.com/forms/d/e/1FAIpQLSft-KcSBMF3gN3ynBwCLfoLgt1LzGy9fDPfwT8BPaiTVmN5kg/viewform?usp=preview' target='_blank'>

<div className="button-wrapper">

      <button className="hover-button">

         Join Before It Fills Up
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className={`star-${num}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 784.11 815.53"
              className="star-svg"
            >
              <g id="Layer_x0020_1">
                <path
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  className="fil0"
                />
              </g>
            </svg>
          </div>
        ))}
      </button>
    </div>

</a>

{/* btnstroke ends  */}

<div className="dotstrokemate">
    <div className="dotstroke"></div>
    <p>2 Spots Available</p>
</div>
    
    <div className="arrowsvgmate">
      <img src={arrow2} alt="" />
    </div>
  </div>
</div>


</div>
    </div>

    <div className="right-stroke">

        <div className="slaps">
        <img src={arrow2} alt=""  className='lastarrow3'/>
          <h3>You'r first 30 days</h3>

          <p className='btm1'>Day 1-10 Learn the basics</p>
          <p className="btm2">Day 11-20 Work with Mentor</p>
          <p className="btm3">Day 21-30 Contribute to real <br /> Projects</p>
          <p className="btm4">Day 30  Get Hired or Start  <br />earning</p>

        </div>

    </div>


<div className="marquee">
  <h1>
	<svg>
		<path fill="none" stroke="transparent" strokeWidth="0" d="M-550,59.580000000000005  L-550,59.580000000000005 S-183.15,209.58 0,209.58 S366.85,59.580000000000005 550,59.580000000000005 S916.85,209.58 1100,209.58 S1466.85,59.580000000000005 1650,59.580000000000005 S2016.85,209.58 2200,209.58 S2566.85,59.580000000000005 2750,59.580000000000005" strokeDasharray="616 32 " id="textPath" strokeDashoffset="0"></path>
		<text>
			<textPath className="Marquee-svg-text" href="#textPath">
				<tspan className="Marquee-svg-text" x="0">"dev x design"</tspan>
				<tspan className="Marquee-svg-text" x="648">"💻 designing"</tspan>
				<tspan className="Marquee-svg-text" x="1296">"🛠️ in progress"</tspan>
				<tspan className="Marquee-svg-text" x="1944">"You + good taste = 👌"    </tspan>
				<tspan className="Marquee-svg-text" x="2592">  &nbsp;   "🎨 layouting"</tspan>
				<tspan className="Marquee-svg-text" x="3240">"figma ⬄ browser"</tspan>
			</textPath>
		</text>
	</svg>
</h1>


</div>
<div className="counnent">

<Stroke3/>
</div>
<div className="desingstroke">
  <Design/>
 </div>
    {/* /* --- counter-nat file  */ }
</div>


    </>
  )
}
