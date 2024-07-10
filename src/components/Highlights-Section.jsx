import React from "react";
import './Highlights.css';
import CustomButton from './CustomButton.jsx';
import Card from './Card.jsx';
import salad from '../assets/greek salad.jpg';
import bruchetta from  '../assets/bruchetta.jpg';
import dessert from '../assets/lemon dessert.jpg';

function Highlights() {
    return(
        <div className="Highlight">
          <div className="Headline">
            <div className="titleName">This weeks specials !</div>
           <div><CustomButton>Online menu</CustomButton></div> 
          </div>
          <div style={{ width: '900px',display: 'flex', flexDirection: 'row', marginLeft: '20px', justifyContent: 'space-between' }}>
          <div style={{margin:'1px'}}><Card/></div>
          <div style={{ paddingLeft: '10px' }}><Card/></div>
          <div style={{ paddingLeft: '10px'}}><Card/></div>
          </div>
    </div>
    );
}
export default Highlights;