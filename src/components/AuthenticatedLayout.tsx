
import { Outlet, Link } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AuthenticatedLayout = () => {
  return (
    <div>
      {/* If user is signed in, show the app layout */}
      <SignedIn>
        <div className="min-h-screen flex flex-col">
          {/* Topbar */}
         <Navbar />

        {/* Page content */}
          <main className="flex-1 p-6 bg-gray-50">
            <Outlet />
          </main>
        </div>
      </SignedIn>

      {/* If user is signed out, show fallback */}
      <SignedOut>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-center p-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">You're signed out</h2>
            <p className="mb-4 text-gray-600">Please log in to access the app.</p>
            <Link
              to="/sign-in"
              className="bg-primary text-white px-6 py-3 rounded-full font-medium"
            >
              Go to Login
            </Link>
          </div>
        </div>
        <Footer />
      </SignedOut>
    </div>
  );
};

export default AuthenticatedLayout;
