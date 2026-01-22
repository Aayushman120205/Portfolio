import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
