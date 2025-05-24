// src/RootLoader.tsx
import { useEffect, useState } from "react";
import FancySpinner from "./FancySpinner";

const RootLoader = ({ children }: { children: React.ReactNode }) => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Simulate loading logic – fetch user, init app, preload routes, etc.
    const load = async () => {
      await new Promise((res) => setTimeout(res, 1000)); // Adjust if needed
      setAppReady(true);
    };
    load();
  }, []);

  if (!appReady) return <FancySpinner />;

  return <>{children}</>;
};

export default RootLoader;
