import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainBanner from "./MainBanner";
import OurStory from "./OurStory";
import Prenup from "./Prenup";
import Reminders from "./Reminders";

function App() {
  return (
    <div className="App">
      <MainBanner />
      <OurStory />
      <Prenup />
      <Reminders />
    </div>
  );
}

export default App;
