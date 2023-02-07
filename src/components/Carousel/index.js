import { useState } from "react"

function Carousel( {pics} ) {
const [index, setIndex] =useState(0)

  const sliderStyles = {
    height: '100%',
    position: "relative",
  }
  
  const picStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${pics[index].url})`
  }
  
  const lArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: "32px",
    fontSize: "45px",
    color: '#fff',
    zIndex: 1,
    cursor: "pointer",
  }

   const rArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: "32px",
    fontSize: "45px",
    color: '#fff',
    zIndex: 1,
    cursor: "pointer",
   }
  
  return (
    <div style={sliderStyles}>
      <div style={lArrow}>←</div>
      <div style={rArrow}>→</div>
      <div
        style={picStyles}>
        
        </div>
    </div>
  )
}

export default Carousel