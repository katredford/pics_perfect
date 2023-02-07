import { useState } from "react";
import "./style.css"

const pics = [
  "http://localhost:3000/IMG_3090.jpg",
  "http://localhost:3000/IMG_3902.jpg",
  "http://localhost:3000/IMG_3986.jpg",
  "http://localhost:3000/IMG_3987.jpg"
]



function App() {
const [picture, setPicture] = useState(0)

   function nextSlide() {
    setPicture(picture === pics.length - 1 ? 0 : picture + 1);
  }

  function prevSlide() {
    setPicture(picture === 0 ? pics.length - 1 : picture - 1);
  }
  
  return (
    <>
    <h2>Washington State</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        <div>
     
          {pics.map(
            (image, index) => 
              picture === index &&
              (
            <div key={picture} className="slide">
              <img src={image} alt="images" />
            </div>
          )
        
        )}
       ""
        </div>
        </div>
    </>
  );
}