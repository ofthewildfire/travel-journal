import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeButton = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme: String(theme === "light" ? "dark" : "ligt");
  };

  return (
    <button onClick={toggleTheme} className="bg-pink-600 px-2 py-3">
      {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeButton;
