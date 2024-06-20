import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeContext from "./context/ThemeContext.tsx";
// const [theme, setTheme] = React.useState("light");

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <ThemeContext.Provider value={"light"}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </ThemeContext.Provider>
);

// const container = document.getElementById("root");
// const root = createRoot(container!); // The '!' asserts that container is not null

// root.render(<App />);
