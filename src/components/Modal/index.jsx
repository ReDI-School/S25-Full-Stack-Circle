import React  from 'react';
import  "./modal.style.css"

export default function Modal({onClose}) {
   
  return (
 <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="modal-content">
          {/* Modal content goes here */}
        </div>
      </div>
    </div> 
    )  


} 
