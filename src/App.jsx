import React from "react";
import useReveal from "./hooks/useReveal";
import AboutCard from "./components/AboutCard";
import Information from "./components/Information";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  useReveal();

  return (
    <div className="App">
      <Information />
      <AboutCard />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;