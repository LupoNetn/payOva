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
  { name: "Sign Up", link: "/sign-up" },
  { name: "Log In", link: "/sign-in" },
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
        className={`absolute top-full left-0 right-0 transition-all duration-300 ease-in-out
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {/* Menu Content */}
        <div 
          className={`w-full bg-white shadow-lg transform transition-transform duration-300 origin-top
            ${open ? "scale-y-100" : "scale-y-0"}
          `}
        >
          <nav className="container mx-auto px-4 py-6">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    onClick={() => setOpen(false)}
                    className="flex items-center py-3 px-4 text-gray-700 hover:bg-primary/5 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Auth Links */}
            {!isSignedIn && (
              <div className="mt-6 space-y-3">
                <button
                  onClick={() => {
                    navigate('/sign-up');
                    setOpen(false);
                  }}
                  className="w-full bg-primary text-white font-medium px-4 py-3 rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => {
                    navigate('/sign-in');
                    setOpen(false);
                  }}
                  className="w-full border-2 border-primary text-primary font-medium px-4 py-3 rounded-xl hover:bg-primary hover:text-white transition-colors"
                >
                  Log In
                </button>
              </div>
            )}

            {/* Footer Links */}
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <Link 
                  to="/terms" 
                  className="hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Terms
                </Link>
                <Link 
                  to="/privacy" 
                  className="hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Privacy
                </Link>
                <Link 
                  to="/help" 
                  className="hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Help
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
