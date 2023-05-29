import React from "react";
import Card from "./components/card";

export default function Home() {
  return (
    <div id="bg">
      <div class="grid grid-cols-2 translate-y-[10%]">
        <div class="grid grid-rows-3 gap-16 place-content-around translate-x-[3%]">
          <Card title="Experience" content="View my Resume" path="/resume" />
          <Card
            title="Projects"
            content="What I've worked on"
            path="/projects"
          />
          <Card title="Interests" content="Things I like" path="/interests" />
        </div>
        <Card title="About Me" content="Who I am, What I do" path="/about" />
      </div>
    </div>
  );
}
