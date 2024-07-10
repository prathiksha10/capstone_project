import Hero from './Hero-Section';
import Highlights from './Highlights-Section';
import './Main.css';

function Main() {
    return(
        <div className='Main-section'>
        <Hero/>
        <Highlights/>
        </div>
    );
}

export default Main;


//There are 2 sections in main component
//entire main section takes 50% of width centered 
//75% of 1st part has background color 
//1: one big banner image 
//a reusable button should be created 
//2: reusable component for specials sections card : 1 image + title + rate + description + order a delivery button + icon