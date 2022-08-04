import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header.js";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <div>
      <Header scroll={scroll}/>
      <Home scroll={scroll}/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
