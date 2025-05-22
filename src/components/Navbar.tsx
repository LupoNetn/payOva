import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Sign Up", link: "/signup" },
  { name: "Login", link: "/login" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full p-4 max-sm:p-2 bg-primary relative z-50">
        <div className="flex justify-between items-center p-4">
          <div>
            <h1 className="text-light text-3xl max-sm:text-2xl font-bold">
              PayOva
            </h1>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:block">
            <ul>
              {navLinks.map((link, index) => (
                <li key={index} className="inline-block mx-4">
                  {link.name.toLowerCase() === "sign up" ||
                  link.name.toLowerCase() === "login" ? (
                    <button
                      onClick={() => (window.location.href = link.link)} // or use useNavigate
                      className="bg-secondary text-dark px-4 py-2 rounded-xl hover:bg-secondary/80 transition-all cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.link}
                      className="text-dark text-md font-semibold"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden relative">
            <div
              onClick={() => setOpen((prev) => !prev)}
              className="cursor-pointer z-50"
            >
              {/* Always show close icon below navbar when open */}
              {!open ? (
                <MdMenu className="text-light text-3xl" />
              ) : (
                <MdClose className="text-light text-3xl" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu sliding from right, transparent bg */}
        <div
          className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 transition-transform duration-300 ease-in-out z-40 bg-secondary
          ${open ? "translate-x-0" : "translate-x-full"}
          `}
          style={{ backgroundColor: "transparent" }}
        >
          <ul className="flex flex-col justify-start mt-6 space-y-6 px-6 backdrop-blur-sm bg-white/10 rounded-l-lg shadow-lg min-h-full">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.name.toLowerCase() === "sign up" ||
                link.name.toLowerCase() === "login" ? (
                  <button
                    onClick={() => {
                      setOpen(false);
                      window.location.href = link.link;
                    }}
                    className="w-full bg-primary text-dark font-semibold px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.link}
                    onClick={() => setOpen(false)}
                    className="block text-dark text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
