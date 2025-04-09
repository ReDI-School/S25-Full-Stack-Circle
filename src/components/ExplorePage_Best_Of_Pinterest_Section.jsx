import React from 'react'

const ExplorePage_Best_Of_Pinterest_Section = () => {
    const cards = [
        {
            image: "https://i.pinimg.com/736x/a4/04/29/a404295ee9ceb7366b0068144abaf3f9.jpg",
            title: "Freshly picked for spring",
            subtitle: "New season, new nails",
        },
        {
            image: "https://i.pinimg.com/736x/bf/40/3b/bf403bc1720060dbe87ff30e7c11c489.jpg",
            title: "Spice up your outfits",
            subtitle: "Cool style classics",
        },
        {
            image: "https://i.pinimg.com/736x/42/f6/4c/42f64c71899831d570f997a422ea8ddc.jpg",
            title: "Sunbathing is the order of the day",
            subtitle: "Restart: Spring",
        }
    ]
  return (
    <div>
        <h1 style={{ margin: "20px 20px", fontSize: "36px" }}>
            Explore the Best of Pinterest
        </h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            { cards.map((card,index)=>(
                <div key={index} style={{
                position: "relative", 
                width: "450px",
                height: "400px", 
                borderRadius: "8px",
                overflow: "hidden",
                }}>
                    
                    <img src={card.image} alt={card.title} style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", 
                    borderRadius: "8px",
                    filter: "brightness(50%)",
                    }}/>

                    <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    color: "white", 
                    padding: "20px",
                    textAlign: "center",
                    }}>
                    
                    <p style={{ margin: "0" }}>{card.title}</p>
                    <h2 style={{ margin: "5px 0 0" }}>{card.subtitle}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ExplorePage_Best_Of_Pinterest_Section