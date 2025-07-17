import { useEffect, useRef, useState } from "react";
import { Navbar } from "./FloatingNavigation";

function Header() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    const audio = document.getElementById("bgMusic") as HTMLAudioElement | null;
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const navLinks = [
    "Home",
    "Our Story",
    "Prenup Photos",
    "Venue",
    "Entourage",
    "FAQs",
  ];

  return (
    <>
      <Navbar />
    </>
  );
}

export default Header;
