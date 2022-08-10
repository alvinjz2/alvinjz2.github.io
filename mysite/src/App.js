import React from "react";
import "./App.css";
import Card from "./components/card";

export default function App() {
  return (
    <div class="bg-gradient-to-r from-transparent via-blue-300 to-sky-100 h-screen w-full">
      <div class="translate-y-1/4">
        <div class="grid grid-cols-2 ">
          <div class="grid grid-rows-3 gap-10 place-content-around">
            <Card
              title="About Me"
              content="My background, what I'm doing now"
              path="/about"
            />
            <Card title="Experience" content="View my Resume" path="/resume" />
            <Card title="Interests" content="Stuff I like" path="/interests" />
          </div>
          <Card title="Experience" content="View my Resume" path="/resume" />
        </div>
      </div>
    </div>
  );
}
