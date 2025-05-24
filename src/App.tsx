import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import ManualFeed from "./pages/ManualFeed";
import NoPage from "./components/NoPage";
import ManualDetails from "./components/ManualDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/" element={<AuthenticatedLayout />}>
          <Route path="manuals" element={<ManualFeed />} />
          <Route path="manuals/:id" element={<ManualDetails />} />
        </Route>
        <Route path="*" element={<NoPage />}/>
      </Routes>
    </div>
  );
};

export default App;
