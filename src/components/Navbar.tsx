import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { UserButton, useUser } from "@clerk/clerk-react";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const authLinks = [
  { name: "Sign Up", link: "/signup" },
  { name: "Log In", link: "/login" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isSignedIn } = useUser();
  const navigate = useNavigate()

  return (
    <nav className="w-full p-4 max-sm:p-2 bg-primary relative z-50">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-light text-3xl max-sm:text-2xl font-bold">PayOva</h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className="text-light text-md font-semibold"
            >
              {link.name}
            </Link>
          ))}

          {!isSignedIn ? (
            authLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  link.name.toLowerCase() === 'sign up' ? navigate('/sign-up') : navigate('/sign-in')
                 }}
                className="bg-light text-primary px-6 py-2 rounded-full font-semibold shadow hover:bg-white transition"
              >
                <Link to={`${link.name.toLowerCase() === 'sign up'} ? '/sign-up' : '/sign-in'`}>{link.name}</Link> 
              </button>
            ))
          ) : (
            <UserButton />
          )}
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden relative">
         <div className="flex gap-2">
         <div
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer z-50"
          >
            {!open ? (
              <MdMenu className="text-light text-3xl" />
            ) : (
              <MdClose className="text-light text-3xl" />
            )}
          </div>
         <div>
         {isSignedIn && <UserButton />}
         </div>
         </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 transition-transform duration-300 ease-in-out z-40 bg-secondary
        ${open ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ backgroundColor: "transparent" }}
      >
        <ul className="flex flex-col mt-6 space-y-6 px-6 backdrop-blur-sm bg-white/10 rounded-l-lg shadow-lg min-h-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.link}
                onClick={() => setOpen(false)}
                className="block text-secondary text-lg font-medium hover:text-primary transition"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {!isSignedIn && (
            authLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                   link.name.toLowerCase() === 'sign up' ? navigate('/sign-up') : navigate('/sign-in')
                  }}
                  className="w-full bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/80 transition"
                >
                  {link.name}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
