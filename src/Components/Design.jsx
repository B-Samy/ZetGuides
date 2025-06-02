import React from 'react'
import '../Styles/Page.css'


import phonepng from '../assests/pngbetter.png'
import arrow1 from '../assests/arrow2.png'
export const Design = () => {
  return (

    <>
  <div className="thirdsect">
    <div className="designcta">
      <h2>madeinFigma</h2>
    </div>
    <img src={arrow1} alt=""  className='figmashorts1'/>

    <div className="designtext">
      <p>They got a diploma. You got a portfolio. 📄</p>
    <img src={arrow1} alt=""  className='figmashorts'/>
    </div>

      <div className="cosmosgrid">








<div className="new-grid"></div>
<div id="poda">
  <div className="new-glow"></div>
  <div className="new-dark-border-bg"></div>
  <div className="new-dark-border-bg"></div>
  <div className="new-dark-border-bg"></div>

  <div className="new-white"></div>

  <div className="new-border"></div>

  <div id="main">
    <input placeholder="email@example.co" type="text" name="text" className="new-input" />
    <div id="input-mask"></div>
    <div id="pink-mask"></div>
    <div className="new-filter-border"></div>
    <div id="filter-icon">
      <svg
        preserveAspectRatio="none"
        height="27"
        width="27"
        viewBox="4.8 4.56 14.832 15.408"
        fill="none"
      >
        <path
          d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
          stroke="#d6d6e6"
          strokeWidth="1"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
    <div id="search-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        height="24"
        fill="none"
        className="new-search-icon"
      >
        <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
        <line
          stroke="url(#searchl)"
          y2="16.65"
          y1="22"
          x2="16.65"
          x1="22"
        ></line>
        <defs>
          <linearGradient gradientTransform="rotate(50)" id="search">
            <stop stopColor="#f8e7f8" offset="0%"></stop>
            <stop stopColor="#b6a9b7" offset="50%"></stop>
          </linearGradient>
          <linearGradient id="searchl">
            <stop stopColor="#b6a9b7" offset="0%"></stop>
            <stop stopColor="#837484" offset="50%"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>





      </div>
{/* importtant */}

<div className="cardstack">
  <div className="containerstack">
    <ul id="cardser">
      <li className="cardd" id="cardd1">
        <div className="card-body">

<img src="https://miro.medium.com/v2/resize:fit:2000/1*1cKfmNf7j-H1yltaWzilSw.jpeg" alt="" />

        </div>
      </li>
      <li className="cardd" id="cardd2">
        <div className="card-body">

          <img src="https://once-ui.com/_next/image?url=%2Fimages%2Ffigma%2Fcover.jpg&w=3840&q=75" alt="" />

        </div>
      </li>
      <li className="cardd" id="cardd3">
        <div className="card-body">

          <img src="https://learningfigma.com/assets/og.png" alt="" />

        </div>
      </li>
      <li className="cardd" id="cardd4">
        <div className="card-body">

        <img src={phonepng} alt="" />

        </div>
      </li>
    </ul>
  </div>

<div className="streakclass">
<h1>Start Now</h1>



{/* button anatomy start here  */}
<a href="http://bbcclonenext.vercel.app/" target='_blank' >
<button className="custom-btn">
  <div className="custom-icon">
    <span className="custom-text-icon custom-hidden">Design</span>
    <svg
      className="custom-svg"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      height="24"
      width="24"
      viewBox="0 0 24 24"
    >
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
  </div>
  <span className="custom-title">
  
Layouts vs Lectures 🖼️

  </span>
  <div className="custom-padding-left custom-hidden">
    <div className="custom-padding-left-line">
      <span className="custom-padding-left-text">Design vs. Degrees</span>
    </div>
  </div>
  <div className="custom-padding-right custom-hidden">
    <div className="custom-padding-right-line">
      <span className="custom-padding-right-text">Grids vs. Grades</span>
    </div>
  </div>
  <div className="custom-bg custom-hidden">
    <span className="custom-bg-text">UI vs. University</span>
  </div>
  <div className="custom-border custom-hidden">
    <span className="custom-border-text">Pixels vs. Papers</span>
  </div>
</button>

</a>
{/* end here  */}

</div>




</div>




  </div>
    </>
  )
}
