import React from 'react'
import './Section2.css';
import CardLarge from './PreviewSection2Cards/CardLarge';
import Section2Img1 from '../../../assets/preview-section/section2Bedroom.jpg';
import CardsSmall from './PreviewSection2Cards/CardsSmall';

const Section2 = () => {
  return (
    <div className='preview-section-2'>
            <div className='section2-text'>
            <h1 className='section-text-heading'>Save ideas you like</h1>
             
            <div className='section-text-p'><p>Collect your favorites so you can get back to them later.</p></div>
            </div>
            <div className='section2-images'>
              <div className="section2-grid-wrapper">
                 <CardLarge />
                 <div className='small-card medium image1'>
                    <p>My Scandinavian Bedroom</p>
                 </div>
                 <div className='small-card small image2'>
                     <p>The deck of my dreams</p>
                 </div>
                 <div className='small-card medium image3'>
                    <p>Our bathroom Upgrade</p>
                 </div>
                 <div className='small-card medium image4'>
                 <p>Serve my drinks in style</p>
                 </div>
                
               </div>
            </div>
          </div>
          
  )
}

export default Section2