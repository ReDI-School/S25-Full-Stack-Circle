import React from 'react'
import './Section3.css';
import Section3Card from './PreviewSection3Card/Section3Card';

const Section3 = () => {
  return (
    <div className='preview-section-3'>
    <div className='section3-images'>
      
       <Section3Card/>
    </div>
    <div className='section3-text'>
      <h1 className='section-text-heading'>See it, make it,<br/>try it, do it</h1>
      <div className='section-text-p'><p >The best part of Pinterest is discovering new things and ideas from people around the world.</p></div>
    </div>
  </div>
  )
}

export default Section3