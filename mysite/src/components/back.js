import React from "react";
import { useNavigate } from "react-router-dom";

export default function Back() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };
  return (
    <div class="p-6">
      <button
        onClick={routeChange}
        class="text-xl bg-zinc-300 py-3 px-6 drop-shadow-lg rounded-full hover:bg-sky-200 ease-in-out transition duration-500"
      >
        Back
      </button>
    </div>
  );
}
