import React from "react";

function Header(props) {
  return (
    <p class="pb-10 text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      {props.title}
    </p>
  );
}

export default Header;
