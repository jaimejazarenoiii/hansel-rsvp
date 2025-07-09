function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex flex-1">
          <button>
            <svg
              className="w-6 h-6 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.5 8.43A4.985 4.985 0 0 1 17 12a4.984 4.984 0 0 1-1.43 3.5m2.794 2.864A8.972 8.972 0 0 0 21 12a8.972 8.972 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:bg-[#f0f0f0] px-2 py-1 rounded"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:bg-[#f0f0f0] px-2 py-1 rounded"
          >
            Our Story
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:bg-[#f0f0f0] px-2 py-1 rounded"
          >
            Prenup Photos
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:bg-[#f0f0f0] px-2 py-1 rounded"
          >
            Venue
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:bg-[#f0f0f0] px-2 py-1 rounded"
          >
            Invitation
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:bg-[#f0f0f0] px-2 py-1 rounded"
          >
            FAQ
          </a>
          <a
            href="#"
            className="inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900"
          >
            RSVP
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
