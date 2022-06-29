import React from "react";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Project />
    </>
  );
}

export default App;
