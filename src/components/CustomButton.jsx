import React from "react";
import './CustomButton.css';

function CustomButton(props) {
return(
<div className="button">
    {props.children}
</div>
);
}

export default CustomButton;
