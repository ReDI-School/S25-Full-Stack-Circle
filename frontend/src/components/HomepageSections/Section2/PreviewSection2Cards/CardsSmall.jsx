import React from "react";
import Image1 from "../../../../assets/preview-section/section2Bedroom.jpg";
import Image2 from "../../../../assets/preview-section/section2deck.jpg";
import Image3 from "../../../../assets/preview-section/section2Bathroom.jpg";
import Image4 from "../../../../assets/preview-section/section2Coffeemug.jpg";
const CardsSmall = ({image,text,id}) =>{
  const cards = [
    { image: Image1, text: "My Scandinavian Bedroom",id:1},
    { image: Image2, text: "The deck of my dreams",id:2 },
    { image: Image3, text: "Our bathroom upgrade",id:3},
    { image: Image4, text: "Serve my drinks in style",id:4}, 
  ];
  return (
    <div className="card">
        <img src={image}  className="card-image" />
        <div className="card-overlay">
          <p>{text}</p>
        </div>
      </div>
  );
};

export default CardsSmall
