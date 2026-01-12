import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Activities from "./components/Activities";
import Coordinators from "./components/Coordinators";
import Footer from "./components/Footer";
import "./styles/main.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Coordinators />
      <Footer />
    </>
  );
}

export default App;
