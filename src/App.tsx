import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainBanner from "./MainBanner";
import OurStory from "./OurStory";
import Prenup from "./Prenup";
import Venue from "./Venue";
import Reminders from "./Reminders";
import Invitation from "./Invitation";
import RSVP from "./RSVP";
import Header from "./Header";
import Overlay from "./Overlay";

function App() {
  return (
    <div className="App">
      <Overlay />
      <Header />
      <MainBanner />
      <OurStory />
      <Prenup />
      <Venue />
      <Invitation />
      <Reminders />
      <RSVP />
    </div>
  );
}

export default App;
