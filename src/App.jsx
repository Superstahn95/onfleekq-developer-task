import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Stat from "./pages/stat/Stat";
import Sidebar from "./components/sidebar/Sidebar";
import ScreenProvider from "./context/screenMode";
import "react-circular-progressbar/dist/styles.css";
import Message from "./pages/message/Message";
import Wallet from "./pages/wallet/Wallet";

function App() {
  return (
    <ScreenProvider>
      <BrowserRouter>
        <main className="main">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stat" element={<Stat />} />
            <Route path="/messages" element={<Message />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ScreenProvider>
  );
}

export default App;
