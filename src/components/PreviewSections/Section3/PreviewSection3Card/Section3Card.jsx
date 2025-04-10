import React from 'react'
import './Section3Card.css'

import cardImage from "../../../../assets/preview-section/Section3Card.jpg";
import profilePicture from "../../../../assets/preview-section/section3ProfilePicture.jpg";

import { MdKeyboardArrowLeft } from "react-icons/md"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsDashLg } from "react-icons/bs";

const Section3Card = () => {
  return (
    <div className='section3-card-wrapper'>
      <div className='card-caraousel-wrapper'> 
        <img className='card-image' src={cardImage} />
        <div className='card-caption-wrapper'>
          <div className='carousel-icons'>
             <MdKeyboardArrowLeft /><BsDashLg/><BsDashLg/><BsDashLg/><BsDashLg/><BsDashLg/><BiDotsHorizontalRounded/>
          </div>
          <div className='card-caption'>
            <p >How to find the perfect lipshade for any occassion</p>
            </div>
        </div>
        <div className='card-text'>
           <p className='profile-name'>Scout the city</p>
           <p className='followers'>56.7 followers</p>
        </div>
      </div>
      
         <img  className='profile-picture' src={profilePicture} />
      
    </div>
  )
}

export default Section3Card