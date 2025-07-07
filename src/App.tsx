import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainBanner from "./MainBanner";
import OurStory from "./OurStory";
import Prenup from "./Prenup";
import Venue from "./Venue";
import Reminders from "./Reminders";

function App() {
  return (
    <div className="App">
      <MainBanner />
      <OurStory />
      <Prenup />
      <Venue />
      <Reminders />
    </div>
  );
}

export default App;
