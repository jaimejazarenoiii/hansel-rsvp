function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
          >
            Our Story
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
          >
            Prenup Photos
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
          >
            Venue
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
          >
            Invitation
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
          >
            FAQ
          </a>
          <a
            href="#"
            className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            RSVP
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
