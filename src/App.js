import React from "react";
import NavigationBar from "./Sections/NavigationBar";
import Hero from "./Sections/Hero";

function App() {
  return (
    <>
      <div className="bg-newYorkPink">
        <NavigationBar />
        <Hero />
      </div>
    </>
  );
}

export default App;
