import React from "react";
import Gif from "./media/parrot.gif"

function Header(props) {
  return (
    <div className="py-15">
      <div>
      <p className="text-5xl sm:text-4xl md:text-7xl lg:text-7xl xl:text-7xl font-medium mb-5" style={props.hstyle}>
        {props.title}
      </p>
        <div className="flex items-center">
          <p className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-light mt-1">{props.subtitle}</p>
          <img src={Gif} alt="parrot" className="ml-4 h-10" />
        </div>
        <p className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-light mt-5 ">{props.email}</p>
      </div>
    </div>
  );
}

export default Header;
