import React from "react";
import './Hero.css';
import CustomButton from './CustomButton.jsx';
import res_image from '../assets/restauranfood.jpg';

function Hero() {
    return(
        <div className="Hero">
            <div className="TextComp">
           <div className="title">Little Lemon </div> 
           <div className="location">Chicago</div>
           <div className="description">We are family owned</div>
           <div className="description">Mediterranean restaurant,</div>
           <div className="description">focused on traditional</div>
           <div className="description">receipes served with a modern</div>
           <div className="description">twist.</div>
           <CustomButton>Reserve a table</CustomButton>
           </div>
            
            <img className="hero-image" src={res_image} alt="Hero_image" />
          
         </div>

    );
}

export default Hero;