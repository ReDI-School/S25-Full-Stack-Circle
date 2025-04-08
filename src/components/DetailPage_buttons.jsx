import React, {useState} from "react"
import { BsHeart, BsHeartFill, BsThreeDots } from "react-icons/bs"
import { FiShare } from "react-icons/fi"





export default function DetailPage_buttons() {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',  // or 'flex-start', depending on your layout needs
        width: '492px',                   // adjust to your preferred width
        height: '48px',                   // adjust to your preferred height
        backgroundColor: '#ffffff',       // white background
       // padding: '0 1rem',                // some horizontal padding
        borderRadius: '8px',             // optional, for rounded corners
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // optional, for a slight shadow
      };


      const likeButtonStyle = {
        height: '48px',  
        display: 'flex',
        alignItems:'center',
        backgroundColor: '#ffffff',
        borderRadius: '0px',
        //borderRadius:'50%'
      }

      const groupLeftAndRightStyle = {
        display: 'flex',
        alignItems:'center',
      }

      const [isSaved, setIsSaved] = useState(false);

        // Toggle the saved state when button is clicked.
        const handleClick = () => {
            setIsSaved((prevState) => !prevState);
        };

      const unsavedStyle = {
        backgroundColor: '#e60023', // Red background for unsaved
        color: '#ffffff',           // White text
        border: 'none',
        padding: '8px 16px',
        borderRadius: '20px',       // Rounded corners (if desired)
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      };
    
      const savedStyle = {
        backgroundColor: '#000000', // Black background for saved
        color: '#ffffff',           // White text
        border: 'none',
        padding: '8px 16px',
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      };



    return(
        <div style={containerStyle}>
            <div className='groupLeft' style={groupLeftAndRightStyle}>
                <button style={likeButtonStyle}>
                    <BsHeartFill style={{width:'24px', height:'24px',color:'#e60023'}}/>
                    <p style={{color: '#000000'}}>123</p>
                    
                </button>
//<BsHeart style={{width:'24px', height:'24px', color: '#000000'}} />
                
                <FiShare style={{width:'24px', height:'24px',color:'#000000'}}/>
                <BsThreeDots style={{width:'24px', height:'24px',color:'#000000'}}/>
            </div>
            
            <div className='groupRight' style={groupLeftAndRightStyle}>
                <button
                    style={isSaved ? savedStyle : unsavedStyle}
                    onClick={handleClick}
                >
                    {isSaved ? 'Saved' : 'Save'}
                </button>
               
                <button
                    style={isSaved ? savedStyle : unsavedStyle}
                    onClick={handleClick}
                >
                    {isSaved ? 'Saved' : 'Save'}
                </button>
            </div>
            
        </div>
    )
}