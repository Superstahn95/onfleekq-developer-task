import "./App.css";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <main className="main">
      <Sidebar />
      <Home />
    </main>
  );
}

export default App;
