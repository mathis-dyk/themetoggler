import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export default ThemeContext;

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'dark');

  useEffect(() => localStorage.setItem("theme", theme))

  const toggle = () => theme === 'dark' ? setTheme('light') : setTheme('dark');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
