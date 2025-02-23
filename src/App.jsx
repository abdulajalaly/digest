import React from "react";
import Hero from "./components/hero";
import Demo from "./components/demo";
import Footer from "./components/footer";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>
      <div className="app">
        <Hero />
        <Demo />
        <Footer />
      </div>
    </main>
  );
};

export default App;
