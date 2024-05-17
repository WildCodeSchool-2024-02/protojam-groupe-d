import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProgressionBar from "./components/ProgressionBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <ProgressionBar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
