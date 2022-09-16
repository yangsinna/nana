import "./Card.css";
import './../App.css';
import {useNavigate} from 'react-router-dom';
import { Nav, Button, Navbar,Card } from 'react-bootstrap'
import Like from './Like'

// import { gsap } from "gsap";
// import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
// import Img from './Img';

function Cardfilp({realData}) {
  let navigate = useNavigate();
  // const [reversed, setReversed] = useState(false);
console.log(realData)
  return <>{realData && 
    realData.map((a, i) => {
      return (
        <div>
          <Card className="border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={a.mainIMG} className='gridImg'/>
      <Card.Body>
        <Card.Title>당근수삼정과</Card.Title>
        <Card.Text>
       맛있다
        </Card.Text>
        <Button onClick={()=>{navigate('/fileform')}}variant="primary">먹음</Button>
        <Button variant="primary"> <Like/></Button>{' '}
      
      </Card.Body>
    </Card>
        {/* <Button onClick={()=>{navigate('/fileform')}}variant="primary">먹음</Button>
        <img src={a.mainIMG} className='gridImg'/> */}
        
          </div>  
      );
    })
  }</>
}

export default Cardfilp;

  // useLayoutEffect(() => {
  //   gsap.set(".quickflip", {
  //     transformStyle: "preserve-3d",
  //     transformPerspective: 1000
  //   });
  //   gsap.set(".qf-card", {
  //     transformStyle: "preserve-3d",
  //     transformOrigin: "50% 50%"
  //   });
  //   gsap.set(".qf-back", {
  //     rotationY: 180,
  //     rotationZ: 180
  //   });
  // }, []);

  // const tl = useRef();

  // useEffect(() => {
  //   tl.current = gsap.timeline({ paused: true });
  //   tl.current
  //     .to(".qf-card", { rotationX: "+=180", duration: timing })
  //     .to(
  //       ".quickflip",
  //       { z: 50, duration: timing / 2, yoyo: true, repeat: 1 },
  //       0
  //     );
  // }, [tl]);

  // useEffect(() => {
  //   reversed ? tl.current.play() : tl.current.reverse();
  // });

  // return (
  //   <section class="grid">
  //   <div className="wrapper">
  //     <div
  //       className="quickflip"
  //       onClick={() => {
  //         setReversed((reversed) => !reversed);
  //       }}
  //     >
  //       <div className="qf-card qf-front">
  //       <img className="Image" alt="" src="Img/사진1.jpg" />
  //       </div>
  //       <div className="qf-card qf-back"><Img/>
            
  //           </div>
  //     </div>
  //   </div>
  //   </section>

