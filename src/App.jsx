import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Stat from "./pages/stat/Stat";
import Sidebar from "./components/sidebar/Sidebar";
import ScreenProvider from "./context/screenMode";
import "react-circular-progressbar/dist/styles.css";

function App() {
  return (
    <ScreenProvider>
      <BrowserRouter>
        <main className="main">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stat" element={<Stat />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ScreenProvider>
  );
}

export default App;
