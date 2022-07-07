import React from "react";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;
