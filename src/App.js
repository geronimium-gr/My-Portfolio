import React from "react";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <div>
        <NavigationBar />
        <Hero />
      </div>
      <About />
    </>
  );
}

export default App;
