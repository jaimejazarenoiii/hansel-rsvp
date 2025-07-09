import { useEffect, useRef, useState } from "react";

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
    "Invitation",
    "FAQ",
  ];

  return (
    <>
      <header className="bg-white shadow relative z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          {/* Left Side: Hamburger + Audio */}
          <div className="flex flex-1 items-center gap-4">
            {/* Hamburger - Mobile only */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Audio Button */}
            <button id="playButton" onClick={toggleAudio}>
              {isPlaying ? (
                // Pause Icon
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
                // Play Icon
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.707 4.293a1 1 0 0 0-1.414 1.414l14 14a1 1 0 0 0 1.414-1.414l-.004-.005C21.57 16.498 22 13.938 22 12a9.972 9.972 0 0 0-2.929-7.071 1 1 0 1 0-1.414 1.414A7.972 7.972 0 0 1 20 12c0 1.752-.403 3.636-1.712 4.873l-1.433-1.433C17.616 14.37 18 13.107 18 12c0-1.678-.69-3.197-1.8-4.285a1 1 0 1 0-1.4 1.428A3.985 3.985 0 0 1 16 12c0 .606-.195 1.335-.59 1.996L13 11.586V6.135c0-1.696-1.978-2.622-3.28-1.536L7.698 6.284l-1.99-1.991ZM4 8h.586L13 16.414v1.451c0 1.696-1.978 2.622-3.28 1.536L5.638 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navLinks.map((link) => {
              const targetId =
                "#" +
                link
                  .replace(/\s+/g, "")
                  .replace(/^[A-Z]/, (l) => l.toLowerCase());
              return (
                <a
                  key={link}
                  href={targetId}
                  className="text-sm font-semibold text-gray-900 hover:bg-[#f0f0f0] px-2 py-1 rounded"
                >
                  {link}
                </a>
              );
            })}
            <a
              href="#rsvp"
              className="inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900"
            >
              RSVP
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/10"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative z-50 w-64 bg-white p-6 transition-transform duration-300 transform translate-x-0">
            <button
              onClick={() => setMenuOpen(false)}
              className="mb-6"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const targetId =
                  "#" +
                  link
                    .replace(/\s+/g, "")
                    .replace(/^[A-Z]/, (l) => l.toLowerCase());
                return (
                  <a
                    key={link}
                    href={targetId}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-900 hover:bg-[#f0f0f0] px-2 py-1 rounded"
                  >
                    {link}
                  </a>
                );
              })}
              <a
                href="#rsvp"
                className="inline-block mt-4 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900"
              >
                RSVP
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
