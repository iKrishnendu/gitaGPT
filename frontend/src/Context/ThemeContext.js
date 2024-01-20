// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const localStorageTheme = localStorage.getItem("theme");
    return localStorageTheme || "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div id="theme-wrapper" className={`${theme} theme-changer`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
