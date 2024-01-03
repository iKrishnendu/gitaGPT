import { ChatContextProvider } from "./Context/chatContext";
import Chat from "./Pages/Chat";
import About from "./components/About";
import Error from "./components/Error";
// import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <ChatContextProvider>
          <Routes>
            {/* <Route path="/Home" element={<Home />} /> */}
            <Route path="/" element={<About />} />
            <Route path="/Chat" element={<Chat />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </ChatContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
