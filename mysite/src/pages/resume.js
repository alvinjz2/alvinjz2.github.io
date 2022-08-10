import React from "react";
import Back from "../components/back";
import DView from "../components/docviewer";
export default function Resume() {
  return (
    <div>
      <header className="App-header">
        <DView />
        <Back />
      </header>
    </div>
  );
}
