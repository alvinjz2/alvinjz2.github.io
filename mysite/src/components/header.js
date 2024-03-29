import React from "react";
import Gif from "./media/parrot.gif"
function Header(props) {
  return (
    <div class="py-15">
      
      <div>
        <p
          class="text-7xl font-medium mb-5"
          style={props.hstyle}
        >
          {props.title}
        </p>
        <div className="flex items-center">
        <p class="text-4xl font-small">{props.subtitle}</p>
        <img src={Gif} alt="parrot" class=" ml-4 h-10"/>
        </div>
        
        
        <p class="text-3xl font-small mt-4">{props.email}</p>
      </div>
    </div>
  );
}

export default Header;
