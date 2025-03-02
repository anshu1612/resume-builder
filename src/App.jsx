import { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />
      <div className="m-12">
      <About />
      </div>
      
    </>
  );
}

export default App;
