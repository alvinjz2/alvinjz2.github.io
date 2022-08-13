import React from "react";
import { useNavigate } from "react-router-dom";

export default function Back() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };
  return (
    <div class="py-8">
      <button
        onClick={routeChange}
        class="text-xl w-30 h-[52px] bg-neutral-100 py-3 px-6 shadow-md rounded-full hover:bg-rose-100 ease-in-out transition duration-500"
      >
        <p class="hover:underline underline-offset-4 decoration-dashed decoration-pink-500">
          Back
        </p>
      </button>
    </div>
  );
}
