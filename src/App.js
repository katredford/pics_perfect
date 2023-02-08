import { useState } from "react";
import "./style.css"
import Carousel from "./components/Carousel"

const pics = [
  { url: "http://localhost:3000/IMG_3090.jpg" },
  {url: "http://localhost:3000/IMG_3902.jpg"},
  {url: "http://localhost:3000/IMG_3986.jpg"},
  { url: "http://localhost:3000/IMG_3987.jpg" }
]



function App() {
const [picture, setPicture] = useState(0)

   function nextSlide() {
    setPicture(picture === pics.length - 1 ? 0 : picture + 1);
  }

  function prevSlide() {
    setPicture(picture === 0 ? pics.length - 1 : picture - 1);
  }
  
  const containerStyle = {
    width: "500px",
    height: "280px",
    margin: "0 auto"
  }
  return (
    <>
    <h2>Washington State</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
          ⇦
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
          ⇨
        </div>
        <div style={containerStyle}>
     
     <Carousel pics={pics} />
        </div>
        </div>
    </>
  );
}

export default App;
