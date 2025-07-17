"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  CiHome,
  CiHeart,
  CiImageOn,
  CiMap,
  CiUser,
  CiCircleQuestion,
  CiCalendar,
} from "react-icons/ci";

const sectionIds = [
  { id: "home", label: "Home", icon: CiHome },
  { id: "story", label: "Our Story", icon: CiHeart },
  { id: "prenupPhotos", label: "Prenup Photos", icon: CiImageOn },
  { id: "venue", label: "Venue", icon: CiMap },
  { id: "entourage", label: "Entourage", icon: CiUser },
  { id: "fAQs", label: "FAQs", icon: CiCircleQuestion },
];

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selected, setSelected] = useState("Home");

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry?.target.id) {
          const match = sectionIds.find((s) => s.id === visibleEntry.target.id);
          if (match) setSelected(match.label);
        }
      },
      {
        threshold: 0.5,
      }
    );

    sectionIds.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-8 inset-x-0 flex justify-center z-50 pointer-events-none px-2">
      <div className="flex items-center justify-center bg-white rounded-full shadow-xl px-3 py-2 w-auto pointer-events-auto gap-x-1 text-xs lg:text-sm">
        {/* Logo / Audio Button */}
        <motion.div
          className="w-6 h-6 lg:w-8 lg:h-8 center flex justify-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <button id="playButton" onClick={toggleAudio}>
            {isPlaying ? (
              <svg
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z" />
                <path
                  fillRule="evenodd"
                  d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5.707 4.293a1 1 0 0 0-1.414 1.414l14 14a1 1 0 0 0 1.414-1.414l-.004-.005C21.57 16.498 22 13.938 22 12a9.972 9.972 0 0 0-2.929-7.071 1 1 0 1 0-1.414 1.414A7.972 7.972 0 0 1 20 12c0 1.752-.403 3.636-1.712 4.873l-1.433-1.433C17.616 14.37 18 13.107 18 12c0-1.678-.69-3.197-1.8-4.285a1 1 0 1 0-1.4 1.428A3.985 3.985 0 0 1 16 12c0 .606-.195 1.335-.59 1.996L13 11.586V6.135c0-1.696-1.978-2.622-3.28-1.536L7.698 6.284l-1.99-1.991ZM4 8h.586L13 16.414v1.451c0 1.696-1.978 2.622-3.28 1.536L5.638 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" />
              </svg>
            )}
          </button>
        </motion.div>

        <span className="mx-1 text-gray-300">|</span>

        {/* Navigation Buttons */}
        <nav className="flex items-center justify-center gap-x-1 lg:gap-x-4">
          {sectionIds.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              onClick={() => {
                setSelected(label);
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.1 }}
              className={`flex items-center justify-center px-2 py-1 rounded-full transition-colors ${
                selected === label
                  ? "bg-black text-white"
                  : "text-gray-900 hover:text-gray-600"
              }`}
            >
              <Icon className="h-5 w-5 block lg:hidden" />
              <span className="hidden lg:block space-mono-regular">
                {label}
              </span>
            </motion.button>
          ))}
        </nav>

        <span className="mx-1 text-gray-300">|</span>

        {/* CTA */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <a
            href="#rsvp"
            className="inline-flex items-center justify-center px-3 py-1 text-xl lg:text-sm text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
          >
            <CiCalendar className="mr-1 hidden lg:inline" />
            <span className="hidden lg:inline"> &nbsp; RSVP</span>
            <CiCalendar className="lg:hidden" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export { Navbar };
