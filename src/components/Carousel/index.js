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
  
  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center"
   }
  
  const dotStyle = {
    margin: '0 3px',
    cursor: "pointer",
    fontSize: '20px'
  }
  
  function previous() {
    const firstIndex = index === 0;
    const newIndex = firstIndex ? pics.length - 1 : index - 1
    setIndex(newIndex)
  }

   function next() {
    const last = index === pics.length - 1;
    const newIndex = last ? 0 : index + 1
    setIndex(newIndex)
  }
  
  function goToSlide(index) {
    setIndex(index)
  }


  return (
    <div style={sliderStyles}>
      <div style={lArrow} onClick={previous}>←</div>
      <div style={rArrow} onClick={next}>→</div>
      <div
        style={picStyles}>
      </div>

      <div style={dotsContainerStyle}>
        {pics.map((pic, picIndex) => 
          <div
            key={picIndex}
            style={dotStyle}
            onClick={() => goToSlide(picIndex)}
          >⇼
          </div>
        )}
      </div>
    </div>
  )
}

export default Carousel