import React from "react";
import { ChatContextProvider } from "./Context/chatContext";
import Chat from "./Pages/Chat";
import About from "./components/About";
import Error from "./components/Error";
// import ToggleTheme from "./components/ToggleTheme"; // Import your ToggleTheme component
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <ChatContextProvider>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/Chat" element={<Chat />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </ChatContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
