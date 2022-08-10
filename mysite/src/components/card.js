import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(props.path);
  };
  return (
    <button
      class="bg-slate-100 drop-shadow-lg rounded-xl min-w-fit max-w-lg p-6 transition ease-in-out duration-300 hover:scale-105"
      onClick={routeChange}
    >
      <div class="place-items-center">
        <div class="grid grid-rows-2 ">
          <p class="text-4xl pb-6 font-medium">{props.title} </p>
          <p class="text-xl">{props.content}</p>
        </div>
      </div>
    </button>
  );
}

export default Card;
