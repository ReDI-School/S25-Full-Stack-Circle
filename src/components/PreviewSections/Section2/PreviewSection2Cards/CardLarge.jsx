import React from 'react'
import './CardLarge.css'
 import image1 from "../../../../assets/preview-section/section2-fern-bed.jpg"
 import image2 from "../../../../assets/preview-section/section2-fern-living.jpg"
 import image3 from "../../../../assets/preview-section/section2-fern-sofa.jpg"

const CardLarge = () => {
  
  return (
    <div className='section2-card-large-wrapper'>
      <p className='card-text'>Fern future home vibes</p>
      <div className='inner-card-wrapper'>
        <img src={image1} alt='section 2 fern bed image'/>
        <img src={image2} alt='section 2 fern living room image'/>
        <img src={image3} alt='section 2 fern  image'/>

      </div>
    </div>
  )
}

export default CardLarge