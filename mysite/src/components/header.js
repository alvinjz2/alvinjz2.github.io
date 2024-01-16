import React from "react";

function Header(props) {
  return (
    <div class="py-15">
      <div>
        <p
          class="text-7xl font-medium mb-4"
          style={props.hstyle}
        >
          {props.title}
        </p>
        <p class="text-3xl font-medium" style={props.sstyle}>{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Header;
