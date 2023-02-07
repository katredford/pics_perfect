
  //import pics from "./pics.json"

import { useState } from "react";
import "./style.css"

const pics = [
  "http://localhost:3000/IMG_3090.jpg",
  "http://localhost:3000/IMG_3902.jpg",
  "http://localhost:3000/IMG_3986.jpg",
  "http://localhost:3000/IMG_3987.jpg"
]

// const images = [
//   "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nasa.gov%2Fsites%2Fdefault%2Ffiles%2Fthumbnails%2Fimage%2Fnasa-logo-web-rgb.png&imgrefurl=https%3A%2F%2Fwww.nasa.gov%2Faudience%2Fforstudents%2F5-8%2Ffeatures%2Fsymbols-of-nasa.html&tbnid=Fur10aRzlbXT_M&vet=12ahUKEwjUp4H6uYH9AhXuH94AHVjOCdYQMygBegUIARCOAQ..i&docid=ZGFOe91ARWuzMM&w=3400&h=1700&q=nasa&ved=2ahUKEwjUp4H6uYH9AhXuH94AHVjOCdYQMygBegUIARCOAQ",
//   "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.nasa.gov%2Fsites%2Fdefault%2Ffiles%2Fthumbnails%2Fimage%2Fsamplecollection-2crew-xeva-final2.png&imgrefurl=https%3A%2F%2Fwww.nasa.gov%2Fpress-release%2Fnasa-taps-axiom-space-for-first-artemis-moonwalking-spacesuits&tbnid=pMnA0cmeGF602M&vet=12ahUKEwjUp4H6uYH9AhXuH94AHVjOCdYQMygHegUIARCaAQ..i&docid=w5STMJ_vmTFXeM&w=3840&h=2160&q=nasa&ved=2ahUKEwjUp4H6uYH9AhXuH94AHVjOCdYQMygHegUIARCaAQ",
//   "./images/IMG_3986.jpg",
//   "./images/IMG_3987.jpg"
// ]
// const images = [
//   "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
// ];

function App() {
const [picture, setPicture] = useState(0)

   function nextSlide() {
    setPicture(picture === pics.length - 1 ? 0 : picture + 1);
  }

  function prevSlide() {
    setPicture(picture === 0 ? pics.length - 1 : picture - 1);
  }
  // const pictos = pics.map(data => {
  //   return (
  //     <div key={data.id}>
  //       <img src={data.pic} alt="image"></img>
  //     </div>
  //   )
  // })
  return (
    <>
    <h2>Project 1: Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        <div>
          {/* pics.map(data => {
    return (
      <div key={data.id}>
        <img src={data.pic} alt="image"></img>
      </div>
    )
  }) */}
          {/* {pictos} */}
          {pics.map(
            (image, index) => 
              picture === index &&
              (
            <div key={picture} className="slide">
              <img src={image} alt="images" />
            </div>
          )
        
        )}
        {/* <img src={pics.pic}></img> */}
        </div>
        </div>
    </>
  );
}

export default App;
