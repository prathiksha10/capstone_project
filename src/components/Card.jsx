import React from "react";
import salad from '../assets/greek salad.jpg';
import bruchetta from  '../assets/bruchetta.jpg';
import dessert from '../assets/lemon dessert.jpg';
import icon from '../assets/motorcycle.png';

function Card() {
    return(
        <div className="card-wrapper" style={{backgroundColor: "#EDEFEE", borderRadius: '10px'}}>
            <img className="display-image" src={salad} alt="image1" width="290" height="200"  />
            <div style={{display:'flex', justifyContent: 'space-between', marginLeft: '24px', marginRight: '30px' }}>
                <div>
                greek salad
            </div>
            <div>
                price
            </div>
            </div>
            <div style={{marginLeft: '24px', marginRight: '30px', marginTop: '20px'}} >
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
            </div>
            <div style={{marginLeft: '24px', marginRight: '30px', marginTop: '40px', paddingBottom: '20px'}}>
                Order a delivery
                <img src={icon} alt="icon" width="20" height="20" style={{marginLeft:'10px'}}/>
                </div>
            
        {/*    <div className="data">
                <div className="section1">
                    title
                    <div className="price">price</div>
                </div>
                description
                <div className="section3">
                    order a delivery + icon
                </div>
            </div>
            */}
        </div>
    );
} 

export default Card;