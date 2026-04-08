import React from "react";
import AboutCard from "./components/AboutCard";
import Information from "./components/Information";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
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