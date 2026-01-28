import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
